//не решен

function persistence(num) {        
    function rec(num, count){
        let arr_num = String(num);    
        if(arr_num.length > 1){
            let pro = 1;    
            for(let i = 0; i<arr_num.length; i++){
                pro = pro * arr_num[i];
            }
            count++;            

            console.log(pro);   
            console.log(count);
            rec(pro,count);       
        }
        return(count);                
    }    

    let count = 0;

    count = rec(num, count);

    console.log(count);        
 }

 //persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
 // and 4 has only one digit

 persistence(39)

 