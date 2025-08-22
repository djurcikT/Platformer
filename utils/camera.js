import { k } from "../main.js";

export function attachCamera(attachedObj, offsetX, fixedY) {
  k.onUpdate(() => {
    k.camPos(attachedObj.pos.x + offsetX, fixedY);
  });
}
