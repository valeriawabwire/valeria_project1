// document.addEventListener("DOMContentLoaded", function() {
//   function fetchmeals() {
//          fetch("http://localhost:4000/meals1").then(res=>res.json()).then( data =>{
//             let meals = data.data.meals

//     for (let meals of meals){
//         let img = document.createElement('img')
//         let p = document.createElement('p')
//         p.textContent = meals.name
//         img.src= meals.url
//         memeSection.append(p,img)
//     };
// });
//   }
//             .then(resp => resp.json())
//             .then(data => {
//                 meals = data || [];
//                 rendermeals();
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }
// });
// toggleMode.addEventListener('click', ()=>{
//     if(allContainers[0].style.backgroundColor==='black'){
//         allContainers.forEach(container=> {
//             container.style.backgroundColor='white'
//         })
//         allTxts.forEach(txt=> {
//             txt.style.color ='black'
//         })
        
//     }else{

//         allContainers.forEach(container=> {
//             container.style.backgroundColor='black'
//         })
//         allTxts.forEach(txt=> {
//             txt.style.color ='white'
//         })
        
//     }
// })
