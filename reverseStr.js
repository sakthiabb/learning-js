
function revString(){
    var str = "sakthi";
    var rev = "";

    for(let i=str.length-1; i>=0; i--){
        rev += str[i];
    }
    return rev;
}

console.log(revString());