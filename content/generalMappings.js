import { k } from "../main.js";

export function generateMappings(tileType) {
  return {
    0: () => [
      k.sprite(`${tileType}-tileset`),
      k.area(),
      k.body({
        isStatic: true,
      }),
      k.offscreen(),
    ],
    1: () => [
      k.sprite(`${tileType}-tileset`, { anim: "tm" }),
      k.area(),
      k.body({
        isStatic: true,
      }),
      k.offscreen(),
    ],
    2: () => [
      k.sprite(`${tileType}-tileset`, { anim: "tr" }),
      k.area(),
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    3: () => [
      k.sprite(`${tileType}-tileset`, { anim: "ml" }),
      k.area(),
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    4: () => [k.sprite(`${tileType}-tileset`, { anim: "mm" }), k.offscreen()],
    5: () => [
      k.sprite(`${tileType}-tileset`, { anim: "mr" }),
      k.area(),
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    6: () => [k.sprite(`${tileType}-tileset`, { anim: "bl" }), k.offscreen()],
    7: () => [k.sprite(`${tileType}-tileset`, { anim: "bm" }), k.offscreen()],
    8: () => [k.sprite(`${tileType}-tileset`, { anim: "br" }), k.offscreen()],

    9: () => [
      k.sprite(`${tileType}-oneway-tileset`, { anim: "tl" }),
      k.area({ shape: new Rect(vec2(0), 16, 3) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    a: () => [
      k.sprite(`${tileType}-oneway-tileset`, { anim: "tm" }),
      k.area({ shape: new Rect(vec2(0), 16, 3) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    b: () => [
      k.sprite(`${tileType}-oneway-tileset`, { anim: "tr" }),
      k.area({ shape: new Rect(vec2(0), 16, 3) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    c: () => [
      k.sprite(`${tileType}-oneway-tileset`, { anim: "ml" }),
      k.offscreen(),
    ],
    d: () => [
      k.sprite(`${tileType}-oneway-tileset`, { anim: "mm" }),
      k.offscreen(),
    ],
    e: () => [
      k.sprite(`${tileType}-oneway-tileset`, { anim: "mr" }),
      k.offscreen(),
    ],

    o: () => [
      k.sprite("bridge"),
      k.area(),
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    "@": () => [k.sprite("coin"), k.area(), "coin", k.offscreen()],
  };
}
