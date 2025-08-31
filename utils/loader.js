import { k } from "../main.js";

export const load = {
  fonts: () => {
    k.loadFont("Round", "./assets/Round9x13.ttf");
  },
  assets: () => {
    k.loadSprite("up", "./assets/up-arrow.png");
    k.loadSprite("down", "./assets/down-arrow.png");
    k.loadSprite("left", "./assets/left-arrow.png");
    k.loadSprite("right", "./assets/right-arrow.png");
    k.loadSprite("space", "./assets/space.png");

    k.loadSprite("menu-background", "./assets/menu_background.png");
    k.loadSprite("forest-background", "./assets/forest_background.png");
    k.loadSprite("castle-background", "./assets/castle_background.png");
    k.loadSprite("sky-background", "./assets/sky_background.png");

    k.loadSprite("logo", "./assets/logo.png");

    k.loadSprite("bridge", "./assets/Bridge.png");
    k.loadSprite("strawberry", "./assets/strawberry.png");
    k.loadSprite("life-icon", "./assets/heart.png");

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

    loadSprite("spider-1", "./assets/Spider_1.png", {
      sliceX: 3,
      sliceY: 1,
      anims: {
        crawl: { from: 0, to: 2, loop: true },
        idle: 0,
      },
    });
    loadSprite("spider-2", "./assets/Spider_2.png", {
      sliceX: 3,
      sliceY: 1,
      anims: {
        crawl: { from: 0, to: 2, loop: true },
        idle: 0,
      },
    });
    loadSprite("fish", "./assets/Fish_1.png", {
      sliceX: 2,
      sliceY: 1,
      anims: {
        swim: {
          from: 0,
          to: 1,
          loop: true,
        },
      },
    });
    loadSprite("flames", "./assets/Flame_1.png", {
      sliceX: 2,
      sliceY: 1,
      anims: {
        burn: {
          from: 0,
          to: 1,
          loop: true,
        },
      },
    });
    loadSprite("axe", "./assets/Axe_Trap.png");
    loadSprite("saw", "./assets/Circular_Saw.png");
    loadSprite("birds", "./assets/Bird_2.png", {
      sliceX: 3,
      sliceY: 1,
      anims: {
        fly: {
          from: 0,
          to: 2,
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
    k.loadSound("spider-attack", "./sounds/spider-attack.mp3");
    k.loadSound("swinging-axe", "./sounds/swinging-axe.mp3");
    k.loadSound("saw", "./sounds/saw.wav");
    k.loadSound("dive", "./sounds/dive.wav");
  },
};
