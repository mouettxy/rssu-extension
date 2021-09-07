import { parsePage, mapDatasetToElement } from "@/utils/parsePageData";
import { generateId } from "@/utils/previewIdGenerator";
import PreviewButton from "@/ui/PreviewButton.vue";
import { createApp } from "vue";

export function setupPreviewButtons() {
  const allowedExtensions = ["pdf", "jpg", "png", "jpeg"];
  const pageBlocks = parsePage();

  pageBlocks.forEach((block) => {
    block.files.forEach((file) => {
      if (!allowedExtensions.includes(file.extension)) {
        return;
      }

      const fileId = generateId();
      const mountElement = document.createElement("div");
      mountElement.setAttribute("id", fileId);

      file.node.classList.add("tests-file-list__item");
      file.node.appendChild(mountElement);
      mountElement.classList.add("tests-preview");

      mapDatasetToElement(mountElement, block, file);

      createApp(PreviewButton, { ...mountElement.dataset }).mount(mountElement);
    });
  });
}
