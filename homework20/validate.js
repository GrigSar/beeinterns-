function validate(data) {

    const {login, password, confirmPassword, license, firstName, gender } = data;
    let loginNameDb = [
        'beeline',
        'beeinterns',
        'bee'
    ];
        for (let i=0;i<loginNameDb.length; i++){
        if (login === loginNameDb[i]){
            return alert('Логин занят')
        }
    }
    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (firstName === '') {
        alert('Укажите имя')
    } else if (!license) {
        alert('Необходимо согласие');
    }else if (parseInt(gender) === 1){
        alert(`Уважаемый ${firstName}, заявка создана`)
    } else {
        alert(`Уважаемая ${firstName}, заявка создана`);
    }
}
