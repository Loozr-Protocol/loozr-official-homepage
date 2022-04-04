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