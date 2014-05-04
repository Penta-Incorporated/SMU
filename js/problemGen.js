/*Takes the persons elo
start at 1000 elo
10 problem mode 50 problem mode and so on
so percentage of problems solved would have 50 subtracted from it 
and anything below a 50 would make you lose elo anything above would make you gain elo
we would have a 50 multiplier on it*/

//Code:
var createProblem = function(elo){

    var problem;
    var operationArray = ['+','-','*','/'];
    var count = new Array();
    var operation = new Array();
    var modifier = Math.floor(elo/400);
    
    if(modifier > 3 ){
        modifier = 3;
    }
    for(var q = 0; q < modifier; q++){
        
        count[q] = Math.floor(Math.random()*(elo/10))+1;
        
    }//Create the numbers
    modifier = Math.floor(elo/600);
    if(modifier > 2 ){
        modifier = 2;
    }
    for(var q = 0; q < modifier; q++){
        var y = 0;
        if(count[q]%10 === 0){
            y = 4;
        }
        else{
            y = 2;
        }
         operation[q] = operationArray[Math.floor(Math.random()*y)];
         if(operation[q] === "*" || operation[q] === "/"){
             count[q+1] = Math.floor(Math.random()*10)+2;
         }
         if(operation[q] === "/"){
             var temp = count[q-1]/count[q+1];
             while(temp !== Math.round(temp)){
                 count[q+1] = Math.floor(Math.random()*10);
                 temp = count[q-1]/count[q+1];
             }
         }
     
    }//Create the operation
    for(var q = 0; q < operation.length+1; q++){
        if(q === 0){
           problem = count[q];
        }
        else{
            problem += count[q];
        }
        if(q > operation.length-1){
        }
        else{
            problem += operation[q];
        }
        
    }//Add the operation and the number together
    return problem;
    
}
