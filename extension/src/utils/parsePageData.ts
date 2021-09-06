import detectValidPage from "@/utils/detectValidPage";

export type ParsedBlockFile = {
  text: string;
  extension: string;
  name: string;
  link: string;
  node: Element;
};

export type ParsedBlock = {
  name: string;
  date: string;
  time: string;
  files: ParsedBlockFile[];
};

export function parsePageName(name: Element) {
  if (!name) {
    return false;
  }

  const [userName, dateTime] = name.textContent!.split(", ");
  const [date, time] = dateTime.split(" ");

  return { name: userName, date, time };
}

export function parsePageFileLists(files: Element) {
  if (!files) {
    return [];
  }

  const result: ParsedBlockFile[] = [];
  const fileItems = files.querySelectorAll("li");

  fileItems.forEach((fileItem) => {
    const fileLink = fileItem.querySelector("a");

    if (!fileLink) {
      return;
    }

    const fileText = fileLink.text;
    const fileTextSeparated = fileText.split(".");

    const fileExtension = fileTextSeparated.pop();
    const fileName = fileTextSeparated.join("");

    result.push({
      text: fileText,
      extension: fileExtension || "",
      name: fileName,
      link: fileLink.href,
      node: fileItem,
    });
  });

  return result;
}

export function parsePageBlocks(blocks: NodeListOf<Element>) {
  if (!blocks) {
    return [];
  }

  const result: ParsedBlock[] = [];

  blocks.forEach((block) => {
    const name = block.querySelector(".test_item_name");
    const files = block.querySelector(".test_attach");

    if (!name || !files) {
      return;
    }

    const parsedName = parsePageName(name);
    const parsedFiles = parsePageFileLists(files);

    if (!parsedName || !parsedFiles) {
      return;
    }

    result.push({
      ...parsedName,
      files: parsedFiles,
    });
  });

  return result;
}

export function parsePage() {
  if (!detectValidPage()) {
    return [];
  }

  const blockElements = document.querySelectorAll(".test_item_wrap");

  return parsePageBlocks(blockElements);
}

export default parsePage;
