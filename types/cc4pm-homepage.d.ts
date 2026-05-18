declare module '@cc4pm/homepage' {
  export const filePath: string;
  export function html(): string;

  const homepage: {
    filePath: string;
    html: () => string;
  };

  export default homepage;
}
