window.onload = () => {
  const card = document.querySelector('#card1');
  const content = card.querySelector('.content');
  const video = document.querySelector('#vid1');
  const text = card.querySelector('.text');
  const videoContainer = card.querySelector('.video-container');

  // console.log(videoContainer);

  card.addEventListener('click', () => {
    console.log('CLICK');
    window.open('https://google.com');
  });

  const copyEmail = card.querySelector('i.email');
  const email = card.querySelector('span.email').innerText;
  const copyPassword = card.querySelector('i.password');
  const password = card.querySelector('span.password').innerText;

  copyEmail.addEventListener('click', (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
  });

  copyPassword.addEventListener('click', (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(password);
  });

  card.addEventListener('mouseenter', () => {
    setTimeout(() => {
      // text.classList.add('blur');
    }, 1000);
  });

  card.addEventListener('mouseleave', () => {
    // text.classList.remove('blur');
  });
};
