function revArr(){
    let arr = ["s","a","k","t","h","i"];
    let rev = [];

    for(let i=arr.length-1; i>=0; i--){
        rev.push(arr[i]);
    }
    return rev;
}
console.log(revArr());