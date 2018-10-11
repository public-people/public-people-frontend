export default function extractQueryString(key, fullString) {
  const escapedName = key.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");

  const regex = new RegExp(`[\\?&]${escapedName}=([^&#]*)`);
  const results = regex.exec(fullString);

  if (results === null) {
    return null;
  }
  return decodeURIComponent(results[1].replace(/\+/g, " "));
}
