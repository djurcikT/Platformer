import { k } from "../main.js";

export const load = {
  fonts: () => {
    k.loadFont("Round", "./assets/Round9x13.ttf");
  },
  assets: () => {
    k.loadSprite("up", "./assets/up-arrow.png"); // Done
    k.loadSprite("down", "./assets/down-arrow.png"); // Done
    k.loadSprite("left", "./assets/left-arrow.png"); // Done
    k.loadSprite("right", "./assets/right-arrow.png"); // Done
    k.loadSprite("space", "./assets/space.png"); // Done

    k.loadSprite("menu-background", "./assets/menu_background.png"); // Done
    k.loadSprite("forest-background", "./assets/Forest_Background_0.png");
    k.loadSprite("castle-background", "./assets/Castle_Background_0.png");
    k.loadSprite("sky-background-0", "./assets/Sky_Background_0.png");
    k.loadSprite("sky-background-1", "./assets/Sky_Background_1.png");
    k.loadSprite("sky-background-2", "./assets/Sky_Background_2.png");

    k.loadSprite("logo", "./assets/logo.png"); // Done

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

    k.loadSprite("player", "./assets/player.png", {
      sliceX: 10,
      sliceY: 4,
      anims: {
        idle: {
          from: 0,
          to: 6,
          loop: true,
        },
        run: {
          from: 10,
          to: 19,
          loop: true,
        },
        "jump-up": {
          from: 20,
          to: 23,
          loop: true,
        },
        "jump-down": {
          from: 30,
          to: 33,
          loop: true,
        },
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
