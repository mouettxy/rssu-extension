chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      init();
    }
  }, 10);
});

function processBlockName(node) {
  if (!node) {
    return {};
  }

  const [name, dateTime] = node.textContent.split(", ");
  const [date, time] = dateTime.split(" ");

  return { name, date, time };
}

function processBlockFileList(nodeList) {
  if (!nodeList) {
    return [];
  }

  const result = [];

  nodeList.forEach((fileList) => {
    const fileListWrap = fileList.querySelectorAll("li");

    fileListWrap.forEach((fileListWrapElement) => {
      const file = fileListWrapElement.querySelector("a");

      if (file) {
        const fileText = file.text;
        const fileTextSeparated = fileText.split(".");

        const fileExtension = fileTextSeparated.pop();
        const fileName = fileTextSeparated.join("");
        const fileLink = file.href;

        result.push({
          fileText,
          fileExtension,
          fileName,
          fileLink,
          node: fileListWrapElement,
        });
      }
    });
  });

  return result;
}

function collectBlockData(nodeList) {
  if (!nodeList) {
    return [];
  }

  const result = [];

  nodeList.forEach((blockNode) => {
    const nameElement = blockNode.querySelector(".test_item_name");
    const fileListElements = blockNode.querySelectorAll(".test_attach");

    result.push({
      ...processBlockName(nameElement),
      files: processBlockFileList(fileListElements),
    });
  });

  return result;
}

function addPreviewButtons(blockData) {
  if (!blockData) {
    return;
  }

  const supportedExtensions = ["docx"];

  blockData.forEach((blockDataItem) => {
    if (!blockDataItem.files) {
      return;
    }

    blockDataItem.files.forEach((file) => {
      if (!supportedExtensions.includes(file.fileExtension)) {
        return;
      }

      const btn = document.createElement("button");

      btn.dataset.fileExtension = file.fileExtension;
      btn.dataset.fileName = file.fileName;
      btn.dataset.fileLink = file.fileLink;
      btn.dataset.fileText = file.fileText;
      btn.dataset.userName = blockDataItem.name;
      btn.dataset.date = blockDataItem.date;
      btn.dataset.time = blockDataItem.time;
      btn.classList.add("tests-preview");
      btn.textContent = "Предпросмотр";

      file.node.appendChild(btn);

      file.node.classList.add("tests-file-list__item");
    });
  });
}

function init() {
  const detectionElement = document.querySelector(".test_name_wrap2");

  if (detectionElement) {
    const listsOfFiles = document.querySelectorAll(".test_item_wrap");
    const blockDataList = collectBlockData(listsOfFiles);

    addPreviewButtons(blockDataList);
  }
}
