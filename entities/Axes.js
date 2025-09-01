import { k } from "../main.js";

export class Axes {
  constructor(positions, swingDurations) {
    this.swingDurations = swingDurations;
    this.positions = positions;
    this.axes = [];

    for (const position of positions) {
      this.axes.push(
        k.add([
          k.sprite("axe"),
          k.area({
            shape: new Rect(vec2(0, 40), 30, 10),
            collisionIgnore: ["spiders", "flames"],
          }),
          k.pos(position),
          k.anchor(vec2(0, -0.75)),
          k.scale(4),
          k.state("swing-left", ["swing-left", "swing-right"]),
          k.rotate(),
          k.offscreen(),
          "axes",
        ])
      );
    }
  }

  async swing(axe, targetAngle, swingDuration) {
    if (!axe.isOffScreen()) k.play("swinging-axe", { volume: 0.1 });

    await k.tween(
      axe.angle,
      targetAngle,
      swingDuration,
      (val) => (axe.angle = val),
      k.easings.easeInOutSine
    );
  }

  setMovementPattern() {
    for (const [index, axe] of this.axes.entries()) {
      const swingLeft = axe.onStateEnter("swing-left", async () => {
        await this.swing(axe, 90, this.swingDurations[index]);
        axe.enterState("swing-right");
      });
      const swingRight = axe.onStateEnter("swing-right", async () => {
        await this.swing(axe, -90, this.swingDurations[index]);
        axe.enterState("swing-left");
      });

      k.onSceneLeave(() => {
        swingLeft.cancel();
        swingRight.cancel();
      });
    }
  }
}
