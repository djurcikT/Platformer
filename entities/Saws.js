import { k } from "../main.js";

export class Saws {
  constructor(positions, ranges) {
    this.positions = positions;
    this.ranges = ranges;
    this.saws = [];

    for (const position of this.positions) {
      this.saws.push(
        k.add([
          k.sprite("saw"),
          k.pos(position),
          k.area(),
          k.anchor("center"),
          k.scale(4),
          k.rotate(),
          k.state("rotate-left", ["rotate-left", "rotate-right"]),
          k.offscreen(),
          "saws",
        ])
      );
    }
  }

  async moveAndRotate(saw, moveBy) {
    if (!saw.isOffScreen()) k.play("saw", { volume: 0.6, seek: 10 });

    await Promise.all([
      k.tween(
        saw.pos.x,
        saw.pos.x + moveBy,
        1,
        (posX) => (saw.pos.x = posX),
        k.easings.linear
      ),
      k.tween(
        saw.angle,
        360,
        2,
        (currAngle) => (saw.angle = currAngle),
        k.easings.linear
      ),
    ]);
  }

  setMovementPattern() {
    for (const [index, saw] of this.saws.entries()) {
      const rotateLeft = saw.onStateEnter("rotate-left", async () => {
        await this.moveAndRotate(saw, -this.ranges[index]);
        saw.angle = 0;
        saw.enterState("rotate-right");
      });
      const rotateRight = saw.onStateEnter("rotate-right", async () => {
        await this.moveAndRotate(saw, this.ranges[index]);
        saw.angle = 0;
        saw.enterState("rotate-left");
      });

      k.onSceneLeave(() => {
        rotateLeft.cancel();
        rotateRight.cancel();
      });
    }
  }
}
