import throttle from 'lodash.throttle' 

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}

const STORAGE_KEYFORM = "feedback-form-state";
const valuesOfForm = {
    email: '',
    message: '',
};

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onSubmit);

lastInputMassage()

function onInput(e) {

    valuesOfForm.email = refs.email.value
    valuesOfForm.message = refs.textarea.value
    localStorage.setItem(STORAGE_KEYFORM, JSON.stringify(valuesOfForm));
    
};


function lastInputMassage(e) {
    const saveMassageString = localStorage.getItem(STORAGE_KEYFORM);
    const saveMassageArray = JSON.parse(saveMassageString);

    if (saveMassageString) {
        refs.email.value = saveMassageArray.email;
        refs.textarea.value = saveMassageArray.message;
    }
}


function onSubmit(e) { 
    e.preventDefault();
    e.currentTarget.reset();
    console.log(valuesOfForm);
    localStorage.removeItem(STORAGE_KEYFORM);
};





