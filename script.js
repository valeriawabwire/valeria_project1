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
        const response = await fetch(`http://localhost:3000/meals1`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json' // Specify desired API version
            }
        });
        // If the response is not successful, log an error message and return early
        if (!response.ok) {
            console.error('Error fetching meals:', response.statusText);
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
        const response = await fetch(`http://localhost:3000/categories`, {
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
    function displayUsers(users) {
        // Clear the previous content of the user list
        userList.innerHTML = '';
        // Iterate over each user item and display it in the user list
        users.forEach(user => {
            // Create a list item element
            const li = document.createElement('li');
            // Create an image element for the user's avatar
            const avatarImg = document.createElement('img');
            // Set the source of the image to the user's avatar URL
            avatarImg.src = user.avatar_url;
            // Set the alt text for the image
            avatarImg.alt = `${user.login}'s avatar`;
            // Add the 'avatar-img' class to the avatar image
            avatarImg.classList.add('avatar-img');
            // Append the avatar image to the list item
            li.appendChild(avatarImg);
           
            // Create a span element for the username
            const usernameSpan = document.createElement('span');
            // Set the text content of the span to the user's username
            usernameSpan.textContent = user.login;
            // Add a class for styling
            usernameSpan.classList.add('username');
            // Append the username span to the list item
            li.appendChild(usernameSpan);
           
            // Create a link element for the user's profile
            const profileLink = document.createElement('a');
            // Set the href attribute of the link to the user's GitHub profile URL
            profileLink.href = user.html_url;
            // Set the target attribute to '_blank' to open the link in a new tab
            profileLink.target = '_blank';
            // Set the text content of the link
            profileLink.textContent = 'Profile';
            // Add a class for styling
            profileLink.classList.add('profile-link');
            // Append the profile link to the list item
            li.appendChild(profileLink);
           
            // Append the list item to the user list
            userList.appendChild(li);
           
            // Add event listener to the list item for click events
            li.addEventListener('click', function() {
                // Call the displayUserRepos function with the user's login as argument
                displayUserRepos(user.login);
            });
        });
    }

 
    // Function to fetch and display repositories of a specific user
    async function displayUserRepos(username) {
        // Make an asynchronous HTTP GET request to the GitHub API's User Repos Endpoint
        const response = await fetch(`https://api.github.com/users/${username}/repos`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json' // Specify desired API version
            }
        });
        // If the response is not successful, log an error message and return early
        if (!response.ok) {
            console.error('Error fetching user repositories:', response.statusText);
            return;
        }
        // Extract JSON data from the response
        const repos = await response.json();
        // Call the displayRepos function with the retrieved repositories
        displayRepos(repos);
    }
 
    // Function to display repositories on the page
    function displayRepos(repos) {
      // Clear the previous content of the repository list
      reposList.innerHTML = '';
      // Iterate over each repository and display it in the repository list
      repos.forEach(repo => {
            // Create a list item element
            const li = document.createElement('li');
            // Set the text content of the list item to the full name of the repository
            li.textContent = repo.full_name;
            // Append the list item to the repository list
            reposList.appendChild(li);
      });
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