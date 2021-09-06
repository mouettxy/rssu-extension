import { createApp } from "vue";
import PreviewButton from "@/ui/PreviewButton.vue";
import parsePage from "@/utils/parsePageData";
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

    mountElement.dataset.userName = block.name;
    mountElement.dataset.publishData = block.date;
    mountElement.dataset.publishTime = block.time;
    mountElement.dataset.fileText = file.text;
    mountElement.dataset.fileExtension = file.extension;
    mountElement.dataset.fileName = file.name;
    mountElement.dataset.fileLink = file.link;

    mountElement.classList.add("tests-preview");

    createApp(PreviewButton, { ...mountElement.dataset }).mount(mountElement);
  });
});
