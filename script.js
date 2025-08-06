var arr = [1,2,3,4,5];
var arrstr = ["sakthi", "priyan"];

function somefn(){
    // for(let i=0; i<=arr.length; i++){
    //     console.log(arr[i]);
    // }
    for(let arrData of arr){
        console.log("2 x " + arrData +" = " +arrData*2);
    }
}
somefn();