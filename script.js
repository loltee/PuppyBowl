
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


const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2302-ACC-ET-WEB-PT-E';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;
const teamId = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/teams`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try {
        //fetching all players from API
        const response = await fetch(APIURL);
        const players = await response.json();
        return players; // returns an array of the players
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};
// fetching single player
const fetchSinglePlayer = async (playerId) => {
    try {
        //fetching single player feom API
        const response = await fetch(`${APIURL}/${playerId}`);
        let player = await response.json();
        player = player.data.player;

        // const teamsResponse = await fetch(teamId);
        // let teams = await teamsResponse.json();
        // teams = teams.data.teams;
        


        //for team 
        //<p>${player.teamId}</p> 
        // <p> Score: ${teams.score}</p>
        // <p> TeamsId: ${teams.teamId}</p>


        //creating div element with class name player  
        const playerElement = document.createElement("div");
        playerElement.classList.add("detailCard");
        playerElement.innerHTML = `
        <div class="content" id="popup">
        <button class="close-button">X</button>
        <h2>${player.name}</h2>
                <img src="${player.imageUrl}" class="img" alt="${player.name}">
                <p> Breed: ${player.breed}</p>
                <p> Status: ${player.status}</p>
                <p> CohortId: ${player.cohortId}</p>
          </div>
                
            `;
            playerContainer.appendChild(playerElement);
       
        const closeButton = playerElement.querySelector(".close-button");
        closeButton.addEventListener("click", () => {
        playerElement.remove();
    });

    console.log(player);
    return player;

    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};



// adding new player
const addNewPlayer = async (playerObj) => {
    try {
        const response = await fetch(APIURL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            //   'Accept': 'application/json'
            },
            body: JSON.stringify(playerObj),
          });
          const player = await response.json();
          console.log(player);
          const players = await fetchAllPlayers();
        renderAllPlayers(players.data.players);
          

    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

//remove player
const removePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/${playerId}`, {
            method: "DELETE",
          });
          const player = await response.json();
          console.log(player);
          fetchAllPlayers();

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



/// <p>${player.teamId}</p>

const renderAllPlayers = (playerList) => {
    try {
        playerContainer.innerHTML = "";
        playerList.forEach((player) => {
            const playerElement = document.createElement("div");
            playerElement.classList.add("playerCard");
            playerElement.innerHTML = `
                    <h2 >${player.name}</h2>
                    <img src="${player.imageUrl}" class="img" alt="${player.name}" ></br><br>
                    <button class="details-button"  data-id="${player.id}" >
                    <span></span><span></span><span></span><span></span>See Details</button>
                    <button class="remove-button" data-id="${player.id}" >Remove</button>
                    
                    `;
 
            playerContainer.appendChild(playerElement);
            

            // added eventlisteners to buttons


            const detailsButton = playerElement.querySelector(".details-button");
            detailsButton.addEventListener("click", async (event) => {
            const players = event.target.dataset.id;
            await fetchSinglePlayer(players);
            console.log(players);
         });

            document.querySelectorAll(".remove-button").forEach((button) =>
                button.addEventListener("click", async (event) => {
                    await removePlayer(event.target.dataset.id);
                    const players = await fetchAllPlayers();
                    renderAllPlayers(players.data.players);
                })
            );
        
        });

    } catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};




/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */

// Adding new player
const renderNewPlayerForm = () => {
    try {
        const newPlayerForm = document.createElement('form');
        newPlayerForm.classList.add('info');
        const newPlayerFormHTML = `
        
        <form>
        <h2> New Player </h2>
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="breed" placeholder="Breed" required />
          <input type="text" name="status" placeholder="Status" required />
          <input type="text" name="imageUrl" placeholder="Image Url" required />
          <button type="submit"><span></span><span></span><span></span><span></span>Add Puppy</button>
        </form>
      `;


    newPlayerFormContainer.innerHTML = newPlayerFormHTML;

    const form = newPlayerFormContainer.querySelector('form');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const playerData = {
        name: form.name.value,
        breed: form.breed.value,
        status: form.status.value,
        imageUrl: form.imageUrl.value

      };

     //await renderNewPlayerForm(playerData.name, playerData.breed, playerData.status, playerData.imageUrl);

     await addNewPlayer(playerData);
      const players = await fetchAllPlayers();
      await renderAllPlayers(players.data.players);

    //   form.name.value = '';
    //   form.breed.value = '';
    //   form.status.value = '';
    //   form.imageUrl.value = '';

    form.reset();
    });

    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players.data.players);

    renderNewPlayerForm(players.data.players);
}

init();