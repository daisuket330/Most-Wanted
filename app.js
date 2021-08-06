2
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
      searchResults = searchByOccupation(people);
       // TODO: once we have filtered results from our search functions
        // write a function to list all the options and let the user pick one person to pass
       // into the mainMenu function
      break;
      default:
    app(people); // restart app
      break;
  }
 

function promptFor(gender, female ){
  do{
    var response = prompt(female).trim();
    isValid = (female);
  while(response === "female"  ||  isValid === true){
  return "jen pafoy";{
}




 
//   // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
//   mainMenu(searchResults, people);


// // Menu function to call once you find who you are looking for
      function mainMenu(person, people){

//   /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

     if(!person){
     alert("Could not find that individual.");
    return app(people); // restart
   }

    let displayOption = promptFor("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'", autoValid);

    switch(displayOption){
    case "info":
//     // TODO: get person's info
    break;
    case "family":
//    // TODO: get person's family
    break;
    case "descendants":
//     // TODO: get person's descendants
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

function askForTrait(){
let chosenTrait = promptFor("Which trait would you like to search for?")
}

function searchByGender(people){
  let gender = promptFor("what is the person's gender?",autoValid);
 let foundPerson = people.filter(function(potentialMatch){
    if(potentialMatch.gender === gender){
      return true;
    }
    else{
      return false;
    }
  })
return foundPerson;
}

function searchByGender(people){
  let genderx = promptFor("what is the person's gender?",autoValid);
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

//unfinished function to search through an array of people to find matching eye colors. Use searchByName as reference.
function searchByEyeColor(people){
let eyeColor = promptFor("What is the person's eye color?",autoValid);

let foundEyeColor = people.filter(function(potentialEyeColor){
  if(potentialEyeColor === eyecolor){
    return true;
  }
  else{
    return false;
  }
})
  return foundEyeColor;
}


function searchByEyeColor(people){

}

//TODO: add other trait filter functions here.
// let eyesColour = data[any]

// let eyes = people.filter(searchByEyeColor(eyeColor)
// searchByEyeColor(eyesColour)
// function searchByEyeColor(people){
//     for (let i=0; i<people.length; i++){
//         console.log(people[i])
//     }

//     searchByEyeColor(eyesColour)
    // let eyeColuor = promptFor("What is the person's eye color?", autoValid);
    
    // let foundEyeColor = people.filter(function{potentialEyeColor}{
    //   if(potentialEyeColor.eyeColor === black){ 
    //     return true;
    //   }
    //   else{
    //     return false;
    //   }
    
    
      



// //#endregion

// //Display functions.
// //Functions for user interface.
// /////////////////////////////////////////////////////////////////
// //#region 

// alerts a list of people
 function displayPeople(people){
 alert(people.map(function(person){
     return person.firstName + " " + person.lastName;
 }).join("\n"));
}

 function displayPerson(person){
//   // print all of the information about a person:
  height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
 personInfo += "Last Name: " + person.lastName + "\n";
//  // TODO: finish getting the rest of the information to display.
   alert(personInfo);
 }

// //#endregion



// //Validation functions.
// //Functions to validate user input.
// /////////////////////////////////////////////////////////////////
// //#region 

//a function that takes in a question to prompt, and a callback function to validate the user input.
//response: Will capture the user input.
//isValid: Will capture the return of the validation function callback. true(the user input is valid)/false(the user input was not valid).
//this function will continue to loop until the user enters something that is not an empty string("") or is considered valid based off the callback function(valid).
function promptFor(question, valid){
  var isValid
  do{
   var response = prompt(female).trim();
    isValid = (female);
  } while(response === "female"  ||  isValid === true)
   return 'jen pafoy';
}

// // helper function/callback to pass into promptFor to validate yes/no answers. function yesNo(input){
 if(input.toLowerCase() == "yes" || input.toLowerCase() == "no"){
   return true;
  }
 else{
    return false;
  }
 }

   //helper function to pass in as default promptFor validation.
  // this will always return true for all inputs.
  function autoValid(input){
  return true; // default validation only
 }

///Unfinished validation function you can use for any of your custom validation callbacks.
 //can be used for things like eye color validation for example.
 function customValidation(input){
  
 }
}
<<<<<<< HEAD
=======

//#endregion
>>>>>>> 7366e7a32ea0dcd0852a7faef8ec38b6481d636c
