const btnSignUp = document.getElementById('btnSignUp');
const btnLogin = document.getElementById('btnLogin')
const formSignUp = document.getElementById('SignupForm');
const formLogin = document.getElementById('loginForm');
const viewLogin = document.querySelector('.Link');
const viewSignUp = document.getElementById('loginLink') 
formSignUp.style.display = 'none'

viewSignUp.addEventListener('click',()=>{
    formSignUp.style.display = 'none'
    formLogin.style.display = 'block'
})

viewLogin.addEventListener('click', () => {
    
    console.log('hi');
    formSignUp.style.display = 'block'
    formLogin.style.display = 'none'
})




const loginForm = async(e) => {
    
    e.preventDefault();
    const username = document.getElementById('txtLogin').value.trim();
    const password = document.getElementById('txtPassword').value.trim();
    
    
    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ password, username }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            document.location.replace('/');
            
        } else {
            alert("fail")
        }
    }
}
const SignupForm = async(e)=>{
    e.preventDefault();
    
    const username = document.getElementById('txtSignUp').value.trim();
    const password = document.getElementById('txtSignupPassword').value.trim();
    console.log(username, password);
    if(username && password){
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ password, username }),
            headers:{'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/login');
        }else{  
            alert('fail')
        }
        
    }
    
    
}


btnLogin.addEventListener('click',loginForm)
btnSignUp.addEventListener('click',SignupForm)









