import { k } from "../main.js";

class UIManager {
  displayLivesCount(player) {
    this.livesCountUI = k.add([
      k.text("", {
        font: "Round",
        size: 50,
      }),
      k.fixed(),
      k.pos(70, 10),
    ]);

    this.livesCountUI.add([
      k.sprite("star-icon"),
      k.pos(-60, -5),
      k.scale(3),
      k.fixed(),
    ]);
  }
  displayCoinCount(player) {
    this.coinCountUI = k.add([
      k.text("", {
        font: "Round",
        size: 50,
      }),
      {
        fullCoinCount: k.get("coin", { recursive: true }).length,
      },
      k.fixed(),
      k.pos(70, 70),
    ]);

    this.coinCountUI.add([
      k.sprite("coin-icon"),
      k.pos(-60, 0),
      k.scale(3),
      k.fixed(),
    ]);
  }

  displayBlinkingUIMessage(content, position) {
    const message = k.add([
      k.text(content, {
        size: 24,
        font: "Round",
      }),
      k.area(),
      k.anchor("center"),
      k.pos(position),
      k.opacity(),
      k.state("flash-up", ["flash-up", "flash-down"]),
    ]);
    message.onStateEnter("flash-up", async () => {
      await k.tween(
        message.opacity,
        0,
        1,
        (nextOpacityValue) => {
          message.opacity = nextOpacityValue;
        },
        k.easings.linear
      );
      message.enterState("flash-down");
    });
    message.onStateEnter("flash-down", async () => {
      await k.tween(
        message.opacity,
        1,
        1,
        (nextOpacityValue) => {
          message.opacity = nextOpacityValue;
        },
        k.easings.linear
      );
      message.enterState("flash-up");
    });
  }

  displayMainMenu() {
    k.add([k.sprite("menu-background"), k.scale(2)]);
    k.add([
      k.sprite("logo"),
      k.area(),
      k.anchor("center"),
      k.pos(k.center().x, k.center().y - 170),
    ]);

    this.displayBlinkingUIMessage(
      "Press [ Enter ] to Start Game",
      k.vec2(k.center().x, k.center().y + 100)
    );

    k.onKeyPress("enter", () => {
      k.play("confirm-ui", { speed: 1.5 });
      k.go("controls");
    });
  }

  displayControlsMenu() {
    k.add([k.sprite("menu-background"), k.scale(2)]);
    k.add([
      k.text("Controls", { font: "Round", size: 50 }),
      k.area(),
      k.anchor("center"),
      k.pos(k.center().x, k.center().y - 200),
    ]);
    const controlPrompts = k.add([k.pos(center().x + 30, center().y)]);

    controlPrompts.add([k.sprite("up"), k.pos(15, -60)]);
    controlPrompts.add([k.sprite("down"), k.pos(15, 0)]);
    controlPrompts.add([k.sprite("left"), k.pos(-45, 0)]);
    controlPrompts.add([k.sprite("right"), k.pos(75, 0)]);
    controlPrompts.add([k.sprite("space"), k.pos(-200, -35), k.scale(1.6)]);

    controlPrompts.add([
      k.text("Jump", { font: "Round", size: 32 }),
      k.pos(-190, 100),
    ]);
    controlPrompts.add([
      k.text("Move", { font: "Round", size: 32 }),
      k.pos(10, 100),
    ]);

    this.displayBlinkingUIMessage(
      "Press [ Enter ] to Start Game",
      k.vec2(k.center().x, k.center().y + 300)
    );

    k.onKeyPress("enter", () => {
      k.play("confirm-ui", { speed: 1.5 });
      k.go("1");
    });
  }

  addDarkBg() {
    k.add([k.rect(270, 130), k.color(0, 0, 0), k.fixed()]);
  }
}

export const uiManager = new UIManager();
