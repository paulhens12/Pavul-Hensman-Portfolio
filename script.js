console.log('hello')

let text = document.querySelectorAll('.content-copy');
let allButtons = document.querySelectorAll('.button-copy');
let sucess = document.querySelectorAll('.sucess');
console.log(sucess);

for(i=0; i<allButtons.length; i++){
    let button = allButtons[i];
    let requiredText = text[i];
    let sucessMsg = sucess[i];
    button.addEventListener('click', function(){
    
        let newtext = requiredText.innerHTML;
    
        let inputElement = document.createElement('input');
        inputElement.setAttribute('value', newtext);
        document.body.appendChild(inputElement);
        inputElement.select();
        document.execCommand('copy');
        inputElement.parentNode.removeChild(inputElement);
        
        sucessMsg.classList.add('active');
        setTimeout(function(){
            sucessMsg.classList.remove('active')
        },2000)
    
    });
}


let hireMe = document.querySelector('.hire-me-button');
let closeHire = document.querySelector('.close-button');
let popUp = document.querySelector('.popup')

hireMe.addEventListener('click', function(){
    popUp.style.display = 'block'

})


closeHire.addEventListener('click', function(){
    popUp.style.display = 'none';
})

let popUpCopy = document.querySelector('.copied');
let popUpCopyButton = document.querySelectorAll('.copy-buttons')
let textCopy = document.querySelectorAll('.contents-copy')

// let button1 = document.querySelector('.button1')
// console.log(button1)

// button1.addEventListener('click', function(){
//     popUpCopy.classList.add('active');
// })
console.log(popUpCopyButton);
console.log(textCopy);

for(i=0; i<popUpCopyButton.length; i++){
    let copies = popUpCopyButton[i];
    let textRequired = textCopy[i].innerHTML;

    copies.addEventListener('click', function(){
        
    })

    copies.addEventListener('click', function(){

        let newInput = document.createElement('input');
        newInput.setAttribute('value', textRequired);
        document.body.appendChild(newInput);
        newInput.select();
        document.execCommand('copy');

        newInput.parentNode.removeChild(newInput);

        popUpCopy.classList.add('active');

        setTimeout(function(){
            popUpCopy.classList.remove('active');
        },2000)
    })
}

let sendEmail = document.querySelector('.email-form');

sendEmail.addEventListener('submit', function(){

    var params = {
        from_name : document.querySelector('.yourName').value,
        contact_number : document.querySelector('.contactNumber').value,
        email_id : document.querySelector('.emailId').value,
        message : document.querySelector('.message').value
    }

    console.log(params.from_name)
    emailjs.send('service_jpzro37', 'template_li07gbw', params)

    alert('Message Send Sucessfully!');
    


    document.querySelector('.yourName').value = '';
    document.querySelector('.contactNumber').value = '';
    document.querySelector('.emailId').value = '';
    document.querySelector('.message').value = '';
})


let menuBarOpen = document.querySelector('.menu-bar');
let navBar = document.querySelector('.nav-bar');


menuBarOpen.addEventListener('click', function(){
    navBar.classList.toggle('active');
})

let navBarItems = document.querySelectorAll('.nav-item');
console.log(navBarItems);

for(i=0; i<navBarItems.length; i++){
    let navItem = navBarItems[i];
    navItem.addEventListener('click', function(){
        navBar.classList.remove('active');
    })
}


