'use strict'; 
(function() {

  // Math object
  display(Math.PI);
  display(Math.round(5.335));
  display(Math.max(1,6,3,77,442,657,34,757,343));
  display('==========================');


  // Date object
  let date = new Date(2022,1,7,18,30,50);
  date.setMonth(5);
  display(date.toString());
  display('==========================');


  // Validating strings with regex
  function checkPasswordComplexity(password) {
    // let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$', 'gi');
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/gi;

    return regex.test(password);
  }
  display(checkPasswordComplexity('AreallyhaRdPassWord69!!'));
  display('==========================');
  
  
  function findAlerts(logData) {
    let regex = /ERROR(.*?):(.*?);/g;

    let result = regex.exec(logData);

    while(result !== null) {
      display(result[1]);
      display(result[2]);
      display('--------------');
      result = regex.exec(logData);
    }
  }

  let logData = 'INFO:Ok;ERROR(HIGH):Something broke;ERROR(LOW):Something Fishy;ERROR(HIGH):So many errors;';
  findAlerts(logData);
  

})(); 

/*

KEY TAKEAWAYS

- Math object encapsulates a host of math constants
- The date object contains constructors to create specific dates and times

- There are two different ways to create a regular expression - The 'new' keyword, or the regex shorthand.
- The regex.test function returns a boolean that indicating whether the string contains text matching the regular expression
- The exec command searches a string. It can be called multiple times (in the same instance) to return multiple matches.

*/