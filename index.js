
/* -------------------------------------------------------------------
  1. Write a function that takes a student’s score and logs "Passed" 
    if it’s 180 and above, else logs "Failed". (JAMB-style)
   -----------------------------------------------------------------*/

    function studentScore(score){
        if (score >= 180) {
            console.log("Passed");
        }else{
            console.log("Failed");
        }
    }

    studentScore(180);
    studentScore(60);

    /*---------------------------------------------------------
    2. Write a function that accepts an age and returns "You are eligible to vote" 
       if the age is 18 or above, otherwise "Not eligible".
    ---------------------------------------------------------*/


    function vote(ageIn) {
        (ageIn >= 18) ? 
            console.log(`Your age is ${ageIn}, you are eligible to vote for Tinubu again.`) : 
            console.log(`Not eligible. Your age is ${ageIn}, you must be 18 years and above to make a Vote here. thanks!`);

    }

    vote(30);
    vote(12);


    /* ---------------------------------------------------------------
    3. Write a function that takes a name and score, then returns:
        "Excellent" if score >= 90
        "Good" if score >= 75
        "Average" if score >= 50
        "Fail" otherwise
      ---------------------------------------------------------------*/

    function studentGrade(name = "user", score = 0) {

        if (score >= 90) {

            console.log(`Hi ${name}, your score is ${score}. Grade: Excellent`);

        }else if (score >= 75) {

            console.log(`Hi ${name}, your score is ${score}. Grade: Good`);

        }else if (score >= 50) {

            console.log(`Hi ${name}, your score is ${score}. Grade: Average`);
        }
        else{
            console.log(`Hi ${name}, your score is ${score}. Grade: Failed`);
        }
        
    }

    studentGrade();
    studentGrade("Ahmed", 99);
    studentGrade("Musa", 78);
    studentGrade("Peter", 60);
    studentGrade("Muhammed", 20);

    /*-------------------------------------------------------------------
    4. Write a function that takes two boolean values: 
        hasID and isAbove18. Return "Access granted" only if both are true.

    🚨 IMPORTANT: Sir, I understood this question in two different ways, 
        so I’ll write two functions to show both approaches.
     --------------------------------------------------------------------*/
     
  // Arrow function looks cleaner and simpler
  const checkUserAccess = (hasID, isAbove18) => {

    (hasID && isAbove18) ? 
        console.log("Access Granted") :     
        console.log("Access Denied");

}

checkUserAccess(true, false); // passing values to a function that takes two boolean values
checkUserAccess(true, true);
checkUserAccess(false, true);


    //another approach with a normal function
    function accessCheckingStatus(hasID, isAbove18) {

        if (hasID != "" && isAbove18 >= 18) {
            console.log("Access Granted");
        }else{
            console.log("Access Denied");
        }
        
    }
    
    accessCheckingStatus("ID3355443", 19);      //function invocation
    accessCheckingStatus("", 2);
    accessCheckingStatus("ID3322444", 17);


    /*----------------------------------------------------------
    5. Use a for loop to go through an array of student scores. For each score, 
       print "Pass" if it’s above 50 or "Fail" if it’s 50 or below.
     ----------------------------------------------------------*/


    const studentArr = [20, 40, 60, 30, 73, 57, 44, 90, 42, 88, 50, 57]; //array list of student score

    for (let i = 0; i < studentArr.length; i++) {

        const score = studentArr[i]; // storing each score in a score variable for testing.

        (score > 50) ?               // using ternary operators to check the value of score
            console.log(`Your Score is ${score}, you Passed.`) :    
            console.log(`Your Score is ${score}, you Failed.`);
  
    }

    /*--------------------------------------------------------------
    6. Write an arrow function that returns "Yes" 
       if a student passed both Math and English (score ≥ 50), else "No".
    --------------------------------------------------------------*/

    const studentExam = (mathScore, engScore) => {

        (mathScore >= 50 && engScore >= 50)?
            console.log("Yes") :
            console.log("No");
    }

    studentExam(20, 30);
    studentExam(57, 49);
    studentExam(55, 90);

    /*--------------------------------------------------------------
    7. Create a function that checks if a user has either an email or
       a phone number before signing up.
    --------------------------------------------------------------*/

    function userAuth(email = "" , phoneNo = "") {

        if (email !== "" || phoneNo !== "") { // condition, checking the variables if they are not empty
            console.log("You are allowed to sign-up");   
        }else{
            console.log("You can't sign up at the moment, use your phone number or email and try again.");
        }
    }

    userAuth("a@mail.com", "9088");
    userAuth("b@mail.com");
    userAuth("","9034454434");
    userAuth();

    /* ----------------------------------------------------------------
     8. Write a function that takes username and password. 
        If either one is empty, return "Invalid input" using the || operator.
       ----------------------------------------------------------------*/

    const checkUserInput = (username = "", password = "") => {

        (username === "" || password === "") ?
            console.log("Invalid input") :
            console.log("Valid");

    }
    
    checkUserInput("musa","");
    checkUserInput("", "1234");
    checkUserInput("ahmed", "123");
    checkUserInput();

    /*-----------------------------------------------------------------
    9. Write a function that accepts hours worked. If hours ≥ 40, return "Full-time", 
       else "Part-time" using a ternary operator.
    -----------------------------------------------------------------*/

    function employee(hours) {
        
        (hours >= 40) ? 
            console.log("Full-time") : 
            console.log("Part-time");
    }

    employee(20);
    employee(50);
    employee(40);

    //--------------------------------------------------------------------
    // 10. Write an arrow function that takes two numbers and returns the larger one.
    //--------------------------------------------------------------------

    const maxNumber = (numOne, numTwo) => {

        if (numOne == numTwo) {

            console.log(`Both numbers are Equal`);

        }else{
            
            (numOne > numTwo) ? console.log(numOne) : console.log(numTwo);

        }
    }

    maxNumber(20, 20);
    maxNumber(24, 48);