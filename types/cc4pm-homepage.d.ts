declare module '@cc4pm/homepage' {
  /** HTML 文件的绝对路径，可用于 express.static 或 res.sendFile */
  export const filePath: string;
  /** 返回 HTML 字符串 */
  export function html(): string;
  const homepage: {
    filePath: string;
    html: () => string;
  };
  export default homepage;
}
