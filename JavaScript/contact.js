submitForm = (event) => {
    event.preventDefault();
    let formName = $("#userName")[0].value;
    let formEmail = $("#userEmail")[0].value;
    let formMessage = $("#userMessage")[0].value;
    console.log(formName);
    console.log(formEmail);
    console.log(formMessage);
};