var someId = String(parseInt(Math.random() * 10000000));
var anotherId = String(parseInt(Math.random() * 10000000));
document.querySelector('.text').id = `random-${someId}`;
document.querySelector('button').id = `random-${anotherId}`;

function addIframe() {
  const iframe = document.createElement('iframe');
  iframe.src = 'iframe-town-inner-2.html';
  document.querySelector('.frame-container').appendChild(iframe);
}

function toggleHiddenContentVisibility() {
  const ele = document.getElementById('hidden-toggle-content');

  ele.classList.toggle('visible');
}
