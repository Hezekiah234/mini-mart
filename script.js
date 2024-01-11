// var allStudents=['Gideon','Moses', 'Obaraka', 'Agba awo','Kekere ekun','Akuru yejo']
// console.log(allStudents);
// var food = ['Rice', 'Bean', 'Water','Yam', 'Bread']
// console.log(food[2]);
// to know item in array
// console.log(food.length);
// food.length
// food.pop()
// food.shift()
// food.push('fanta')
// food.unshift('noodles')
// console.log(food);
cart = []
console.log(cart);
function addItems() {
 if (inp.value !=='') {
  console.log(inp.value);
  cart.push(inp.value)
  displayCART()
  document.getElementById('inp').value=''

 }else {
  alert ('Fill empty space')
  }
 }

function addTO(){
 if (inp.value !=='') {
  console.log(inp.value);
  cart.unshift(inp.value)
  displayCART()
  document.getElementById('inp').value=''
 }else {
  alert ('Fill empty space')
 }
}
function deleteFIRST() {
  cart.shift(inp.value)
  displayCART() 
}

function deleteLAST() {
 cart.pop(inp.value)
 displayCART() 
}

function deleteANY() {

 var any = Number(prompt([cart.length]))
 cart.splice(any-1,1)
 displayCART() 
}
function deleteALL() {
 cart.splice(inp.value)
 displayCART() 
}
function edit() {
 var any = (prompt([cart.length]))
 var show = (prompt([inp.value]))
 cart.splice(any-1, 1, show )
 // .indexof(show)
 displayCART() 
}

function displayCART() {
 show.innerHTML = ""
 for (i=0; i<cart.length; i++) {
  show.innerHTML += 
  `<table style="border: none solid grey;"> 
  <td>  ${i+1}. ${cart[i]}</td>
  </table>`

 }
}