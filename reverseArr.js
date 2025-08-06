function revArr(){
    let arr = ["s","a","k","t","h","i"]; // initialize array.
    let rev = []; // creating emply arr and named rev.

    for(let i=arr.length-1; i>=0; i--){
        rev.push(arr[i]); // using .push array to empty arr rev[].
    }
    return rev; // return rev.
}
console.log(revArr()); //output ["i","h","t","k","a","s"]