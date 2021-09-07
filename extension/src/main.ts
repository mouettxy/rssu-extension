import { createApp } from "vue";
import PreviewButton from "@/ui/PreviewButton.vue";
import parsePage, { mapDatasetToElement } from "@/utils/parsePageData";
import generateId from "@/utils/previewIdGenerator";
import "./styles/inject.css";

const pageBlocks = parsePage();

pageBlocks.forEach((block) => {
  block.files.forEach((file) => {
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
