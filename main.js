import './style.css'

const $ = selector => document.querySelector(selector);

console.log("hola")
const $js = $('#js');
const $css = $('#css');
const $html = $('#html');

$js.addEventListener('input', update)

$css.addEventListener('input', update)

$html.addEventListener('input', update)

function update() { 
  const html = createHTML();
  $('iframe').setAttribute('srcdoc', html);
}

const createHTML = () => {
  const html = $html.value;
  const css = $css.value;
  const js = $js.value;

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <style>
      ${css}
      </style>
    </head>
    <body>
    ${html}
    <script>
    ${js}
    <script>
    </body>
  </html>
    
  `
}