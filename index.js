const daysElement= document.querySelector(".days");
const hoursElement= document.querySelector(".hours");
const minutesElement= document.querySelector(".minutes");
const secondsElement= document.querySelector(".seconds");
const heading= document.querySelector("h1");
const counterTimer= document.querySelector(".counterTimer");

// we changed everything into milliseconds
const second= 1000;
const minute= 60*second;
const hour= 60*minute;
const day= 24*hour;

const timerFunction= ()=>{

   let now= new Date(),
   dd= now.getDate(),
   mm= now.getMonth()+1,
   yyyy= now.getFullYear();

   const enteredDay= prompt("Enter Date");
   const enteredMonth= prompt("Enter Month");
   if (enteredDay<1 || enteredDay>31 || enteredDay=="" || enteredMonth<1 || enteredMonth>31 || enteredMonth=="") {
      alert("Please provide valid date!") ;
      return;
   }

      now= `${mm}/${dd}/${yyyy}` ;
      let targetDate= `${enteredMonth}/${enteredDay}/${yyyy}`;
  
     if(now> targetDate){
        targetDate= `${enteredMonth}/${enteredDay}/${yyyy+1}`; ;
     }

    const interval = setInterval(() => {
    const timer= new Date(targetDate).getTime();  // we will get time in milliseconds of this date
    const today= new Date().getTime();  // current date

    const difference= timer-today ; // diff btw today and birthday date
    const leftday= Math.floor(difference/day);
    const lefthour= Math.floor((difference % day)/hour);
    const leftmin= Math.floor((difference % hour)/minute);
    const leftsec= Math.floor((difference % minute)/second);

    daysElement.innerText= leftday ;
    hoursElement.innerText= lefthour ;
    minutesElement.innerText= leftmin ;
    secondsElement.innerText= leftsec ;

   // console.log(`${leftday}:${lefthour}:${leftmin}:${leftsec}`);

    if (difference<0) {
      counterTimer.style.display= "none";
      heading.innerText= "Happy Birthday to You" ;
      clearInterval(interval);
    }

   }, 0); 
};
 timerFunction() ;