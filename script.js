const menu = document.getElementById('main'),
      level = [document.getElementById('level-easy'), document.getElementById('level-medium'), document.getElementById('level-hard')],
      menuButton = document.getElementById('menu__button');

let menuLevel = [],
    menuLevelIcon = [];
for (i = 0; i <= 2; i++) {
  menuLevel[i] = document.getElementById(`menu__level-container-${i + 1}`);
  menuLevelIcon[i] = document.getElementById(`menu__level-icon-${i + 1}`);
  level[i].style.display = 'none';
  menuLevelIcon[i].style.display = 'none';
}

menuLevel[0].addEventListener('click', () => {
  menuLevelIcon[0].style.display = 'block';
  menuLevelIcon[1].style.display = 'none';
  menuLevelIcon[2].style.display = 'none';
});

menuLevel[1].addEventListener('click', () => {
  menuLevelIcon[0].style.display = 'none';
  menuLevelIcon[1].style.display = 'block';
  menuLevelIcon[2].style.display = 'none';
});

menuLevel[2].addEventListener('click', () => {
  menuLevelIcon[0].style.display = 'none';
  menuLevelIcon[1].style.display = 'none';
  menuLevelIcon[2].style.display = 'block';
});

menuButton.addEventListener('click', () => {
  if(menuLevelIcon[0].style.display == 'none' && menuLevelIcon[1].style.display == 'none' && menuLevelIcon[2].style.display == 'none' ) {
    document.location.reload();
  }

  menu.style.display = 'none';
  for (i = 0; i <= 2; i++) {
    level[i].style.display = 'none';
  }
  level[whatLevel()].style.display = 'flex';

  Play(whatLevel());
})

function whatLevel() {
  for (i = 0; i <= 2; i++) {
    if(menuLevelIcon[i].style.display == 'block') {
      return i;
    }
  }
}

function Play(level) {
  let selector;
  switch(level) {
    case 0:
    selector = 'level-easy__card-back';
    break;
    case 1:
    selector = 'level-medium__card-back';
    break;
    case 2:
    selector = 'level-hard__card-back';
    break;
  }
  cards = document.querySelectorAll(`.${selector}`);
  for (i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', e => cardOnClick(e.target, cards.length), {once : true});
  }
}

function cardOnClick(clicked, length) {
  const frontCard = document.createElement('div');
  console.log(length);
  if ((Math.floor(Math.random() * (length - 1 + 1)) + 1) % length !== 1) {
    frontCard.className = 'card__answer_wrong';
  }
  else  {
    frontCard.className = 'card__answer_right';
  }
  clicked.appendChild(frontCard);
  clicked.classList.toggle('card__flipping');

  document.body.addEventListener('click', () => {
    document.location.reload();
  }, true);
}
