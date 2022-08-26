export function copy(content: string) {
  if (!!content) {
    const el = document.createElement('textarea');
    el.value = content;
    el.setAttribute('readonly', '');
    // el.style = { display: 'none' };
    document.body.appendChild(el);
    el.select();
    el.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}

export const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};