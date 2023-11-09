const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['pic1.jpeg', `pic2.jpeg`, `pic3.jpeg`, `pic4.jpeg`, `pic5.jpeg`];
const alts = {
  'pic1.jpeg' : 'bath vibes',
  'pic2.jpeg' : 'glitter',
  'pic3.jpeg' : 'happy birthday',
  'pic4.jpeg' : 'must get taller',
  'pic5.jpeg' : 'dont cry over spilled shiz'
}

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'better';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'get dark af';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
