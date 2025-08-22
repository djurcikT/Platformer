import { k } from "../main.js";

export class Level {
  drawWaves(type, anim) {
    let offset = -100;
    for (let i = 0; i < 21; i++) {
      k.add([
        k.sprite(type, { anim }),
        k.pos(offset, 600),
        k.scale(4),
        k.fixed(),
      ]);
      offset += 64;
    }
  }
  drawMapLayout(levelLayout, mappings) {
    const layerSettings = {
      tileWidth: 16,
      tileHeight: 12,
      tiles: mappings,
    };

    this.map = [];
    for (const layerLayout of levelLayout) {
      this.map.push(k.addLevel(layerLayout, layerSettings));
    }

    for (const layer of this.map) {
      layer.use(k.scale(4));
    }
  }

  drawBackground(bgSpriteName) {
    k.add([k.sprite(bgSpriteName), k.fixed(), k.scale(4)]);
  }
}
