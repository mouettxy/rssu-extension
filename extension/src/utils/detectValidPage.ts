import { DETECTION_ELEMENT } from "@/config";

export function detect() {
  const detectionElement = document.querySelector(DETECTION_ELEMENT);

  return !!detectionElement;
}

export default detect;
