const mealEndpoints = 'http://localhost:4000/meals1';
const categoriesEndpoints = 'http://localhost:4000/categories';
console.log(mealEndpoints);
console.log(categoriesEndpoints);

document.addEventListener("DOMContentLoaded", () => {
    
    fetch(mealEndpoints)
        .then(response => response.json())
        .then(data => {
            
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching meal data:', error)
        
      });
    
    fetch(categoriesEndpoints)
        .then(response => response.json())
        .then(data => {
            
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching categories data:', error)
        
      });
    });
  
const button = document.getElementById("btn1")

// document.addEventListener("DOMContentLoaded", function() {
//     const button = document.getElementById('btn1')

//     async function fetchmeals() { //to return a promise
//         try {
//           const response = await fetch("http://localhost:4000/meals1"); // to wait and handle a promise
      
//           if (response.ok) {
//             const data = await response.json();
//              //   console.log(data);
//              loadmeals(data);
//           } else {
//             throw new Error("Oops, Something went wrong"); //an error message is displayed when the fetch request fails
//           }
//         } catch (error) {
//           console.error(error);
//         }
//           function loadmeals(data) {
//             async function fetchmeals() {
//               try {
//                 const response = await fetch(`http://localhost:4000/meals1`);
//                 if (response.ok) {
//                   const data = await response.json();
//                   const mealname = document.getElementById("strMeal");
//                   mealname.textContent = data.name;
//                   const mealimg = document.getElementById("strMealThumb");
//                   mealimg.src = data.strMealThumb;
//                   const mealvideo= document.getElementById("strVideo");
//                   mealvideo.src = data.strYoutube;
//                   const mealinstructions= document.getElementById("strInstructions");
//                   const mealingredients1= document.getElementById("strIngredient1");
//                   const mealingredients2= document.getElementById("strIngredient2");
//                   const mealingredients3= document.getElementById("strIngredient3");
//                   const mealingredients4= document.getElementById("strIngredient4");
//                   const mealingredients5= document.getElementById("strIngredient5");
//                   const mealingredients6= document.getElementById("strIngredient6");
//                   const mealingredients7= document.getElementById("strIngredient7");
//                   const mealingredients8= document.getElementById("strIngredient8");
//                   const mealingredients9= document.getElementById("strIngredient9");
//                 } else {
//                   throw new Error("Oops, Something went wrong");
//                 }
//               } catch (error) {
//                 console.error(error);
//               }
//             }
//             fetchmeals();
//           }
//         }
        
      
//       async function fetchcategories() { //to return a promise
//         try {
//           const response = await fetch("http://localhost:4000/categories"); // to wait and handle a promise
      
//           if (response.ok) {
//             const data = await response.json();
//              //   console.log(data);
//              loadcategories(data);
//           } else {
//             throw new Error("Oops, Something went wrong"); //an error message is displayed when the fetch request fails
//           }
//         } catch (error) {
//           console.error(error);
//         }
      
//       function loadcategories(data) {
//         async function fetchcategories() {
//           try {
//             const response = await fetch(`http://localhost:4000/categories`);
//             if (response.ok) {
//               const data = await response.json();
//               const mealcategory = document.getElementById("strCategory");
//               mealname.textContent = data.name;
//               const img = document.getElementById("strCategoryThumb");
//               img.src = data.strCategoryThumb;
//               const description= document.getElementById("strCategoryDescription");
              
//             } else {
//               throw new Error("Oops, Something went wrong");
//             }
//           } catch (error) {
//             console.error(error);
//           }
//         }
//         fetchcategories();
//       }
//     }
// {
//     button.addEventListener("click", (e) => { //when the movie is clicked
//         loadcategories
//         loadmeals(); // the code executes the following function
//       });
//       loadmeals();
//       loadcategories
//     }


//  let allContainers = document.querySelectorAll('.container')
// let allTxts= document.querySelectorAll('.text')
// const toggleMode = document.getElementById('#mode');
//  toggleMode.addEventListener('click', ()=>{
//     if(allContainers[0].style.backgroundColor==='black'){
//        allContainers.forEach(container=> {
//             container.style.backgroundColor='white'
//         })
//         allTxts.forEach(txt=> {
//             txt.style.color ='black'
//         });
        
//    }else{

//        allContainers.forEach(container=> {
//              container.style.backgroundColor='black'
//         })
//         allTxts.forEach(txt=> {
//             txt.style.color ='white'
//        })
        
//     }
//  })
//     });
