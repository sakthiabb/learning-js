// var greet = ["hello", "hi"];
// greet.length;
// greet.push("welcome");
// console.log(greet.length);

//--------------------------------------------------------------------------------------

    // 1. Create an array with the following strings:
    //     - "Mercury"
    //     - "Venus"
    //     - "Earth"
    //     - "Mars"

    // 2. Add the string "Jupiter" to the END of the array
    // 3. Add the string "Sun" to the START of the array
    // 4. Remove the last two strings from the array
    // 5. Remove the first two strings from the array

    // *Print out the array after each of these steps ^

// var planets =["Mercury", "venus", "Earth", "mars"];
// console.log(planets);

// planets.push("Jupiter");
// console.log(planets);

// planets.unshift("Sun")
// console.log(planets);

// planets.pop();
// planets.pop();
// console.log(planets);

// planets.shift();
// planets.shift();
// console.log(planets);

//--------------------------------------------------------------------------------------

    // 1. Create a variable called "multiple" and initialize it to 5
    // 2. Create an array with the numbers 10-15 (inclusive)
    // 3. Loop through the array and on each iteration:
    //     - Multiply the number by the multiple and print out the result
    //     - As you're printing, use this format (example):
    //         10 x 5 = 50
    //         11 x 5 = 55
    //         ...
    //         15 x 5 = 75

    // BONUS: Try to see if you can make it so that all you need to change
    // is the "multiple" variable and the program still works correctly.

// var multiple = 5;
// var arr = [10,11,12,13,14,15];
// for(var i=0; i<arr.length; i++){
//     var result = multiple*arr[i];
//     // console.log(arr[i] + " x 5 = "+ arr[i]*multiple);
//     // console.log(arr[i] + " x 5 = " +result);
//     console.log(`${arr[i]} x ${multiple} = ${result}`);
// }

//--------------------------------------------------------------------------------------

    // Create a variable called "greeting" and initialize it to:
    //     "Hello, nice to meet you!"
    
    // Use a loop to loop through this String (just like you would an array)
    //     - On each loop iteration, print out what is at that index

    // WHY does this happen?
    // WHAT is a String, really?

// var greeting = "Hello, nice to meet you!"

// for(let i=0; i<greeting.length; i++){
//     console.log(greeting[i]);
// }

//--------------------------------------------------------------------------------------

    // Create a variable called "total" that starts at 0

    // Create an array called "grades" with the following values:
    //     - 55
    //     - 63
    //     - 82
    //     - 98
    //     - 91
    //     - 43
        
    // Figure out how to print out the AVERAGE grade
    // (This is the sum of all grades divided by the number of grades)

    // var total = 0;
    // var grades = [55,63,82,98,91,43];

    // for(let i=0; i<grades.length; i++){
    //     total = total + grades[i];
    // }
    // console.log(`grades total = ${total}`);

    // var aver = total/grades.length;

    // console.log(`average is ${aver}%`);

    //--------------------------------------------------------------------------------------


    //     Create a variable called "bakery" that points to an array
    // Fill the array with the following String:
    //     - "Cake"
    //     - "Cookie"
    //     - "Bread"
    //     - "Scone"

    // Print out bakery to make sure it has these 4 Strings in it.

    // Create another variable called "myBakery" and assign it
    // to "bakery" that we declared previously

    // Add the following items to "myBakery":
    //     - "Croissant"
    //     - "Granola"

    // Print out myBakery and bakery and observe the contents.

    // WHY is this?

// var bakery = ["Cake", "cookie", "bread", "Scone"];
// console.log(bakery);

// var myBakery = bakery;
// myBakery.push("Croissant", "Granola");
// console.log(myBakery);
// console.log(bakery);

//--------------------------------------------------------------------------------------
