// 18-6 (advanced) while and for loop break and continue

/* for(let i = 1; i<= 20; i++){
    console.log(i);
    if(i >= 5){
        continue;
    }
} */


let roastGiven = 0
while(roastGiven <= 10){
    // console.log('bhai amare roast den!');
    roastGiven++;
    if(roastGiven >= 4){
        break
    }
}

let items = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];
for(let i = 0; i < items.length; i++){
    let item = items[i]
    if(item == 'pen'){
        continue;
    }
    console.log(item);
}


let numbers = [45, 29, 90, 100, 200, 399]
for(let i = 0; i<numbers.length; i++){
    // console.log(i);
    let number = numbers[i]
    if(number > 50){
        continue;
    }
    console.log(number);
}