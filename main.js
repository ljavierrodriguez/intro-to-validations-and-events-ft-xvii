let link = document.querySelector('a');

link.addEventListener('click', (evento) => {
    evento.preventDefault();

    alert('Hola')

    console.log('Sigo aqui')
})


let form = document.getElementById('searchForm');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    /* let search = document.getElementById('search');
    console.log(search.value); */
    //console.log(evento.target);

    //let { search } = form;
    let { search } = evento.target;

    //console.log(search.value);


    let regexOnlyNumber = /^[0-9]+$/;
    let rgxOnlyLetter = /^[a-zA-Z]+$/;
    let rgxValidUsername = /^[a-zA-Z0-9|ñ|Ñ]+$/;



    if (search.value === '') {
        //alert('Debe ingresar numero telefonico a buscar');
        search.classList.add('is-invalid');
    } else if (!rgxValidUsername.test(search.value)) {
        //alert('Debe ingresar un nombre de usuario valido');
        search.classList.add('is-invalid');
    } else {
        search.classList.remove('is-invalid');
        search.classList.add('is-valid');
    }


})



let loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let errors = {}

    let rgxValidPassword = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    let userFeedback = document.querySelector('#userFeedback');
    let passFeedback = document.querySelector('#passFeedback');

    let { username, password } = evento.target;

    if (username.value === '') {
        errors['username'] = 'Username no puede estar vacio';
        username.classList.add('is-invalid');
    } else {
        username.classList.remove('is-invalid');
        delete errors['username'];
    }

    if (password.value === '') {
        errors['password'] = 'Password no puede estar vacio';
        password.classList.add('is-invalid');
    } else if (!rgxValidPassword.test(password.value)) {
        errors['password'] = 'Password debe contener mayuscula, minusculas, numeros y un minimo de 8 caracteres';
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
        delete errors['password'];
    }


    if (errors['username'] || errors['password']) {
        console.log(errors);
        if (errors['username']) userFeedback.innerHTML = errors['username'];
        if (errors['password']) passFeedback.innerHTML = errors['password'];
    } else {
        evento.target.submit();
    }

});