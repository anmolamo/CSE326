window.addEventListener("click",function(){
	const loginUser = document.getElementsByClassName('login-user')[0];

	//on form  submit
	loginUser.onsubmit = function(e){
		e.preventDefault();
		//grabing behavior
		const email = e.target.email.value;
		const pass = e.target.password.value;

		if(email == '' || pass == ''){
			window.location.reload();
			alert('Please fill out empty fields');
		}else{
			let login = false;
			const registeredUsers = JSON.parse(localStorage.getItem("registerUsers"));
			let loginUser = [];
			registeredUsers.map(user =>{
				if(user.email == email){
					loginUser = [];
					loginUser.push(user);
				}
			});
			if(loginUser.length == 0){
				window.location.reload();
				alert('Please Register first');
				alert("you are redirecting to register page");
				window.location.replace('../pages/register.html');
			}else{
				if(loginUser[0].pass == pass){
						const loginusers = localStorage.getItem("loginUser");
						localStorage.setItem("loginUser",JSON.stringify(loginUser));
						alert('you are logined');
						window.location.replace('../index.html');
				}else{
					e.target.password.value = '';
					alert('sorry! your password is wrong');
				}
			}
		}
	};
});