window.onload = function(){

	const sideBar = document.querySelector('.side-bar');
	const sideBarA = sideBar.querySelectorAll('a');

	for(let i =0; i<sideBarA.length; i++){
		sideBarA[i].addEventListener("click",function(e){
			const sideBarAActive = sideBar.querySelector('a.active');
			sideBarAActive.classList.remove('active');
			this.classList.add('active');
			const dataFilter = e.target.getAttribute('data-filter');
			const dataFilterDivActive = document.querySelector('.filter-data.active');
			dataFilterDivActive.classList.remove('active');
			document.querySelector('.'+dataFilter).classList.add('active');
		});
	}
	const remainderAddForm = document.querySelector('.remainder-add-form');

	//form submit
	remainderAddForm.onsubmit = e=>{
		e.preventDefault();

		//variables for this form
		const remainder = e.target.remainderAdd.value;
		const remainderDate = e.target.remainderAddDate.value;
		const remainderTime = e.target.remainderAddTime.value;

		if(remainder == '' || remainderDate == '' || remainderTime == ''){
			window.location.reload();
			alert("please fill out empty fields");
		}else{
			let remainders = [];
			const loginedUser = localStorage.getItem("loginUser");
			if(JSON.parse(loginedUser) == null ){
				remainders = [];
				alert('please login first');
				window.location.replace('../pages/login.html');
			}else{
				if(localStorage.getItem('userRemainders') === null){
					const loginedUserParsed = JSON.parse(loginedUser);	
					remainders.push({'id':loginedUserParsed[0].id,'remainder':remainder,'date':remainderDate,'time':remainderTime});
					localStorage.setItem('userRemainders',JSON.stringify(remainders));
					alert('now your remainder is set and now you can view that remainder in reminders record');
					window.location.reload();
				}else{
					const userRemainders = JSON.parse(localStorage.getItem('userRemainders'));
					userRemainders.map(Remainder =>{
						remainders.push(Remainder);
					});
					const loginedUserParsed = JSON.parse(loginedUser);	
					remainders.push({'id':loginedUserParsed[0].id,'remainder':remainder,'date':remainderDate,'time':remainderTime});
					localStorage.setItem('userRemainders',JSON.stringify(remainders));
					alert('now your remainder is set and now you can view that remainder in reminders record');
					window.location.reload();
				}
				
			}
			
		}
	}

	//today remainders
	const dt = new Date();
	let month = dt.getMonth()+1;
	if(month < 10){
		month = '0'+month;
	}
	const fulldate = dt.getFullYear()+'-'+month+'-'+dt.getDate();
	const todayRemainders = document.querySelector('div.today');
	const remaindersRecord = document.querySelector('div.record');
	console.log(remaindersRecord);
	const loginedUser = localStorage.getItem("loginUser");
		let todayRemaindersList = [];
		let remaindersRecordList = [];
	if(JSON.parse(loginedUser) != null ){
				const loginedUser = localStorage.getItem("loginUser");
					const loginedUserParsed = JSON.parse(loginedUser);
					const userRemainders = JSON.parse(localStorage.getItem('userRemainders'));
					userRemainders.map(Remainder =>{
						if(loginedUserParsed[0].id == Remainder.id && Remainder.date == fulldate){
							todayRemaindersList.push(Remainder);
						}
					});
					userRemainders.map(Remainder =>{
						if(loginedUserParsed[0].id == Remainder.id ){
							remaindersRecordList.push(Remainder);
						}
					});
				let todayRemaindersTable = todayRemainders.querySelector('table');
				let remaindersRecordTable = remaindersRecord.querySelector('table');
				let tr = [];
				let tr2 = [];
				let i=1;
				tr += '<tr><th>Id</th><th>Remainder</th><th>Date</th><th>Time</th></tr>';
				tr2 += '<tr><th>Id</th><th>Remainder</th><th>Date</th><th>Time</th></tr>';
				todayRemaindersList.map(list=>{
					tr+='<tr><td>'+i+'</td>',
							tr += '<td>'+list.remainder+'</td>',
							tr += '<td>'+list.date+'</td>',
							tr += '<td>'+list.time+'</td></tr>';
							i++;
				});
				i =1;
				remaindersRecordList.map(list=>{
					tr2+='<tr><td>'+i+'</td>',
							tr2 += '<td>'+list.remainder+'</td>',
							tr2 += '<td>'+list.date+'</td>',
							tr2 += '<td>'+list.time+'</td></tr>';
							i++;
				});
				if(todayRemaindersList.length == 0){
					tr = [];
					tr += '<tr><th>Id</th><th>Remainder</th><th>Date</th><th>Time</th></tr>';
					tr += '<tr><th colspan="4">No remainders found</th></tr>';
				}
				if(remaindersRecordList.length == 0){
					tr2 = [];
					tr2 += '<tr><th>Id</th><th>Remainder</th><th>Date</th><th>Time</th></tr>';
					tr2 += '<tr><th colspan="4">No remainders found</th></tr>';
				}
				todayRemaindersTable.innerHTML = tr;
				remaindersRecordTable.innerHTML = tr2;
			}else{

					todayRemaindersList = [];
					alert('please login first');
					window.location.replace('../pages/login.html');
			}

				
}