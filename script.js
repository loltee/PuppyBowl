const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2302-ACC-ET-WEB-PT-E';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try { 
        const response = await fetch(APIURL+"players");
        const players = await response.json();
        console.log(players)
        return players.data.players;

    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

const fetchSinglePlayer = async (playerId) => {
    try {

    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

const addNewPlayer = async (playerObj) => {
    try {
        const players = await addNewPlayer
        renderAllPlayers(player);
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

const removePlayer = async (playerId) =>{
    try {

    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * 
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */
const renderAllPlayers = (playerList) => {
    try {
        playerList.forEach((player)=> { 
            const allPlayersElement = document.createElement('div');   
            allPlayersElement.classList.add('players-card');
            allPlayersElement.innerHTML = `
           <h1>${player.name}</h1>
        
           <img src="${player.imageUrl}" class="dog" alt="${player.name}">
          <button class="details-button" data-id=${player.id}">
          <span>See Details</span>
          <button class="remove-button" data-id=${player.id}">Remove</button>
           `
            const h1 = document.createElement("h1");
        h1.innerHTML = "hello"
        playerContainer.appendChild(allPlayersElement);
        })
        const allPlayersElement = document.createElement('div');
        allPlayersElement.classList.add('players-card');
        allPlayersElement.innerHTML = `
       
      `
    //     const h1 = document.createElement("h1");
    // h1.innerHTML = "hello"
    // playerContainer.appendChild(allPlayersElement);
  
    // let playerContainer = 0;

    // for (let i = 0; i < sentence.length; i++) {
    //     if (sentence[i] === "e") {
    //       playerContainer++
    //     }
    //   }
      
    //   console.log(playerContainer)
    } 
    
    catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayer = () => {
    try {
        
    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}


 // Add event listeners to buttons
 document.querySelectorAll('.details').forEach((button) =>
 button.addEventListener('click', async (event) => {
     const player = await fetchSinglePlayer(event.target.id);
     // Display player details
 })
);

document.querySelectorAll('.remove').forEach((button) =>
 button.addEventListener('click', async (event) => {
 try{
    await removePlayer(event.target.id);
     // Re-render all players
     const players = await fetchAllPlayers();
     renderAllPlayers(players);
 } catch(err){
    console.log("error")
 }
 })
);

/**
* It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
* fetches all players from the database, and renders them to the DOM.
*/
const renderNewPlayerForm = () => {
try {

// Add form to DOM
newPlayerFormContainer.innerHTML = `
<form id="new-player-form">

 <input type="text" id="name" placeholder="Enter puppy name" required>
 <input type="text" id="breed" placeholder="Enter breed" required>
 <input type="number" id="age" placeholder="Enter age" required>
 <input type="url" id="imageUrl" placeholder="Enter image URL" required>
 <button type="submit">Add player</button>

</form>
`;

//Adding event listener for submitting the form
document.getElementById('new-player-form').addEventListener('submit', async (event) => {
 event.preventDefault();
 console.log('Form submitted');

 //Collecting form data
 const playerObj = {
     name: document.getElementById('name').value,
     breed: document.getElementById('breed').value,
     age: document.getElementById('age').value,
     imageUrl: document.getElementById('imageUrl').value,
 };

 console.log('Form data:', playerObj);

 // Adding new player and re-rendering all players
 await addNewPlayer(playerObj);
 const players = await fetchAllPlayers();
 renderAllPlayers(players);
});
} catch (err) {
console.error('Uh oh, trouble rendering the new player form!', err);
}
}


const init = async () => {

//Fetch and render all the payers
const players = await fetchAllPlayers();
renderAllPlayers(players);

renderNewPlayerForm();
}

init();