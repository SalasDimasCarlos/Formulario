function saluda(){
  console.log('Hola que tal todo');
}


// Obtener input Username
let input = document.getElementById('username');
let signButton = document.getElementById('signup');

// Se agrega el evento onFocus
input.addEventListener('focus',saluda);
input.addEventListener('blur',function() {
  console.log('Me sali del input');
  console.log(this.value); // Puede servir para validar
});

signButton.addEventListener('click',function() {
  console.log(this); // Imprime todo
  console.log(this.innerHTML); // Imprime el texto que hay en el html
});
