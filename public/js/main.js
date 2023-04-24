// const { json } = require("sequelize");

const NavHome = document.getElementById('Navhome');
const NavDashboard = document.getElementById('NavDashboard');


NavDashboard.addEventListener('click',(e)=>{
 
    e.preventDefault();
    window.location.replace('/dashboard')
})

NavHome.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.replace('/')
})

const logout = async () => {
    const response = await fetch('http://localhost:3001/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

 document.querySelector('#NavLogout').addEventListener('click', logout);