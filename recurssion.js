// recurssive function 
// a function call itself.

function recc(n){
    if(n==5){
        console.log("5");
        return null;
    }
    console.log(n);
    recc(n+1)

}
recc(0);