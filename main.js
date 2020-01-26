getById = id => document.getElementById(id);

const mainPage = getById('choose-level-page');
const levelEasyPage = getById('easy-level-page');
const levelMediumPage = getById('medium-level-page');
const levelHardPage = getById('hard-level-page');
const startGameBtn = getById('button');

const easyDifficulty = getById('easy');
const mediumDifficulty = getById('medium');
const hardDifficulty = getById('hard');

const frontCardEasyBug = document.querySelectorAll('.easy .front');
const frontCardMediumBug = document.querySelectorAll('.medium .front');
const frontCardHardBug = document.querySelectorAll('.hard .front');

const card = document.getElementsByClassName('wrap');

let bugNumber;
let numberOfClick = 0;
let rotatedCard = false;


function chooseLevel() {
    startGameBtn.addEventListener('click', function () {
        if (easyDifficulty.checked) {
            mainPage.classList.add('hidden');
            levelEasyPage.classList.add('visible');
            bugNumber = Math.floor(Math.random() * 3);
            frontCardEasyBug[bugNumber].classList.add('bug');
        } else if (mediumDifficulty.checked) {
            mainPage.classList.add('hidden');
            levelMediumPage.classList.add('visible');
            bugNumber = Math.floor(Math.random() * 6);
            frontCardMediumBug[bugNumber].classList.add('bug');
        } else if (hardDifficulty.checked) {
            mainPage.classList.add('hidden');
            levelHardPage.classList.add('visible');
            bugNumber = Math.floor(Math.random() * 10);
            frontCardHardBug[bugNumber].classList.add('bug');
        }
    })
}
chooseLevel()


function turnCard() {
    for (i = 0; i < card.length; i++) {
        card[i].addEventListener('click', function () {
            if (!rotatedCard) {
                this.classList.add('rotated')
                rotatedCard = true;
            }
        })
    }
}
turnCard()


function reloadGame() {
    const cardCount = document.querySelectorAll(`.card`);
    cardCount.forEach((elem) => {
        elem.addEventListener('click', () => {
            if (numberOfClick === 0) {
                numberOfClick++;
            } else {
                location.reload();
            };
        });
    });
}
reloadGame()