const mealsEndpoints = 'http://localhost:4000/meals1';
const categoriesEndpoints = 'http://localhost:4000/categories';
console.log(mealsEndpoints);
console.log(categoriesEndpoints);

document.addEventListener("DOMContentLoaded", () => {
  const button1 = document.getElementById("btn1")
  button1.addEventListener('click', addmeal);
  button1.addEventListene("click", getMealList);

  function getMealList(meal) {
    fetch(mealsEndpoints)
        .then(response => response.json())
        .then(data => {
          let html = "";
          if(data.meals){
              data.meals.forEach(meal => {
                  html += `
                      <div class = "meal-item" data-id = "${meal.idMeal}">
                          <div class = "meal-img">
                              <img src = "${meal.strMealThumb}" alt = "food">
                          </div>
                          <div class = "meal-name">
                              <h3>${meal.strMeal}</h3>
                             <a href = "#" class = "recipe-btn">Get Recipe</a>
                         </div>
                      </div>
                  `;
              });
              mealList.classList.remove('notFound');
          } else{
              html = "Sorry, we didn't find any meal!";
              mealList.classList.add('notFound');
          }
        
          mealList.innerHTML = html;
      }
      )
      function addmeal(newmeals) {
        fetch(mealsEndpoints, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newmeals),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                fetch(mealsEndpoints)
                    .then(response => response.json())
                    .then(data => {
                        getMealList(data.meal);
                    })
                    .catch(error => {
                        console.error('Error fetching meals data:', error);
                    });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    console.log(addmeal);
    
  
    document.addEventListener("DOMContentLoaded", () => {
      const mealData = {
        meals: [
          {
            "idMeal": "1",
            "strMeal": "Spicy Arrabiata Penne",
            "strCategory": "Vegetarian",
            "strArea": "Italian",
            "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
            "strTags": "Pasta,Curry",
            "strYoutube": "https://www.youtube.com/watch?v=1IszT_guI08",
            "strIngredient1": "penne rigate",
            "strIngredient2": "olive oil",
            "strIngredient3": "garlic",
            "strIngredient4": "chopped tomatoes",
            "strIngredient5": "red chile flakes",
            "strIngredient6": "italian seasoning",
            "strIngredient7": "basil",
            "strIngredient8": "Parmigiano-Reggiano",
            "strMeasure1": "1 pound",
            "strMeasure2": "1/4 cup",
            "strMeasure3": "3 cloves",
            "strMeasure4": "1 tin",
            "strMeasure5": "1/2 teaspoon",
            "strMeasure6": "1/2 teaspoon",
            "strMeasure7": "6 leaves",
            "strMeasure8": "sprinkling"
          },
          {
            "idMeal": "2",
            "strMeal": "Apple Tart",
            "strCategory": "Dessert",
            "strArea": "British",
            "strInstructions": "Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, crème fraiche or ice cream.",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
            "strTags": "Tart,Baking,Fruity",
            "strYoutube": "https://www.youtube.com/watch?v=rp8Slv4INLk",
            "strIngredient1": "digestive biscuits",
            "strIngredient2": "butter",
            "strIngredient3": "Bramley apples",
            "strIngredient4": "butter, softened",
            "strIngredient5": "caster sugar",
            "strIngredient6": "free-range eggs, beaten",
            "strIngredient7": "ground almonds",
            "strIngredient8": "almond extract",
            "strIngredient9": "flaked almonds",
            "strMeasure1": "175g/6oz",
            "strMeasure2": "75g/3oz",
            "strMeasure3": "200g/7oz",
            "strMeasure4": "75g/3oz",
            "strMeasure5": "75g/3oz",
            "strMeasure6": "2",
            "strMeasure7": "75g/3oz",
            "strMeasure8": "1 tsp",
            "strMeasure9": "50g/1¾oz"
          },
          {
            "idMeal": "3",
            "strMeal": "Salmon Prawn Risotto",
            "strCategory": "Seafood",
            "strArea": "Italian",
            "strInstructions": "Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.\r\nAdd the rice and stir to coat all the grains in the butter\r\nAdd the wine and cook gently stirring until it is absorbed\r\nGradually add the hot stock, stirring until each addition is absorbed. Keep stirring until the rice is tender\r\nSeason with the lemon juice and zest, and pepper to taste. (there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through\r\nServe scattered with the Parmesan and seasonal vegetables.\r\nGrill the salmon and gently place onto the risotto with the prawns and asparagus",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
            "strTags": "Fish",
            "strYoutube": "https://www.youtube.com/watch?v=V2PMvBv52IE",
            "strIngredient1": "butter",
            "strIngredient2": "onion",
            "strIngredient3": "rice",
            "strIngredient4": "white wine",
            "strIngredient5": "vegetable stock",
            "strIngredient6": "lemon",
            "strIngredient7": "King Prawns",
            "strIngredient8": "salmon",
            "strIngredient9": "asparagus",
            "strIngredient10": "black pepper",
            "strIngredient11": "Parmesan",
            "strMeasure1": "50g/2oz",
            "strMeasure2": "1 finely chopped ",
            "strMeasure3": "150g",
            "strMeasure4": "125ml ",
            "strMeasure5": "1 litre hot",
            "strMeasure6": "The juice and zest of one",
            "strMeasure7": "240g large",
            "strMeasure8": "150g",
            "strMeasure9": "100g tips blanched briefly in boiling water",
            "strMeasure10": "ground",
            "strMeasure11": "50g shavings"
          }
        ]
      };
    });
  
      
    
  
    
  



           // console.log(data);
     // })
    



    
      //  .catch(error => {
        //    console.error('Error fetching meal data:', error)
        
     // });
    
    fetch(categoriesEndpoints)
        .then(response => response.json())
        .then(data => {
            
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching categories data:', error)
        
      })
    
  

    
  















//function getMealList() {
//   let html = "";
//   if(data.meals){
//       data.meals.forEach(meal => {
//           html += `
//               <div class = "meal-item" data-id = "${meal.idMeal}">
//                   <div class = "meal-img">
//                       <img src = "${meal.strMealThumb}" alt = "food">
//                   </div>
//                   <div class = "meal-name">
//                       <h3>${meal.strMeal}</h3>
//                       <a href = "#" class = "recipe-btn">Get Recipe</a>
//                   </div>
//               </div>
//           `;
//       });
//       mealList.classList.remove('notFound');
//   } else{
//       html = "Sorry, we didn't find any meal!";
//       mealList.classList.add('notFound');
//   }

//   mealList.innerHTML = html;
// }












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
