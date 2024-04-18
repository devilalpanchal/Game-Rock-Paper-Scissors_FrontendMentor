// const { useState, useEffect } = require("react")

// to popUp Button for Rules
const rulesBtn = document.querySelector(".rulesBtn");
const RulesPopUp = document.querySelector(".RulesPopUp");
const closeBtn = document.querySelector(".closeBtn");

rulesBtn.addEventListener("click", () => {
  RulesPopUp.classList.toggle("hide");
});

closeBtn.addEventListener("click", () => {
  RulesPopUp.classList.toggle("hide");
});

// to Face game
const paper = document.querySelector(".imgOfpaperdiv");
const rock = document.querySelector(".imgOfRock");
const scissors = document.querySelector(".imgOfScissors");
const FaceGAme = document.querySelector(".FaceGAme");
const PlaySection = document.querySelector(".PlaySection");
const randomImage = document.querySelector(".randomImage");
const otherImgRandom = document.querySelector(".otherImgRandom");
const playAgain = document.querySelector(".playAgain");

let array = [];
array[0] = `<div class="imgOfpaper"><img src="./images/icon-paper.svg" alt="" /></div>`;
array[1] = `<div class="imgOfRo"><img src="./images/icon-rock.svg" alt="" /></div>`;
array[2] = `<div class="imgOfSci"><img src="./images/icon-scissors.svg" alt="" /></div>`;

paper.addEventListener("click", () => {
  console.log("paper");
  FaceGAme.classList.toggle("hide");
  PlaySection.classList.toggle("hide");
  randomImage.innerHTML = array[0];
  randomValue();
});
rock.addEventListener("click", () => {
  console.log("paper");
  FaceGAme.classList.toggle("hide");
  PlaySection.classList.toggle("hide");
  randomImage.innerHTML = array[1];
  randomValue();
});
scissors.addEventListener("click", () => {
  console.log("paper");
  FaceGAme.classList.toggle("hide");
  PlaySection.classList.toggle("hide");
  randomImage.innerHTML = array[2];
  randomValue();
});

let arrayOrrandom = [];
arrayOrrandom[0] = `<div class="imgOfpaper"><img src="./images/icon-paper.svg" alt="" /></div>`;
arrayOrrandom[1] = `<div class="imgOfRo"><img src="./images/icon-rock.svg" alt="" /></div>`;
arrayOrrandom[2] = `<div class="imgOfSci"><img src="./images/icon-scissors.svg" alt="" /></div>`;
function randomValue() {
  let random = Math.floor(
    Math.random(arrayOrrandom.length) * arrayOrrandom.length
  );
  otherImgRandom.innerHTML = arrayOrrandom[random];
}


// to back button like play Again
playAgain.addEventListener('click',()=>{
    document.location.reload()
})
// function name() {

//     const [count,setcount] = useState(0)
//     const [toggle,settoggle] = useState(false)
//     const [toggle1,settoggle1] = useState(null)
//     let url = 'kdfjkdhfkljhsdfkjhdskjfh'
//    async function hello(){
// let res = await fetch(url)
// let data = await res.json()
// console.log(data);
//     }

//     useEffect(()=>{
//         hello()

//     },[count])

//     return(
//         <>

//         <h1>devilal</h1>
//         <button onClick={()=>setcount(count+1)}></button>
//         {toggle?<p>
//             devi</p>:<p>dfdsj</p>}
//             <button onClick={()=>settoggle(!toggle)}></button>

//             <section className="main">
//             {
//                 Product.map((item)=>{
// const {title.price.description,item} = [item]
//                     return <div>
//                         <h2>title</h2>
//                     </div>
//                 })
//             }

//             </section>
//         </>
//     )
// }
