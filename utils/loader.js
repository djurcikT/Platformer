import { k } from "../main.js";

export const load = {
  fonts: () => {
    k.loadFont("Round", "./assets/Round9x13.ttf");
  },
  assets: () => {
    k.loadSprite("up", "./assets/Arrow_Up_Key_Dark.png");
    k.loadSprite("down", "./assets/Arrow_Down_Key_Dark.png");
    k.loadSprite("left", "./assets/Arrow_Left_Key_Dark.png");
    k.loadSprite("right", "./assets/Arrow_Right_Key_Dark.png");
    k.loadSprite("space", "./assets/Space_Key_Dark.png");

    k.loadSprite("forest-background", "./assets/Forest_Background_0.png");
    k.loadSprite("castle-background", "./assets/Castle_Background_0.png");
    k.loadSprite("sky-background-0", "./assets/Sky_Background_0.png");
    k.loadSprite("sky-background-1", "./assets/Sky_Background_1.png");
    k.loadSprite("sky-background-2", "./assets/Sky_Background_2.png");

    k.loadSprite("logo", "./assets/Logo.png");

    k.loadSprite("bridge", "./assets/Bridge.png");
    k.loadSprite("coin", "./assets/Coin.png");
    k.loadSprite("coin-icon", "./assets/Coins_UI.png");
    k.loadSprite("star-icon", "./assets/Stars_UI.png");

    k.loadSprite("grass-tileset", "./assets/Grass_Tileset.png", {
      sliceX: 3,
      sliceY: 4,
      anims: {
        tm: 1,
        tr: 2,
        ml: 3,
        mm: 4,
        mr: 5,
        bl: 6,
        bm: 7,
        br: 8,
      },
    });
    k.loadSprite("grass-oneway-tileset", "./assets/Grass_Oneway.png", {
      sliceX: 3,
      sliceY: 4,
      anims: {
        tl: 0,
        tm: 1,
        tr: 2,
        ml: 3,
        mm: 4,
        mr: 5,
        bl: 6,
        bm: 7,
        br: 8,
      },
    });

    k.loadSprite("brick-tileset", "./assets/Brick_Tileset.png", {
      sliceX: 3,
      sliceY: 4,
      anims: {
        tm: 1,
        tr: 2,
        ml: 3,
        mm: 4,
        mr: 5,
        bl: 6,
        bm: 7,
        br: 8,
      },
    });
    k.loadSprite("brick-oneway-tileset", "./assets/Brick_Oneway.png", {
      sliceX: 3,
      sliceY: 4,
      anims: {
        tl: 0,
        tm: 1,
        tr: 2,
        ml: 3,
        mm: 4,
        mr: 5,
        bl: 6,
        bm: 7,
        br: 8,
      },
    });

    k.loadSprite("rock-tileset", "./assets/Grass_Rock_Tileset.png", {
      sliceX: 3,
      sliceY: 4,
      anims: {
        tm: 1,
        tr: 2,
        ml: 3,
        mm: 4,
        mr: 5,
        bl: 6,
        bm: 7,
        br: 8,
      },
    });
    k.loadSprite("rock-oneway-tileset", "./assets/Grass_Rock_Oneway.png", {
      sliceX: 3,
      sliceY: 4,
      anims: {
        tl: 0,
        tm: 1,
        tr: 2,
        ml: 3,
        mm: 4,
        mr: 5,
        bl: 6,
        bm: 7,
        br: 8,
      },
    });

    k.loadSprite("water", "./assets/Water.png", {
      sliceX: 8,
      sliceY: 1,
      anims: {
        wave: {
          from: 0,
          to: 7,
          speed: 16,
          loop: true,
        },
      },
    });
    k.loadSprite("lava", "./assets/Lava.png", {
      sliceX: 8,
      sliceY: 1,
      anims: {
        wave: {
          from: 0,
          to: 7,
          speed: 16,
          loop: true,
        },
      },
    });
    k.loadSprite("clouds", "./assets/Clouds.png", {
      sliceX: 8,
      sliceY: 1,
      anims: {
        wave: {
          from: 0,
          to: 7,
          speed: 16,
          loop: true,
        },
      },
    });

    k.loadSprite("player", "./assets/Player.png", {
      sliceX: 4,
      sliceY: 6,
      anims: {
        idle: {
          from: 0,
          to: 3,
          loop: true,
        },
        run: {
          from: 4,
          to: 7,
          loop: true,
        },
        "jump-up": 8,
        "jump-down": 9,
      },
    });
  },
  sounds: () => {
    k.loadSound("confirm-ui", "./sounds/confirm-ui.wav");
    k.loadSound("jump", "./sounds/jump.wav");
    k.loadSound("hit", "./sounds/hit.wav");
    k.loadSound("coin", "./sounds/coin.wav");
  },
};
