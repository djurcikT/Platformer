import { k } from "../main.js";

export class Projectiles {
  constructor(positions, ranges, type) {
    this.ranges = ranges;
    this.type = type;
    this.projectiles = [];
    const animMap = {
      fish: "swim",
      flames: "burn",
    };

    for (const position of positions) {
      this.projectiles.push(
        k.add([
          k.sprite(type, { anim: animMap[type] }),
          k.pos(position),
          k.area({
            shape: new Rect(vec2(0), 12, 12),
          }),
          k.anchor("center"),
          k.scale(4),
          k.rotate(type === "fish" ? 90 : 0),
          k.state("launch", ["launch", "fall"]),
          k.offscreen(),
          type,
        ])
      );
    }
  }

  setMovementPattern() {
    for (const [index, projectile] of this.projectiles.entries()) {
      const launch = projectile.onStateEnter("launch", async () => {
        if (this.type === "fish") projectile.flipX = false;
        if (this.type === "flames") projectile.flipY = false;
        await k.tween(
          projectile.pos.y,
          projectile.pos.y - this.ranges[index],
          2,
          (posY) => (projectile.pos.y = posY),
          k.easings.easeOutSine
        );
        projectile.enterState("fall");
      });

      const fall = projectile.onStateEnter("fall", async () => {
        if (this.type === "fish") projectile.flipX = true;
        if (this.type === "flames") projectile.flipY = true;
        await k.tween(
          projectile.pos.y,
          projectile.pos.y + this.ranges[index],
          2,
          (posY) => (projectile.pos.y = posY),
          k.easings.easeOutSine
        );
        projectile.enterState("launch");
      });

      k.onSceneLeave(() => {
        launch.cancel();
        fall.cancel();
      });
    }
  }
}
