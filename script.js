document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("search-form")
    const searchInput = document.getElementById('search');
    const meallist= document.getElementById('meals'); 
    const categorylist  = document.getElementById('categories')
    const toggleSearchTypeButton = document.getElementById('toggleSearchType'); 
    const submitButton = document.querySelector('input[type="submit"]'); 
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
            searchmeals(searchTerm);
        } else {
            searchcategories(searchTerm);
        }
    });
    toggleSearchTypeButton.addEventListener('click', function() {
        // Toggle search type between 'user' and 'repo'
        searchType = (searchType === 'user') ? 'meals' : 'categories';
        // Change button text based on the new search type
        submitButton.value = (searchType === 'user') ? 'Search meals' : 'Search categories';
    });
    async function searchmeals(searchTerm) {
        // Make an asynchronous HTTP GET request to the GitHub API's User Search Endpoint
        const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json' // Specify desired API version
            }
        });
        // If the response is not successful, log an error message and return early
        if (!response.ok) {
            console.error('Error fetching users:', response.statusText);
            return;
        }
        // Extract JSON data from the response
        const data = await response.json();
        // Call the displayUsers function with the retrieved user items
        displaymeals(data.items);
    }

    // Function to search GitHub for repositories based on the provided search term
    async function searchcategories(searchTerm) {
        // Make an asynchronous HTTP GET request to the GitHub API's Repositories Search Endpoint
        const response = await fetch(`https://api.github.com/search/repositories?q=${searchTerm}`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json' // Specify desired API version
            }
        });
        // If the response is not successful, log an error message and return early
        if (!response.ok) {
            console.error('Error fetching categories:', response.statusText);
        return;
        }
        // Extract JSON data from the response
        const data = await response.json();
        // Call the displayRepos function with the retrieved repository items
        displaycategories(data.items);
    }
 
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