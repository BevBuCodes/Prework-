let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/beautiful-beach.jpg') {
        myImage.setAttribute('src', 'images/beautiful-beach2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/beautiful-beach.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `This resort is your happy place, ${myName}`;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'This resort is your happy place, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}



