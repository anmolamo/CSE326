window.onload = function(){
	const registerUser = document.querySelector('.register-user');

			
	//on form submit
	registerUser.onsubmit = (e)=>{
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		let pass = e.target.password.value;
		let confirmPass = e.target.confirmPassword.value;

		if(name == '' || email == '' || pass == '' || confirmPass == '' ){
			alert('Please fill out empty fields');
		}
		else if(pass != confirmPass){
			e.target.password.value = '';
			e.target.confirmPassword.value = '';
			alert('both passwords are not matching');
		}else{

			// working with object array
			let registerUsers = [	
						 		{
						 			'id':1,
						 			'name':name,
						 			'email':email,
						 			'pass':pass
						 		},
							];
			if (typeof(Storage) !== "undefined") {
				if (localStorage.getItem("registerUsers") === null) {
					localStorage.setItem("registerUsers" , JSON.stringify(registerUsers));
					alert('you are registered successfully and you can login now');
					window.location.href = '../pages/login.html';
				}else{
			  		let storageUsers = localStorage.getItem("registerUsers");
			  		registerUsers = [];
			  		JSON.parse(storageUsers).map(user =>{
						if(user.email == email){
							registerUsers = [];
						}else{
							registerUsers.push(user);
						}
			  		});
			  		if(registerUsers.length == 0){
						window.location.reload();
						alert("this email is already registered");
			  		}else{
						registerUsers.push({'id':Math.random()*100,"name":name,"email":email,"pass":pass} );
						localStorage.setItem("registerUsers",JSON.stringify(registerUsers));
						alert('you are registered successfully and you can login now');
						window.location.replace('../pages/login.html');}
					}
			} else {
			  	alert("Sorry, your browser does not support Web(Local) Storage...");
				window.location.reload();
			}
		}
	}
}