let id = 0;

export function generateId() {
  const previewId = `preview-btn-${id}`;
  id++;
  return previewId;
}

export default generateId;
