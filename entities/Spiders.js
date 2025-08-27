import { k } from "../main.js";

export class Spiders {
  constructor(positions, ranges, speeds, type) {
    this.ranges = ranges;
    this.speeds = speeds;

    this.spiders = [];
    for (const position of positions) {
      this.spiders.push(
        k.add([
          k.sprite("spider-${type}", { anim: "crawl" }),
          k.pos(position),
          k.area({
            shape: new Rect(vec2(0, 4.5), 20, 6),
            collisionIgnore: ["spiders"],
          }),
          k.anchor("center"),
          k.body(),
          k.scale(4),
          k.state("idle", ["idle", "crawl-left", "crawl-right"]),
          k.offscreen(),
          "spiders",
        ])
      );
    }
  }

  async crawl(spider, moveBy, duration) {
    if (spider.curAnim() !== "crawl") spider.play("crawl");

    await k.tween(
      spider.pos.x,
      spider.pos.x + moveBy,
      duration,
      (posX) => (spider.pos.x = posX),
      k.easings.easeOutSine
    );
  }

  setMovementPattern() {
    for (const [index, spider] of this.spiders.entries()) {
      const idle = spider.onStateEnter("idle", async (previousState) => {
        if (spider.curAnim() !== "idle") spider.play("idle");

        await new Promise((resolve) => {
          setTimeout(() => resolve(), 1000);
        });

        if (previousState === "crawl-left") {
          spider.enterState("crawl-right");
          return;
        }
        spider.jump();
        if (!spider.isOffScreen()) {
          k.play("spider-attack", { volume: 0.6 });
        }
        spider.enterState("crawl-left");
      });
      const crawlLeft = spider.onStateEnter("crawl-left", async () => {
        spider.flipX(false);

        await this.crawl(spider, -this.ranges[index], this.speeds[index]);
        spider.enterState("idle", "crawl-left");
      });
    }
  }
}
