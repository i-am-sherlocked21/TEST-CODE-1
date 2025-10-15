let weekDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function getCount(dictionary){
    dictionary.forEach(value => {
        

        //getting the day using built in function
        let day=new Date(value.slice(0,10)).getDay();
        

        // console.log(weekDay[day]);
        
        //getting the score
        let score=parseInt(value.slice(12));
        // console.log(score);
        

        if(!result[weekDay[day]]){
            result[weekDay[day]]=score;
            
        }
        else{
            result[weekDay[day]]+=score;
        }
    });

     let weekDayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    for (let i = 0; i < weekDayNames.length; i++) {
        const day = weekDayNames[i];
        if (!(day in result)) {
            // find closest previous non-null
            let prevIndex = i - 1;
            while (prevIndex >= 0 && !(weekDayNames[prevIndex] in result)) prevIndex--;
            if (prevIndex < 0) prevIndex = i + 1; 

            
            let nextIndex = i + 1;
            while (nextIndex < weekDayNames.length && !(weekDayNames[nextIndex] in result)) nextIndex++;
            if (nextIndex >= weekDayNames.length) nextIndex = i - 1; 

            const prevScore = result[weekDayNames[prevIndex]] ?? 0;
            const nextScore = result[weekDayNames[nextIndex]] ?? 0;

            result[day] = (prevScore + nextScore) / 2;
        }
    }
}


//input
let dictionary=[ 
   "2020-01-01: 4",
    "2020-01-02: 4",
    "2020-01-03: 6",
    "2020-01-04: 8",
    "2020-01-05: 2",
    "2020-01-06: -6",
    "2020-01-07: 2",
    "2020-01-08: -2"
];





let result={};   //to store our answer
getCount(dictionary);

console.log("Result is :")
console.log();
weekDay.forEach(day => {
    console.log(`${day}: ${result[day]}`);
})

