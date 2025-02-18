export const downloadImage = (
  data: ArrayBuffer,
  fileName: string,
  type = "image/png"
) => {
  // 将 ArrayBuffer 转换为 Blob
  const blob = new Blob([data], { type });
  // 创建 Blob URL
  const url = URL.createObjectURL(blob);
  // 创建 <a> 标签
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  // 触发下载
  document.body.appendChild(a);
  a.click();
  // 清理 Blob URL
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
}