
// to popUp Button for Rules
const popupBtn = document.querySelector(".popupBtn");
const RulesPopUp = document.querySelector(".RulesPopUp");
const closeBtn = document.querySelector(".closeBtn");
const resetLocalStorage = document.querySelector(".resetLocalStorage");

popupBtn.addEventListener("click", () => {
    RulesPopUp.classList.toggle("hide");
});

closeBtn.addEventListener("click", () => {
    RulesPopUp.classList.toggle("hide");
});

// to score result
const ScoreNumber = document.querySelector('.ScoreNumber')
let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;
ScoreNumber.innerHTML = count
// to clear local Storage
resetLocalStorage.addEventListener('click', () => {
    localStorage.clear();
    count = 0;
    ScoreNumber.innerHTML = count
    console.log('first')

})
// to Face game
const paper = document.querySelector(".imgOfpaperdiv");
const rock = document.querySelector(".imgOfRock");
const scissors = document.querySelector(".imgOfScissors");
const FaceGAme = document.querySelector(".FaceGAme");
const PlaySection = document.querySelector(".PlaySection");
const randomImage = document.querySelector(".randomImage");
const otherImgRandom = document.querySelector(".otherImgRandom");
const playAgain = document.querySelector(".playAgain");
const Result = document.querySelector(".Result");
const firstlineborder = document.querySelector('.firstlineborder')
let array = [];
array[0] = `<div class="imgOfpaper"><img class='images' src="./images/icon-paper.svg" alt="" /></div>`;
array[1] = `<div class="imgOfRo"><img src="./images/icon-rock.svg" alt="" /></div>`;
array[2] = `<div class="imgOfSci"><img src="./images/icon-scissors.svg" alt="" /></div>`;



let mayank = `<div class="secondBorder"><div class='thirdBorder'><div class="imgOfpaper"><img class='images' src="./images/icon-paper.svg" alt="" /></div></div></div>`;

paper.addEventListener("click", () => {
    FaceGAme.classList.toggle("hide");
    PlaySection.classList.toggle("hide");
    randomImage.innerHTML = array[0];
    setTimeout(() => {
        randomValue();
        if (array[0] === array[random]) {
            Result.innerHTML = 'ITS A DRAW'
            ScoreNumber.innerHTML = count;
            localStorage.setItem('count', count);
        } else if (array[1] === array[random]) {
            Result.innerHTML = 'YOU WIN'
            count++
            ScoreNumber.innerHTML = count;
            localStorage.setItem('count', count);
            let mayank = `<div class='thirdBorder'><div class="secondBorder"><div class='firstline'><div class="imgOfpaper"><img class='images' src="./images/icon-paper.svg" alt="" /></div></div></div></div>`;
            randomImage.innerHTML = mayank;

        } else {
            Result.innerHTML = 'YOU LOSE'
            count--
            ScoreNumber.innerHTML = count;
            let mayank = `<div class='thirdBorder'><div class="secondBorder"><div class='firstline'>${array[random]}</div></div></div>`;
            otherImgRandom.innerHTML = mayank;
            localStorage.setItem('count', count);
        }
        playAgain.classList.remove('hide')
    }, 3000);

});
rock.addEventListener("click", () => {
    FaceGAme.classList.toggle("hide");
    PlaySection.classList.toggle("hide");
    randomImage.innerHTML = array[1];
    setTimeout(() => {
        randomValue();
        if (array[1] === array[random]) {
            Result.innerHTML = 'ITS A DRAW'
            ScoreNumber.innerHTML = count;
            localStorage.setItem('count', count);

        } else if (array[2] === array[random]) {
            Result.innerHTML = 'YOU WIN'
            console.log(randomImage)
            count++
            ScoreNumber.innerHTML = count;
            localStorage.setItem('count', count);
            let mayank = `<div class='thirdBorder'><div class="secondBorder"><div class='firstline'><div class="imgOfRo"><img src="./images/icon-rock.svg" alt="" /></div></div></div></div>`;
            randomImage.innerHTML = mayank;
        } else {
            Result.innerHTML = 'YOU LOSE'
            count--
            ScoreNumber.innerHTML = count;
            localStorage.setItem('count', count);
            let mayank = `<div class='thirdBorder'><div class="secondBorder"><div class='firstline'>${array[random]}</div></div></div>`;
            otherImgRandom.innerHTML = mayank;
        }
        playAgain.classList.remove('hide')

    }, 3000);

});
scissors.addEventListener("click", () => {
    FaceGAme.classList.toggle("hide");
    PlaySection.classList.toggle("hide");
    randomImage.innerHTML = array[2];
    setTimeout(() => {
        randomValue();
        if (array[2] === array[random]) {
            Result.innerHTML = 'ITS A DRAW'
            ScoreNumber.innerHTML = count;
            localStorage.setItem('count', count);

        } else if (array[0] === array[random]) {
            Result.innerHTML = 'YOU WIN'
            count++
            ScoreNumber.innerHTML = count;
            localStorage.setItem('count', count);
            let mayank = `<div class='thirdBorder'><div class="secondBorder"><div class='firstline'><div class="imgOfSci"><img src="./images/icon-scissors.svg" alt="" /></div></div></div></div>`;
            randomImage.innerHTML = mayank;
        } else {
            Result.innerHTML = 'YOU LOSE'
            count--
            ScoreNumber.innerHTML = count;
            localStorage.setItem('count', count);
            let mayank = `<div class='thirdBorder'><div class="secondBorder"><div class='firstline'>${array[random]}</div></div></div>`;
            otherImgRandom.innerHTML = mayank;
        }
        playAgain.classList.remove('hide')
    }, 3000);

});
let arrayOrrandom = [];
arrayOrrandom[0] = `<div class="imgOfpaper"><img src="./images/icon-paper.svg" alt="" /></div>`;
arrayOrrandom[1] = `<div class="imgOfRo"><img src="./images/icon-rock.svg" alt="" /></div>`;
arrayOrrandom[2] = `<div class="imgOfSci"><img src="./images/icon-scissors.svg" alt="" /></div>`;
let random;
function randomValue() {
    random = Math.floor(
        Math.random(arrayOrrandom.length) * arrayOrrandom.length
    );
    otherImgRandom.innerHTML = arrayOrrandom[random];
}
// to back button like play Again
playAgain.addEventListener('click', () => {
    document.location.reload()
    FaceGAme.classList.toggle("hide");
    PlaySection.classList.toggle("hide");
})
