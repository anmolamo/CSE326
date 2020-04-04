window.onload = Calender;
//calender
const calender = document.querySelector('.calender');
const calenderHeader  = calender.querySelector('.header');
const calenderHeaderDate = calenderHeader.querySelector('.date');
const calenderHeaderDateMonth = calenderHeaderDate.querySelector('.month');
const calenderHeaderDateDay = calenderHeaderDate.querySelector('.dayanddate');
let dates = calender.querySelector('.dates');
//calender dates onload
let dt = new Date();
function Calender(){
dt.setDate(1);
let today = new Date();
let day = dt.getDay();
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]


	// assigning month in header there
	calenderHeaderDateMonth.innerHTML = months[dt.getMonth()];
	calenderHeaderDateDay.innerHTML = dt.toDateString();


	let datesCells = [];
	var thisMonthDays = new Date(dt.getFullYear(),dt.getMonth() +1,0).getDate();
	var prevMonthDays = new Date(dt.getFullYear(),dt.getMonth(),0).getDate();
	
	for(let x=day; x>0; x--){
		datesCells.push("<p class='prevDate'>" + (prevMonthDays - x + 1) + "</p>");	
	}
	for(let i=1; i<=thisMonthDays; i++){
		if(today.getDate() == i &&  dt.getMonth() ==today.getMonth() && dt.getFullYear() == today.getFullYear()){
			datesCells.push( '<p class="active">'+i+'</p>');
		}
		else{
			datesCells.push('<p>'+i+'</p>');
		}
		
	}
	let nextDays = (7*Math.ceil((datesCells.length)/7)) -datesCells.length ;
	for(let x=1; x<=nextDays; x++){
		datesCells.push("<p class='nextDate'>" + x + "</p>");	
	}
	let datesFinal = ''; 
	for(let i=0; i<thisMonthDays+day+nextDays; i++){
		datesFinal += datesCells[i];
	}

	dates.innerHTML = datesFinal;

}
// increment decrement date 
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
//increment
next.addEventListener("click",function(){
	dt.setMonth(dt.getMonth() +1);
	Calender();
});
prev.addEventListener("click",function(){
	dt.setMonth(dt.getMonth() -1);
	Calender();
});