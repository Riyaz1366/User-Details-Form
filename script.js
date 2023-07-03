

document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('form');
    console.log(form);

form.addEventListener('submit',(e)=>{

e.preventDefault()
let first_name= document.querySelector('[placeholder="First Name"]')
let last_name= document.querySelector('[placeholder="Last Name"]')
let email= document.querySelector('[placeholder="Email"]')
let city = document.querySelector('[placeholder="City"]')
let state = document.getElementById("validationTooltip04")

console.log(first_name)
let tr_data = document.createElement('tr');

let first_name_td = document.createElement('td');
first_name_td.innerText = first_name.value
tr_data.append(first_name_td)

let last_name_td = document.createElement('td');
last_name_td.innerText = last_name.value
tr_data.append(last_name_td)

let email_td = document.createElement('td');
email_td.innerText = email.value
tr_data.append(email_td)


let city_td = document.createElement('td');
city_td.innerText = city.value
tr_data.append(city_td)

let state_td = document.createElement('td');
state_td.innerText = state.value
tr_data.append(state_td)

let tbody_data= document.querySelector('tbody');
tbody_data.append(tr_data);

form.reset();

})
});
