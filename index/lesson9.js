//example of switch case

const day =0;
const dayOfTheWeek=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let currDay;


for (x=0;x<7;x++){
    if(x==`${day}`){
        currDay=`${dayOfTheWeek[x]}`;
    }
}

/*

switch(day){
    case 0:
        currDay=`${dayOfTheWeek[0]}`;
        break;
    case 1:
        currDay=`${dayOfTheWeek[1]}`;    
        break;
    case 2:
        currDay=`${dayOfTheWeek[2]}`;    
        break;    
    case 3:
        currDay=`${dayOfTheWeek[3]}`;        
        break;              
    case 4:
        currDay=`${dayOfTheWeek[4]}`;
        break;
    case 5:
        currDay=`${dayOfTheWeek[5]}`;     
        break;
    case 6:
        currDay=`${dayOfTheWeek[6]}`;    
        break;
     default:
            console.log("invalid data");                                   
            
}
*/


//To test multiple conditions using switch case
//example to check whether weekday or not


console.log(" ");
console.log("To Test Multiple conditions with switch cases");

switch(day){
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
            console.log(`${currDay} is a Weekday`);
            break;
    case 5:
    case 6:
            console.log(`${currDay} is a Weekend`);
            break;
     default:
            console.log("invalid data");                                   
            
}


    