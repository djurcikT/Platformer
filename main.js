// https://www.youtube.com/watch?v=wZpbTR7pYR0&t=12238s 6.56.07

import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
import { uiManager } from "./utils/UIManager.js";
import { load } from "./utils/loader.js";
import { Level } from "./utils/Level.js";
import { attachCamera } from "./utils/camera.js";

import { Player } from "./entities/Player.js";

import { Spiders } from "./entities/Spiders.js";
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
  menu: () => {
    uiManager.displayMainMenu();
  },
  controls: () => {
    uiManager.displayControlsMenu();
  },
  1: () => {
    k.setGravity(1400);

    const level1 = new Level();
    level1.drawBackground("forest-background");
    level1.drawMapLayout(level1Layout, level1Mappings);

    const player = new Player(
      level1Config.playerStartPosX,
      level1Config.playerStartPosY,
      level1Config.playerSpeed,
      level1Config.jumpForce,
      level1Config.nbLives,
      1,
      false
    );
    player.enablePassthrough();
    player.enableFoodPickup();
    player.enableMobVulnerability();
    player.update();

    const spiders = new Spiders(
      level1Config.spiderPositions.map((spiderPos) => spiderPos()),
      level1Config.spiderRanges,
      level1Config.spiderDurations,
      level1Config.spiderType
    );
    spiders.setMovementPattern();
    spiders.enablePassthrough();

    const fish = new Projectiles(
      level1Config.fishPositions.map((fishPos) => fishPos()),
      level1Config.fishRanges,
      "fish"
    );
    fish.setMovementPattern();

    attachCamera(player.gameObj, 0, 200);

    level1.drawWaves("water", "wave");

    uiManager.addDarkBg();

    uiManager.displayFoodCount();
    player.updateFoodCount(uiManager.foodCountUI);

    uiManager.displayLivesCount();
    player.updateLives(uiManager.livesCountUI);
  },
  2: () => {
    k.setGravity(1400);

    const level2 = new Level();
    level2.drawBackground("castle-background");
    level2.drawMapLayout(level2Layout, level2Mappings);

    const player = new Player(
      level2Config.playerStartPosX,
      level2Config.playerStartPosY,
      level2Config.playerSpeed,
      level2Config.jumpForce,
      level2Config.nbLives,
      2,
      false
    );
    player.enablePassthrough();
    player.enableFoodPickup();
    player.enableMobVulnerability();
    player.update();

    const spiders = new Spiders(
      level2Config.spiderPositions.map((spiderPos) => spiderPos()),
      level2Config.spiderRanges,
      level2Config.spiderDurations,
      level2Config.spiderType
    );
    spiders.setMovementPattern();
    spiders.enablePassthrough();

    const flames = new Projectiles(
      level2Config.flamesPositions.map((flamesPos) => flamesPos()),
      level2Config.flamesRanges,
      "flames"
    );
    flames.setMovementPattern();

    const axes = new Axes(
      level2Config.axesPositions.map((axePos) => axePos()),
      level2Config.axesSwingDurations
    );
    axes.setMovementPattern();

    const saws = new Saws(
      level2Config.sawsPositions.map((sawsPos) => sawsPos()),
      level2Config.sawsRanges,
      "saws"
    );
    saws.setMovementPattern();

    attachCamera(player.gameObj, 0, 200);

    level2.drawWaves("lava", "wave");

    uiManager.addDarkBg();

    uiManager.displayFoodCount();
    player.updateFoodCount(uiManager.foodCountUI);

    uiManager.displayLivesCount();
    player.updateLives(uiManager.livesCountUI);
  },
  3: () => {
    k.setGravity(1400);

    const level3 = new Level();
    level3.drawBackground("sky-background");
    level3.drawMapLayout(level3Layout, level3Mappings);

    const player = new Player(
      level3Config.playerStartPosX,
      level3Config.playerStartPosY,
      level3Config.playerSpeed,
      level3Config.jumpForce,
      level3Config.nbLives,
      3,
      true
    );
    player.enablePassthrough();
    player.enableFoodPickup();
    player.enableMobVulnerability();
    player.update();

    const birds = new Birds(
      level3Config.birdPositions.map((birdPos) => birdPos()),
      level3Config.birdRanges
    );
    birds.setMovementPattern();

    attachCamera(player.gameObj, 0, 200);

    level3.drawWaves("clouds", "wave");

    uiManager.addDarkBg();

    uiManager.displayFoodCount();
    player.updateFoodCount(uiManager.foodCountUI);

    uiManager.displayLivesCount();
    player.updateLives(uiManager.livesCountUI);
  },
  gameover: () => {},
  end: () => {},
};

for (const key in scenes) {
  k.scene(key, scenes[key]);
}

k.go("3");
