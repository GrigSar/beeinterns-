

function saveValues() {
    const myCookies = {};
     myCookies["_user"] = document.getElementById("user").value;
     myCookies["_age"] = document.getElementById("age").value;
     myCookies["_city"] =  document.getElementById("city").value;

    document.cookie = JSON.stringify(myCookies);


}
const data = JSON.parse(document.cookie);
if (data){
    if (data["_user"])document.getElementById("user").value = data["_user"];
    if (data["_age"])document.getElementById("age").value = data["_age"];
    if (data["_city"])document.getElementById("city").value = data["_city"];
}


