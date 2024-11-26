let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let oddArr = [];
let evenArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenArr.push(arr[i]); // Add even numbers to evenArr
    } else {
        oddArr.push(arr[i]);  // Add odd numbers to oddArr
    }
}

// console.log("Even Numbers:", evenArr);
// console.log("Odd Numbers:", oddArr);

function overall(){
    document.getElementById("overall").innerHTML =arr.join(" , ");
}


function oddNo (){
    document.getElementById("odd").innerHTML= oddArr.join(" , ");
}
 
function evenNo (){
    document.getElementById("even").innerHTML= evenArr.join(" ,");
}