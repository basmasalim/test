var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var signUpArray;

if (localStorage.getItem("signup") !== null) {
    try {
        signUpArray = JSON.parse(localStorage.getItem("signup"));
        if (!Array.isArray(signUpArray)) {
            signUpArray = [];
        }
    } catch (e) {
        signUpArray = [];
    }
} else {
    signUpArray = [];
}

// --------------------------signup-------------------------

function signup() {
    if (checkIsEmptySignUp() && !isExist() && validateAllFields()) {
        var user = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value,
        };
        signUpArray.push(user);
        localStorage.setItem('signup', JSON.stringify(signUpArray));
        displaySucces();
        clrinput();

        signupName.classList.remove("is-valid");
        signupEmail.classList.remove("is-valid");
        signupPassword.classList.remove("is-valid");
    } else {
        displayrequired();
    }
}

function Validation(ele) {
    var flag = false;

    var Regex = {
        signupName: /^[A-Za-z].{3,30}$/,
        signupEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        signupPassword: /^.{5,20}$/,
    };

    if (Regex[ele.id].test(ele.value)) {
        flag = true;
        ele.classList.add('is-valid');
        ele.classList.remove('is-invalid');
        return true;
    } else {
        ele.classList.add('is-invalid');
        ele.classList.remove('is-valid');
        return false;
    }
}

function validateAllFields() {
    return Validation(signupName) && Validation(signupEmail) && Validation(signupPassword);
}

// --------------------------signin-------------------------

function login() {
    if (signinEmail.value === '' || signinPassword.value === '') {
        signinEmail.classList.add("is-invalid");
        signinPassword.classList.add("is-invalid");
        displayrequired();
    } else {
        var found = false;
        for (var i = 0; i < signUpArray.length; i++) {
            if (signinEmail.value === signUpArray[i].email && signinPassword.value === signUpArray[i].password) {
                localStorage.setItem('currentUser', JSON.stringify(signUpArray[i].name));
                window.location = "../home.html";
                found = true;
                break;
            }
        }
        if (!found) {
            displayincorrect();
        }
    }
}

function displayExist() {
    document.getElementById("messageImpty").innerHTML = '<span class="text-white ">the mail is already</span>';
}

function displaySucces() {
    document.getElementById("messageImpty").innerHTML = '<span class="text-white ">Succes</span>';
}

function displayrequired() {
    document.getElementById("messageImpty").innerHTML = '<span class="text-white ">All inputs required</span>';
}

function displayincorrect() {
    document.getElementById("message").innerHTML = '<span class="text-white">incorrect email or password</span>';
}

function isExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email === signupEmail.value) {
            console.log("this user is already exist");
            displayExist();
            return true;
        }
    }
    return false;
}

function checkIsEmptySignUp() {
    if (signupName.value === '' || signupEmail.value === '' || signupPassword.value === '') {
        return false;
    } else {
        return true;
    }
}

function clrinput() {
    signupName.value = '';
    signupEmail.value = '';
    signupPassword.value = '';
}
