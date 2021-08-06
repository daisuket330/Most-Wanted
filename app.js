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
      searchResults = searchByTraits(people);
       break;
}
function searchByGender(app){
  let female = promptFor("What is the gender of the person?", autoValid);
  let male= promptFor("what is the gender of the person",autoValid);
}
  let matchingGender = app.filter(function(potentialMatch){
    while(potentialMatch.data===female){
      return false;
}
       if (potentialMatch.gender===female) {
       }
      console.log = ("Jen Pafoy");
    })

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

//        //TODO: add other trait filter functions here.



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
function promptFor(gender, female ){
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
