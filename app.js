let numArr = [];

// get random numbers============================
function randomizerFn(min, max){
    const randNum = Math.floor(Math.random() * max) + min;
    numArr.push(randNum); 
}


const countOfNumber = prompt(`How many numbers do you want to play with? (choose one number) \n (4,5,6)`)

// change the number of numbers displayed 
let nums = Number(countOfNumber);
for(let i=0; i<nums ; i++){
    randomizerFn(1, 5);
}


alert(`Remember these ${nums} number : ${numArr}`)


// a function to compare two arrays
function comparator(numArr, num){
    
    setTimeout(() => {
        const userInput = prompt(`Enter ${num} numbers in the correct order`);
        let arrayNum = userInput.split(','); 
        
        arrayNum.every(el => { 
            if(numArr.indexOf(Number(el)) !== -1){
                alert(`Congrats! You answered correctly. the numbers are : ${numArr}`);
            }else{
                alert(`Oops! Your answer is wrong. the result is :${numArr}, but you wrote: ${arrayNum}`);
            }
        });
    },1500);
}

comparator(numArr, nums);

