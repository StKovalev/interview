function highAndLow(numbers){
    let arr = numbers.split(' ');        
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i<arr.length; i++){
        if(max<parseInt(arr[i])) max=parseInt(arr[i]);
        if(min>parseInt(arr[i])) min=parseInt(arr[i]);                                    
    }
    return(max+' '+min);
}

highAndLow("4 5 -300 29 54 4 0 -214 542 -64 1 -3 6 -6");