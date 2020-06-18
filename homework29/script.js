function saveValues() {
    let obj = {
        user:document.getElementById("user").value,
        age: document.getElementById("age").value,
        city: document.getElementById("city").value
    };
    localStorage._data = JSON.stringify(obj)
}

if(localStorage._data){
    let data = JSON.parse(localStorage._data);
    if (data.user) document.getElementById("user").value = data.user;
    if (data.age) document.getElementById("age").value = data.age;
    if (data.city)  document.getElementById("city").value = data.city;
}


