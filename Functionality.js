// const { useState, useEffect } = require("react")

// to popUp Button for Rules
const rulesBtn = document.querySelector('.rulesBtn')
const RulesPopUp = document.querySelector('.RulesPopUp')
const closeBtn = document.querySelector('.closeBtn')

rulesBtn.addEventListener('click',()=>{
    RulesPopUp.classList.toggle('hide')
})

closeBtn.addEventListener('click',()=>{
    RulesPopUp.classList.toggle('hide')

})

// to Face game
const paper = document.querySelector('.imgOfpaperdiv')
const rock = document.querySelector('.imgOfRock')
const scissors = document.querySelector('.imgOfScissors')
const FaceGAme = document.querySelector('.FaceGAme')
const PlaySection = document.querySelector('.PlaySection')
console.log(FaceGAme)
paper.addEventListener('click',()=>{
    console.log('paper');
    FaceGAme.classList.toggle('hide')
    PlaySection.classList.toggle('hide')

})
rock.addEventListener('click',()=>{
    console.log('paper');
    FaceGAme.classList.toggle('hide')
    PlaySection.classList.toggle('hide')

})
scissors.addEventListener('click',()=>{
    console.log('paper');
    FaceGAme.classList.toggle('hide')
    PlaySection.classList.toggle('hide')

})
// let array = [1,2,3]

// let random = Math.floor(Math.random(array.length)*array.length)
// console.log(array[random])



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