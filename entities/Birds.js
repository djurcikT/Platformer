import { k } from "../main.js";

export class Birds {
  constructor(positions, ranges) {
    this.ranges = ranges;
    this.birds = [];

    for (const position of positions) {
      this.birds.push(
        k.add([
          k.sprite("birds", { anim: "fly" }),
          k.pos(position),
          k.area({ shape: new Rect(vec2(0), 10, 10) }),
          k.anchor("center"),
          k.scale(4),
          k.rotate(),
          k.state("fly-left", [
            "fly-left",
            "fly-right",
            "dive-attack-left",
            "dive-attack-right",
          ]),
          k.offscreen(),
          "birds",
        ])
      );
    }
  }

  async fly(bird, moveBy, duration) {
    await k.tween(
      bird.pos.x,
      bird.pos.x + moveBy,
      duration,
      (posX) => (bird.pos.x = posX),
      k.easings.linear
    );
  }
  async dive(bird, target, duration) {
    if (!bird.isOffScreen()) k.play("dive", { volume: 0.05 });
    await k.tween(
      bird.pos,
      target,
      duration,
      (pos) => (bird.pos = pos),
      k.easings.easeInSine
    );
  }

  setMovementPattern() {
    for (const [index, bird] of this.birds.entries()) {
      const flyLeft = bird.onStateEnter("fly-left", async () => {
        bird.flipX = false;
        await this.fly(bird, -this.ranges[index], 0.5);
        bird.enterState("dive-attack-left");
      });
      const flyRight = bird.onStateEnter("fly-right", async () => {
        bird.flipX = true;
        await this.fly(bird, this.ranges[index], 0.5);
        bird.enterState("dive-attack-right");
      });

      const diveAttackLeft = bird.onStateEnter("dive-attack-left", async () => {
        await this.dive(
          bird,
          vec2(
            bird.pos.x - this.ranges[index],
            bird.pos.y + this.ranges[index]
          ),
          0.5
        );
        await this.dive(
          bird,
          vec2(
            bird.pos.x - this.ranges[index],
            bird.pos.y - this.ranges[index]
          ),
          0.5
        );
        bird.enterState("fly-right");
      });
      const diveAttackRight = bird.onStateEnter(
        "dive-attack-right",
        async () => {
          await this.dive(
            bird,
            vec2(
              bird.pos.x + this.ranges[index],
              bird.pos.y + this.ranges[index]
            ),
            0.5
          );
          await this.dive(
            bird,
            vec2(
              bird.pos.x + this.ranges[index],
              bird.pos.y - this.ranges[index]
            ),
            0.5
          );
          bird.enterState("fly-left");
        }
      );

      k.onSceneLeave(() => {
        flyLeft.cancel();
        flyRight.cancel();
        diveAttackLeft.cancel();
        diveAttackRight.cancel();
      });
    }
  }
}
