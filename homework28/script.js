function get(url) {
    axios.get(url)
        .then(resp => {
            resp
        })
        .catch(er => {
            f = console.log(er)
        });
}

const fetchStart = () => {
    fetch('/serviceavailable/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Request-With': 'XMLHttpRequest',
        },
    })
        .then(resp => resp.json())
        .then(respFormatted => {
            if (!respFormatted.isSuccess) {
                document.getElementsByClassName('error')[0].style.display = 'block';
            }

            getText()
        })
        .catch(error => {
            document.getElementsByClassName('error')[0].style.display = 'block'
        })
};

function getText() {
    let url1 = axios.get('/getinfo/');
    let url2 = axios.get('/getdescription/');
    Promise.all([url1, url2]).then(resp=>{
        resp.forEach(function (data) {
            if (data.data.isSucceeded && data.data.type == 'text'){
                document.getElementsByClassName('text')[0].innerHTML = data.data.text;
                document.getElementsByClassName('text')[0].style.display = 'block'
            }
            if (data.data.isSucceeded && data.data.type == 'description'){
                document.getElementsByClassName('desc')[0].innerHTML = data.data.description;
                document.getElementsByClassName('desc')[0].style.display = 'block'
            }
        });
        console.log(resp.some(elem.data.isSucceeded == true))
        if (!resp[0].data.isSucceeded && !resp[1].data.isSucceeded ){
            console.log('Server Error')
        }

    }).catch(error=> console.log('Server Error'))
}
