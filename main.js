import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";

import { uiManager } from "./utils/UIManager.js";
import { load } from "./utils/loader.js";
import { setupLevel } from "./utils/setupLevel.js";

import { Frogs } from "./entities/Frogs.js";
import { Projectiles } from "./entities/Projectiles.js";
import { Axes } from "./entities/Axes.js";
import { Saws } from "./entities/Saws.js";
import { Birds } from "./entities/Birds.js";

import { level1Layout, level1Mappings } from "./content/level1/level1Layout.js";
import { level1Config } from "./content/level1/config.js";
import { level2Layout, level2Mappings } from "./content/level2/level2Layout.js";
import { level2Config } from "./content/level2/config.js";
import { level3Layout, level3Mappings } from "./content/level3/level3Layout.js";
import { level3Config } from "./content/level3/config.js";

export const k = kaplay({
  width: 1280,
  height: 720,
  letterbox: true,
});

load.fonts();
load.sounds();
load.assets();

const scenes = {
  menu: () => uiManager.displayMainMenu(),

  controls: () => uiManager.displayControlsMenu(),

  1: () =>
    setupLevel({
      config: { ...level1Config, levelNumber: 1, isFinal: false },
      layout: level1Layout,
      mappings: level1Mappings,
      background: "forest-background",
      ambience: "water-ambience",
      waveType: "water",
      enemySpawns: [
        () => {
          const frogs = new Frogs(
            level1Config.frogPositions.map((frogPos) => frogPos()),
            level1Config.frogRanges,
            level1Config.frogDurations,
            level1Config.frogType
          );
          frogs.setMovementPattern();
          frogs.enablePassthrough();
        },
        () => {
          const fish = new Projectiles(
            level1Config.fishPositions.map((fishPos) => fishPos()),
            level1Config.fishRanges,
            "fish"
          );
          fish.setMovementPattern();
        },
      ],
    }),

  2: () =>
    setupLevel({
      config: { ...level2Config, levelNumber: 2, isFinal: false },
      layout: level2Layout,
      mappings: level2Mappings,
      background: "castle-background",
      ambience: "lava-ambience",
      waveType: "lava",
      enemySpawns: [
        () => {
          const frogs = new Frogs(
            level2Config.frogPositions.map((frogPos) => frogPos()),
            level2Config.frogRanges,
            level2Config.frogDurations,
            level2Config.frogType
          );
          frogs.setMovementPattern();
          frogs.enablePassthrough();
        },
        () => {
          const flames = new Projectiles(
            level2Config.flamePositions.map((flamePos) => flamePos()),
            level2Config.flameRanges,
            "flame"
          );
          flames.setMovementPattern();
        },
        () => {
          const axes = new Axes(
            level2Config.axesPositions.map((axePos) => axePos()),
            level2Config.axesSwingDurations
          );
          axes.setMovementPattern();
        },
        () => {
          const saws = new Saws(
            level2Config.sawsPositions.map((sawsPos) => sawsPos()),
            level2Config.sawsRanges,
            "saws"
          );
          saws.setMovementPattern();
        },
      ],
    }),

  3: () =>
    setupLevel({
      config: { ...level3Config, levelNumber: 3, isFinal: true },
      layout: level3Layout,
      mappings: level3Mappings,
      background: "sky-background",
      ambience: "wind-ambience",
      waveType: "clouds",
      enemySpawns: [
        () => {
          const birds = new Birds(
            level3Config.birdPositions.map((birdPos) => birdPos()),
            level3Config.birdRanges
          );
          birds.setMovementPattern();
        },
      ],
    }),

  gameover: () => uiManager.displayGameOverScreen(),

  end: () => uiManager.displayEndGameScreen(),
};

for (const key in scenes) {
  k.scene(key, scenes[key]);
}

k.go("menu");
