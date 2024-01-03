const form = document.getElementById('contact-form');
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
const telInput = document.querySelector('#tel');
const addressInput = document.querySelector('#address');
const subjectInput = document.querySelector('#subject');
const msgInput = document.querySelector('#msg');
const feedbackDiv = document.createElement('div');
const inputs = document.querySelectorAll('.finput')

document.body.append(feedbackDiv)

function validation () {
    for (var i = 0; i <inputs.length; i++) {
        if (inputs[i].value === '') {
            feedbackDiv.innerHTML="Tous champs doivent être remplis";
            return false;
        }
    }  
    feedbackDiv.innerHTML = "Le contenu est valide";
    return true;
}
form.addEventListener('submit', (e) => {
     e.preventDefault();
     validation(inputs.value)

})

//     for (var i = 0; i <inputs.length; i++) {
//         if (inputs[i].value === '') {
//             feedbackDiv.innerHTML="Tous champs doivent être remplis";
//             return false;
//         }
//     }  
//     feedbackDiv.innerHTML = "Le contenu est valide";
//     return true;

// })
// form.addEventListener('submit', (e) => {
//  e.preventDefault();
// //     addafter(inputs.value)






//     if (lnameInput.value == "") {
//         feedbackDiv.innerHTML = "Le champ ne doit pas être vide";
//         lnameInput.after(feedbackDiv);
//     } else {
//         feedbackDiv.innerHTML = "Le contenu est valide";
//         lnameInput.after(feedbackDiv);
//     }

//     if (fnameInput.value == "") {
//         feedbackDiv.innerHTML = "Le champ ne doit pas être vide";
//         fnameInput.after(feedbackDiv);
//     } else {
//         feedbackDiv.innerHTML = "Le contenu est valide";
//         fnameInput.after(feedbackDiv);
//     }

//     if (telInput.value == "") {
//         feedbackDiv.innerHTML = "Le champ ne doit pas être vide";
//         telInput.after(feedbackDiv);
//     } else {
//         feedbackDiv.innerHTML = "Le contenu est valide";
//         telInput.after(feedbackDiv);
//     }
//     if (addressInput.value == "") {
//         feedbackDiv.innerHTML = "Le champ ne doit pas être vide";
//         addressInput.after(feedbackDiv);
//     } else {
//         feedbackDiv.innerHTML = "Le contenu est valide";
//         addressInput.after(feedbackDiv);
//     }

//     if (subjectInput.value == "") {
//         feedbackDiv.innerHTML = "Le champ ne doit pas être vide";
//         subjectInput.after(feedbackDiv);
//     } else {
//         feedbackDiv.innerHTML = "Le contenu est valide";
//         subjectInput.after(feedbackDiv);
//     }

//     if (msgInput.value == "") {
//         feedbackDiv.innerHTML = "Le champ ne doit pas être vide";
//         msgInput.after(feedbackDiv);
//     } else {
//         feedbackDiv.innerHTML = "Le contenu est valide";
//         msgInput.after(feedbackDiv);
//     }
// })

// function addafter(el) {
//     if (el.length<=0) {
//         console.log('no');
//         feedbackDiv.innerHTML="Tous champs doivent être remplis";
//     } else {
//         console.log('ok');
//         feedbackDiv.innerHTML="Le contenu est valide"; 
//     }
// }

// inputs.forEach(element => {
//     form.addEventListener('submit', (e)=>{
//         e.preventDefault()
//         addafter(element.value)
//     })
// });
    
// form.addEventListener('submit', ()=>addafter(msgInput.value))
