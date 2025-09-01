import { k } from "../main.js";

export class Player {
  heightDelta = 0;
  isRespawning = false;
  isMoving = false;
  coyoteLapse = 0.1;
  food = 0;

  constructor(
    posX,
    posY,
    speed,
    jumpForce,
    nbLives,
    currentLevelScene,
    isInFinalLevel
  ) {
    this.currentLevelScene = currentLevelScene;
    this.isInFinalLevel = isInFinalLevel;
    this.initialX = posX;
    this.initialY = posY;
    this.makePlayer();
    this.setPlayerControls();
    this.speed = speed;
    this.jumpForce = jumpForce;
    this.lives = nbLives;
    this.previousHeight = this.gameObj.pos.y;
  }

  makePlayer() {
    this.gameObj = k.add([
      k.sprite("player", { anim: "idle" }),
      k.area({ shape: new Rect(vec2(0, 8), 8, 8) }),
      k.anchor("center"),
      k.pos(this.initialX, this.initialY),
      k.scale(4),
      k.body(),
      "player",
    ]);
  }

  enablePassthrough() {
    this.gameObj.onBeforePhysicsResolve((collision) => {
      if (collision.target.is("passthrough") && this.gameObj.isJumping()) {
        collision.preventResolution();
      }

      if (collision.target.is("passthrough") && k.isKeyDown("down")) {
        collision.preventResolution();
      }
    });
  }

  enableFoodPickup() {
    this.gameObj.onCollide("strawberry", (strawberry) => {
      this.food++;
      k.destroy(strawberry);
      k.play("coin", { volume: 0.2 });
    });
  }

  setPlayerControls() {
    k.onKeyDown("left", () => {
      if (this.gameObj.curAnim() !== "run") this.gameObj.play("run");
      this.gameObj.flipX = true;
      if (!this.isRespawning) this.gameObj.move(-this.speed, 0);
      this.isMoving = true;
    });
    k.onKeyDown("right", () => {
      if (this.gameObj.curAnim() !== "run") this.gameObj.play("run");
      this.gameObj.flipX = false;
      if (!this.isRespawning) this.gameObj.move(this.speed, 0);
      this.isMoving = true;
    });

    k.onKeyDown("space", () => {
      if (!this.gameObj.isGrounded() && this.hasJumpedOnce) return;

      if (k.time() - this.timeSinceLastGrounded > this.coyoteLapse) return;

      this.gameObj.jump(this.jumpForce);
      if (this.gameObj.curAnim() !== "jump") k.play("jump", { volume: 0.4 });
      this.hasJumpedOnce = true;
    });

    k.onKeyRelease(() => {
      if (k.isKeyReleased("left") || k.isKeyReleased("right")) {
        this.gameObj.play("idle");
        this.isMoving = false;
      }
    });
  }

  respawnPlayer() {
    if (this.lives > 0) {
      this.lives--;
      this.gameObj.pos = vec2(this.initialX, this.initialY);
      this.isRespawning = true;
      setTimeout(() => (this.isRespawning = false), 500);
      return;
    }

    k.go("gameover");
  }

  enableMobVulnerability() {
    function hitAndRespawn(context) {
      k.play("hit", { speed: 1.5 });
      context.respawnPlayer();
    }
    this.gameObj.onCollide("frogs", () => hitAndRespawn(this));
    this.gameObj.onCollide("fish", () => hitAndRespawn(this));
    this.gameObj.onCollide("flame", () => hitAndRespawn(this));
    this.gameObj.onCollide("axes", () => hitAndRespawn(this));
    this.gameObj.onCollide("saws", () => hitAndRespawn(this));
    this.gameObj.onCollide("birds", () => hitAndRespawn(this));
  }

  update() {
    k.onUpdate(() => {
      if (this.gameObj.isGrounded()) {
        this.hasJumpedOnce = false;
        this.timeSinceLastGrounded = k.time();
      }

      this.heightDelta = this.previousHeight - this.gameObj.pos.y;
      this.previousHeight = this.gameObj.pos.y;

      if (this.gameObj.pos.y > 1000) {
        k.play("hit", { speed: 1.5 });
        this.respawnPlayer();
      }

      if (!this.isMoving && this.gameObj.curAnim() !== "idle") {
        this.gameObj.play("idle");
      }

      if (
        !this.gameObj.isGrounded() &&
        this.heightDelta > 0 &&
        this.gameObj.curAnim() !== "jump-up"
      ) {
        this.gameObj.play("jump-up");
      }
      if (
        !this.gameObj.isGrounded() &&
        this.heightDelta < 0 &&
        this.gameObj.curAnim() !== "jump-down"
      ) {
        this.gameObj.play("jump-down");
      }
    });
  }

  updateLives(livesCOuntUI) {
    k.onUpdate(() => {
      livesCOuntUI.text = this.lives;
    });
  }

  updateFoodCount(foodCountUI) {
    k.onUpdate(() => {
      foodCountUI.text = `${this.food} / ${foodCountUI.fullFoodCount}`;
      if (this.food === foodCountUI.fullFoodCount) {
        k.go(this.isInFinalLevel ? "end" : this.currentLevelScene + 1);
      }
    });
  }
}
