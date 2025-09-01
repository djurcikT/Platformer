import { k } from "../main.js";
import { Level } from "./Level.js";
import { attachCamera } from "./camera.js";
import { uiManager } from "./UIManager.js";

import { Player } from "../entities/Player.js";

export function setupLevel({
  config,
  layout,
  mappings,
  background,
  ambience,
  waveType,
  enemySpawns,
}) {
  const ambienceSound = k.play(ambience, { volume: 0.05, loop: true });
  k.onSceneLeave(() => ambienceSound.stop());

  k.setGravity(1400);

  const level = new Level();
  level.drawBackground(background);
  level.drawMapLayout(layout, mappings);

  const player = new Player(
    config.playerStartPosX,
    config.playerStartPosY,
    config.playerSpeed,
    config.jumpForce,
    config.nbLives,
    config.levelNumber,
    config.isFinal || false
  );
  player.enablePassthrough();
  player.enableFoodPickup();
  player.enableMobVulnerability();
  player.update();

  enemySpawns?.forEach((spawn) => spawn());

  attachCamera(player.gameObj, 0, 200);

  level.drawWaves(waveType, "wave");

  uiManager.addDarkBg();
  uiManager.displayFoodCount();
  player.updateFoodCount(uiManager.foodCountUI);
  uiManager.displayLivesCount();
  player.updateLives(uiManager.livesCountUI);
}
