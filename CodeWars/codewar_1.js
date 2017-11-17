class SmallestIntegerFinder {
    findSmallestInt(args) {
        let min = args[0];           
        for(let i = 0; i<=args.length; i++){            
            if(args[i]< min){
                min = args[i];
            }
        }
        return min;
    }
}

var sif = new SmallestIntegerFinder();
//sif.findSmallestInt([78,56,232,12,8]);
sif.findSmallestInt([78,56,232,412,228]);