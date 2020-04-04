//user status
const userStatus = document.querySelector('.userstatus');
const userStatusSpan = userStatus.querySelector('span');
const userStatusLoginBtn = userStatus.querySelector('.login');
const userStatusRegisterBtn = userStatus.querySelector('.register');
const loginedUser = JSON.parse(localStorage.getItem("loginUser"));

if( loginedUser != null){
	userStatusSpan.textContent = loginedUser[0].name;
	userStatusLoginBtn.style.display = 'none';
	userStatusRegisterBtn.style.display = 'none';
	const a = document.createElement('a');
	a.textContent = 'Logout';
	a.classList.add('logout');
	a.href = "#";
	userStatus.append(a);

const logout = userStatus.querySelector('.logout');

logout.addEventListener("click",function(){
	localStorage.setItem("loginUser" , null);
	window.location.reload();
});
}


console.log(loginedUser);