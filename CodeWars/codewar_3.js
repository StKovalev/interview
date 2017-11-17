function dontGiveMeFive(start, end)
{
    let count=[];
    let exp = /[5]/;
    for(let i = start; i<=end; i++){                                               
        if(!exp.test(i) ){
            count.push(i);
        }                                                                
    }   
    console.log('c', count);
    console.log('c', count.length);
    return(count.length);
}

//dontGiveMeFive(4,17);
//dontGiveMeFive(54,55);
dontGiveMeFive(1,9);
