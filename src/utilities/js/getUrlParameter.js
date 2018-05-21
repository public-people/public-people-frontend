export default function getUrlParameter(name) {
  const escapedName = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${escapedName}=([^&#]*)`);
  const results = regex.exec(window.location.search);

  if (results === null) {
    return null;
  }

  return decodeURIComponent(results[1].replace(/\+/g, ' '));
}
