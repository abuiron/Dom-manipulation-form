let myform = document.getElementById("form");

myform.addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let foods = document.querySelectorAll('input[name="food"]:checked');
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;

    
    let foodChoices = [];
    foods.forEach((food)=> {
        foodChoices.push(food.value);
    });
    

    if(foodChoices.length>=3)
    {
       
    var table = document.getElementById("tableBody");
    var newRow = table.insertRow();
    newRow.innerHTML = "<td>" + firstName + "</td>" +
                       "<td>" + lastName + "</td>" +
                       "<td>" + address + "</td>" +
                       "<td>" + pincode + "</td>" +
                       "<td>" + gender + "</td>" +
                       "<td>" + foodChoices.join(", ") + "</td>" +
                       "<td>" + state + "</td>" +
                       "<td>" + country + "</td>";

    document.getElementById("form").reset();

    }
    else
    {

        alert(`Select food atleast 3`);
    }
});