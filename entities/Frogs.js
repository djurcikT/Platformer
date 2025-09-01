import { k } from "../main.js";

export class Frogs {
  constructor(positions, ranges, durations, type) {
    this.ranges = ranges;
    this.durations = durations;

    this.frogs = [];
    for (const position of positions) {
      this.frogs.push(
        k.add([
          k.sprite(`frog-${type}`, { anim: "walk" }),
          k.pos(position),
          k.area({
            shape: new Rect(vec2(0, 4.5), 20, 6),
            collisionIgnore: ["frogs"],
          }),
          k.anchor("center"),
          k.body(),
          k.scale(4),
          k.state("idle", ["idle", "walk-left", "walk-right"]),
          k.offscreen(),
          "frogs",
        ])
      );
    }
  }

  async walk(frog, moveBy, duration) {
    if (frog.curAnim() !== "walk") frog.play("walk");

    await k.tween(
      frog.pos.x,
      frog.pos.x + moveBy,
      duration,
      (posX) => (frog.pos.x = posX),
      k.easings.easeOutSine
    );
  }

  setMovementPattern() {
    for (const [index, frog] of this.frogs.entries()) {
      const idle = frog.onStateEnter("idle", async (previousState) => {
        if (frog.curAnim() !== "idle") frog.play("idle");

        await new Promise((resolve) => {
          setTimeout(() => resolve(), 1000);
        });

        if (previousState === "walk-left") {
          frog.enterState("walk-right");
          return;
        } else {
          frog.jump();
          if (!frog.isOffScreen()) {
            k.play("spider-attack", { volume: 0.6 });
          }
          frog.enterState("walk-left");
        }
      });

      const walkLeft = frog.onStateEnter("walk-left", async () => {
        frog.flipX = true;

        await this.walk(frog, -this.ranges[index], this.durations[index]);
        frog.enterState("idle", "walk-left");
      });

      const walkRight = frog.onStateEnter("walk-right", async () => {
        frog.flipX = false;
        await this.walk(frog, this.ranges[index], this.durations[index]);
        frog.enterState("idle", "walk-right");
      });

      k.onSceneLeave(() => {
        idle.cancel();
        walkLeft.cancel();
        walkRight.cancel();
      });
    }
  }

  enablePassthrough() {
    for (const frog of this.frogs) {
      frog.onBeforePhysicsResolve((collision) => {
        if (collision.target.is("passthrough") && frog.isJumping()) {
          collision.preventResolution();
        }
      });
    }
  }
}
