// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

const button = exampleRow.querySelector(".btn-delete");
button.addEventListener("click", () => {
  console.log("is working!")
  exampleRow.remove();
  
})

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  const likeButton = exampleRow.querySelector(".btn-like")
    likeButton.addEventListener ("click", () => {
      likeButton.classList.toggle("selected")
    })


tableBody.appendChild(exampleRow);



// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach(function(contact){
  const newRow = document.createElement("tr");
newRow.innerHTML = `
<td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`; 
 // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...

const button = newRow.querySelector(".btn-delete");
button.addEventListener("click", () => {
  //console.log("is working!") -> debugging
  newRow.remove();
  
})

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  const likeButton = newRow.querySelector(".btn-like")
    likeButton.addEventListener ("click", () => {
      likeButton.classList.toggle("selected")
    })


tableBody.appendChild(newRow);})
  
// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

function getRandomContact() {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);

return splicedArr[0];

}

const randomButton = document.getElementById("btn-add-random");

randomButton.addEventListener("click", () => {
  const randomNewContact = getRandomContact()
  const lastRow = document.createElement("tr");
  lastRow.innerHTML = `
  <td>
    <img src="${randomNewContact.pictureUrl}" />
  </td>
  <td> ${randomNewContact.name} </td>
  <td> ${randomNewContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  const button = lastRow.querySelector(".btn-delete");
  button.addEventListener("click", () => {
    lastRow.remove();

  });


  const likeButton = lastRow.querySelector(".btn-like")
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected")
  });

  tableBody.appendChild(lastRow);
})