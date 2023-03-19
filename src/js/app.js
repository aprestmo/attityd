const offset = 79;
const opacity = 0.33;
const colors = [
  `hsla(${offset * 1}, 92%, 70%, ${opacity})`,
  `hsla(${offset * 2}, 92%, 70%, ${opacity})`,
  `hsla(${offset * 3}, 92%, 70%, ${opacity})`,
  `hsla(${offset * 4}, 92%, 70%, ${opacity})`,
  `hsla(${offset * 5}, 92%, 70%, ${opacity})`,
];

function setBgColor() {
  const mqDark = window.matchMedia('(prefers-color-scheme: dark)');
  const color = colors[Math.floor(Math.random() * colors.length)];

  if (mqDark.matches) {
    document.body.style.backgroundColor = 'hsl(0, 0%, 0%)';
  } else {
    document.body.style.backgroundColor = color;
  }
}

setBgColor();

const linkTag = document.querySelector('a');
linkTag.style.setProperty('--state', 'hidden');

linkTag.addEventListener('click', async (event) => {
  event.preventDefault();
  event.currentTarget.insertAdjacentHTML(
    'beforeend',
    '<span>Kopiert til utklippstavlen</span>'
  );

  if (!navigator.clipboard) {
    return;
  }

  const text = event.currentTarget.innerText;

  try {
    await navigator.clipboard.writeText(text);
    event.target.classList.add('is-active');
    event.target.style.setProperty('--state', 'visible');
    setTimeout(() => {
      event.target.classList.remove('is-active');
      event.target.firstElementChild.remove();
      setTimeout(() => {
        event.target.style.setProperty('--state', 'hidden');
      }, 1000);
    }, 30000);
  } catch (err) {
    console.error('Kunne ikke kopiere!', err);
  }
});

const blob = document.querySelector('[astro-icon="blob"]');
let cursor = {
  x: 0,
  y: 0,
};

document.addEventListener('mousemove', (e) => {
  cursor.x = -e.clientX * 0.05;
  cursor.y = e.clientY * 0.05;

  blob.style.transform = `translate(calc(-50% + ${cursor.x}px), calc(-50% + ${cursor.y}px))`;
});
