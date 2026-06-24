export const getUrlWithFormat = (url: string, style: string) => {
  url.replace(/\\/g, '')
  if (url.includes("{style_name}")) {
    return url.replace("{style_name}", style);
  }
  return url
};