document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("search-form")
    const searchInput = document.getElementById('search');
    const meallist= document.getElementById('meals'); 
    const categorylist  = document.getElementById('categories')
    let searchType = 'user';
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Get the search term from the search input field and trim any leading or trailing whitespace
        const searchTerm = searchInput.value.trim();
        // If the search term is empty, alert the user and return early
        if (searchTerm === '') return alert("No value submitted");
   
        // Check the current search type and call the appropriate search function
        if (searchType === 'user') {
            searchUsers(searchTerm);
        } else {
            searchRepos(searchTerm);
        }
    });
         
 let allContainers = document.querySelectorAll('.container')
let allTxts= document.querySelectorAll('.text')
const toggleMode = document.querySelector('button#mode');
 toggleMode.addEventListener('click', ()=>{
    if(allContainers[0].style.backgroundColor==='black'){
       allContainers.forEach(container=> {
            container.style.backgroundColor='white'
        })
        allTxts.forEach(txt=> {
            txt.style.color ='black'
        });
        
   }else{

       allContainers.forEach(container=> {
             container.style.backgroundColor='black'
        })
        allTxts.forEach(txt=> {
            txt.style.color ='white'
       })
        
    }
 })
});