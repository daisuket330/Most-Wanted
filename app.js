"use strict"


//Menu functions.
//Used for the overall flow of the application.
/////////////////////////////////////////////////////////////////
//#region 

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits
      searchResults = searchByTraits(people);

       // TODO: once we have filtered results from our search functions
        // write a function to list all the options and let the user pick one person to pass
       // into the mainMenu function
      break;
      default:
    app(people); // restart app
      break;
  }
 
// function filterByTraits(people)
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = promptFor("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'", autoValid);
    
  switch(displayOption){
    case "info":
      alert("this is this person's: gender,dob,height,weight,eye colour,occupation,parents,spouse")
    // TODO: get person's info
   

    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}



//#endregion

//Filter functions.
//Ideally you will have a function for each trait.
/////////////////////////////////////////////////////////////////
//#region 

//nearly finished function used to search through an array of people to find matching first and last name and return a SINGLE person object.
function searchByName(people){
  let firstName = promptFor("What is the person's first name?", autoValid);
  let lastName = promptFor("What is the person's last name?", autoValid);

  
  let foundPerson = people.filter(function(potentialMatch){
    if(potentialMatch.firstName === firstName && potentialMatch.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person single person object using the name they entered.
  return foundPerson;
}

// TODO: write a function that prompts the user for which trait they would like to search for
// then, call a function depending on which trait they want
// and return the results of the filter
//prompt ("Which trait would you like to search for?")


//TODO: add other trait filter functions here.
//unfinished function to search through an array of people to find matching eye colors. Use searchByName as reference.

function searchByDob(people){
  let userDobInput = promptFor('Please enter the persons date of birth using M/DD/YYYY format (Dont put a zero if it is a single digit month',autoValid);
  let listOfDob =[]
  let foundDob = people.filter(function(potentialTraitMatch){
    if(potentialTraitMatch.dob == userDobInput){
      return true;
    }
    else{
      return false;
    }
  })
  for(let i = 0; i < foundDob.length; i++){
      listOfDob.push(' ' + foundDob[i].firstName + ' ' + foundDob[i].lastName)
  }
  alert(`${listOfDob} have the date of birth of ${userDobInput}.`,autoValid);
    return foundDob;

}

function searchByEyeColor(people){
let userEyeColoeInput = promptFor('Please enter the persons eye color',autoValid);
  let listOfEyes =[]
  let foundEyeColor = people.filter(function(potentialTraitMatch){
    if(potentialTraitMatch.eyeColor === userEyeColoeInput){
      return true;
    }
    else{
      return false;
    }
  })
  for(let i = 0; i < foundEyeColor.length; i++){
      listOfEyes.push(' ' + foundEyeColor[i].firstName + ' ' + foundEyeColor[i].lastName)
  }
      alert(`${listOfEyes} all have ${userEyeColoeInput} eyes`,autoValid);
      return foundEyeColor;
}

function searchByHeight(people){
  let userHeightInput = promptFor('Please enter the persons height in inches',autoValid);
  let listOfHeights =[]
  let foundHeight = people.filter(function(potentialTraitMatch){
    if(potentialTraitMatch.height == userHeightInput){
      return true;
    }
    else{
      return false;
    }
  })
  for(let i = 0; i < foundHeight.length; i++){
      listOfHeights.push(' ' + foundHeight[i].firstName + ' ' + foundHeight[i].lastName)
  }
  alert(`${listOfHeights} are ${userHeightInput} inches tall`,autoValid);
    return foundHeight;
}

functio searchByWeight(people){
  let userWeightInput = promptFor('Please enter the persons weight',autoValid);
  let listOfWeights =[]
  let foundWeight = people.filter(function(potentialTraitMatch){
    if(potentialTraitMatch.weight == userWeightInput){
      return true;
    }
    else{
      return false;
    }
  })
  for(let i = 0; i < foundWeight.length; i++){
      listOfWeights.push(' ' + foundWeight[i].firstName + ' ' + foundWeight[i].lastName)
  }
  alert(`${listOfWeights} are ${userWeightInput} pounds`,autoValid);
    return foundWeight;
}

function searchByOccupation(people){
 let listOfOccupations =[]
  let foundOccupation = people.filter(function(potentialTraitMatch){
    if(potentialTraitMatch.occupation === userOccupationInput){
      return true;
    }
    else{
      return false;
    }
  })
  for(let i = 0; i < foundOccupation.length; i++){
      listOfOccupations.push(' ' + foundOccupation[i].firstName + ' ' + foundOccupation[i].lastName)
  }
  alert(`${listOfOccupations} are ${userOccupationInput}s`,autoValid);
    return foundOccupation;
}
function searchByGender(people){
let genderx = promptFor("What is the person's gender?",autoValid);

let foundPerson = people.filter(function(potentialMatch){

    if(potentialMatch.gender === genderx){
      return true;
    }
    else{
      return false;
    }
  })
return foundPerson;
}



//#endregion

//Display functions.
//Functions for user interface.
/////////////////////////////////////////////////////////////////
//#region 

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display.
  alert(personInfo);
}

//#endregion
function searchByTraits (people) {
  let listOfTraits = people;
  let userIsHappy = false;
  let finalResult = [];
  while (userIsHappy === false) { 
       let userTraitInput = parseInt(promptFor('Please enter another trait youd like to search for? Type "1" for eyes, "2" for gender, "3" for occupation, "4" for height, "5" for weight, or "6" for date of birth. Or, if you have found the person you are looking for, enter "7"',autoValid));
      if(userTraitInput === 1){
        listOfTraits = searchByEyeColor(listOfTraits)
      }if(userTraitInput === 2){
        listOfTraits = searchByGender(listOfTraits);
      }if(userTraitInput === 3){
        listOfTraits = searchByOccupation(listOfTraits);
      }if(userTraitInput === 4){
        listOfTraits = searchByHeight(listOfTraits);
      }if(userTraitInput === 5){
        listOfTraits = weightSearch(listOfTraits);
      }if(userTraitInput === 6){
        listOfTraits = dobSearch(listOfTraits);
      }if (userTraitInput === 7) {
        userIsHappy = true;
      }
    }
    if (finalResult.length = 0) {
      alert ('No one was found given your current filter. Please try again')
      searchByTraits(people)
    }
    for (let i = 0; i < listOfTraits.length; i++) {
      finalResult.push(' ' + listOfTraits[i].firstName + ' ' + listOfTraits[i].lastName)
      
      
    }

 let foundPersons = promptFor(`Your filters have resulted in ${finalResult}. Type the first name of the person you would like to find the information on.`, autoValid);
    foundPersons = foundPersons.charAt(0).toUpperCase() + foundPersons.slice(1);
    let firstPerson = listOfTraits.filter(function(potentialTraitMatch){
      if(potentialTraitMatch.firstName === foundPersons){
        return true;
      }
      else{
        return false;
      }
    })
    return mainMenu(firstPerson[0],people); 

//Validation functions.
//Functions to validate user input.
/////////////////////////////////////////////////////////////////
//#region 

//a function that takes in a question to prompt, and a callback function to validate the user input.
//response: Will capture the user input.
//isValid: Will capture the return of the validation function callback. true(the user input is valid)/false(the user input was not valid).
//this function will continue to loop until the user enters something that is not an empty string("") or is considered valid based off the callback function(valid).
function promptFor(question, valid){
  var isValid
  do{
    var response = prompt(question).trim();
    isValid = valid(response);
  } while(response === ""  ||  isValid === false)
  return response;
}
// function to find and list descendents,if any

function findDecendants(person,people){
  let listOfKids = [];
  let foundDecendant = people.filter(function(potentialMatch){
    if(potentialMatch.parents.includes(person.id)){
      return true;
    }else{
      return false;
    }
  })
  for(let i = 0; i < foundDecendant.length; i++){
    listOfKids.push(' ' + foundDecendant[i].firstName + ' ' + foundDecendant[i].lastName)
  }
  if(listOfKids.length === 0){
    alert('There was no descendants found for your person')
    mainMenu(person,people);
  }else{
  alert(`${listOfKids} found as their descendant`)
  return findGrandkids(people,foundDecendant,person)
  }
}

function findGrandkids(people,person,originalPerson){
  let listOfGrandkids = []
  for(let i = 0; i < person.length; i++){
    let foundGrandKids = people.filter(function(potentialMatch){
      if(potentialMatch.parents.includes(person[i].id)){
        return true;
      }else{
        return false;
      }
    })
    for(let j = 0; j < foundGrandKids.length; j++){
      listOfGrandkids.push(' ' + foundGrandKids[j].firstName + ' ' + foundGrandKids[j].lastName)
    }
  }
  if(listOfGrandkids.length === 0){
    alert('No grandkids were found')
    mainMenu(originalPerson,people)
  }else{
    alert(`${listOfGrandkids} found as their grandkids`)
    return mainMenu(originalPerson,people)
  }
}

function findParents (person,people) {
  let listOfParents = [];
  let foundParents = people.filter(function(potentialMatch){
    if (potentialMatch.id === person.parents[0] || potentialMatch.id === person.parents[1]) {
      return true;
    } else {
      return false;
    }
  })
  for (let i = 0; i < foundParents.length; i++) {
    listOfParents.push(' ' + foundParents[i].firstName + ' ' + foundParents[i].lastName)
  }
  if (listOfParents.length === 0) {
    alert('There was no parents found for your person')
    return findSiblings(people, foundParents, person)
  } else {
    alert (`${listOfParents} found as their parents`)
    return findSiblings(people, foundParents, person)
  }
}

function findSiblings (people, foundParents, orignalPerson) {
  let listOfSiblings = [];
  if (foundParents.length === 0) {
    let foundSiblings = people.filter(function(potentialMatch) {
      if (potentialMatch.lastName === orignalPerson.lastName && potentialMatch.parents[0] === undefined && potentialMatch.currentSpouse !== orignalPerson.id) {
        return true;
      } else {
        return false;
      }
    })
    for (let i = 0; i < foundSiblings.length; i++) {
      if (foundSiblings[i].id !== orignalPerson.id) {
      listOfSiblings.push(' ' + foundSiblings[i].firstName + ' ' + foundSiblings[i].lastName)
      }
    }
  }
  if (foundParents.length === 1) {
    let foundSiblings = people.filter(function(potentialMatch){
      if (potentialMatch.parents[0] === foundParents[0].id || potentialMatch.parents[1] === foundParents[0].id) {
        return true;
      } else {
        return false;
      }
    })
    for (let i = 0; i < foundSiblings.length; i++) {
      if (foundSiblings[i].id !== orignalPerson.id) {
      listOfSiblings.push(' ' + foundSiblings[i].firstName + ' ' + foundSiblings[i].lastName)
      }
    }
  } 
  if (foundParents.length === 2) {
  let foundSiblings = people.filter(function(potentialMatch) {
    if (potentialMatch.parents[0] === foundParents[0].id || potentialMatch.parents[0] === foundParents[1].id || potentialMatch.parents[1] === foundParents[0].id || potentialMatch.parents[1] === foundParents[1].id) {
      return true;
    } else {
      return false;
    }
  })
  for (let i = 0; i < foundSiblings.length; i++) {
    if (foundSiblings[i].id !== orignalPerson.id) {
    listOfSiblings.push(' ' + foundSiblings[i].firstName + ' ' + foundSiblings[i].lastName)
    }
  }
}
  
  if (listOfSiblings.length === 0) {
    alert('There was no siblings found for your person')
    return findSpouse(orignalPerson, people)
  } else {
    alert(`${listOfSiblings} are their siblings`)
    return findSpouse(orignalPerson, people, )
  }
}

function findSpouse (person, people) {
  let foundSpouse = people.filter(function(potentialMatch){
    if (potentialMatch.currentSpouse === person.id) {
      return true;
    } else {
      return false;
    }
  })
  if (foundSpouse[0] == null || foundSpouse === undefined) {
    alert('They have no spouse')
    return mainMenu(person, people)
  } else {
    alert (foundSpouse[0].firstName + ' ' + foundSpouse[0].lastName + ' is their spouse')
    return mainMenu(person, people)
  }
}


// helper function/callback to pass into promptFor to validate yes/no answers.
function yesNo(input){
  if(input.toLowerCase() == "yes" || input.toLowerCase() == "no"){
    return true;
  }
  else{
    return false;
  }
}

// helper function to pass in as default promptFor validation.
//this will always return true for all inputs.
function autoValid(input){
  return true; // default validation only
}

//Unfinished validation function you can use for any of your custom validation callbacks.
//can be used for things like eye color validation for example.
function customValidation(input){
  
}

//#endregion
