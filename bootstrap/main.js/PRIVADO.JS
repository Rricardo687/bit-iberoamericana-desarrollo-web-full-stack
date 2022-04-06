           // ESTRUCTURAS DE DATOS DEL BACKEND  //
const validCredentials = {
 username: 'javierprofe',
 password: '1234',
};

                // ESTRUCTURAS DE DATOS //
const username = document.getElementById('inusername');
const password = document.getElementById('inpassword');
const submit = document.getElementById('submitBtn');
const private = document.getElementById('private');
const modal = document.getElementById('staticBackdrop');
const success = document.getElementById('success');
const error = document.getElementById('error');
const close = document.getElementById('closeBtn');

const myCredentials = {
  username: null,
  password: null,
};

                   // FUNCIONES //
const handleUsername = (event) => {
myCredentials.username = event.target.value; 
};

const handlePassword = (event) => {
myCredentials.password = event.target.value;  
};

const handleSubmit = () => {
const username = myCredentials.username === validCredentials.username;
const password = myCredentials.password === validCredentials.password;
  
  if (username && password) {
    
    private.classList.remove('disabled');
   
    success.classList.remove('d-none');

    setTimeout(() => {
      success.classList.add('d-none');
      close.click();
    }, 3000);
  } else {
    
    error.classList.remove('d-none');

    setTimeout(() => {
      error.classList.add('d-none');
    }, 3000);
  }
};

                 //* EVENTOS */
document.addEventListener('DOMContentLoaded', () => {
  username.addEventListener('input', handleUsername);
  password.addEventListener('input', handlePassword);
  submit.addEventListener('click', handleSubmit);
});