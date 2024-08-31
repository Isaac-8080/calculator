document.addEventListener('DOMContentLoaded', () => {

let display = document.querySelector('#display'); //get display input

const results = document.querySelector('#results'); //get results container

let keys = document.querySelectorAll('.keys'); //get key buttons

for (let i = 0; i < keys.length; i++) {

  const getEachKey = keys[i]; //get each key

  getEachKey.addEventListener('click', () => {
    
    const getKeyTextContent = getEachKey.textContent; //get each key's text content

    // display.value = display.value + getKeyTextContent;

    if (getKeyTextContent === '=') {

      display.value =  display.value; // display clicked keys text content

      results.innerHTML = eval(display.value); // calculate and print results

    } else if (getKeyTextContent === 'C') {

      display.value = ''; // reset display text content

      results.innerHTML = 0; // reset results text content

    } else {

      display.value += getKeyTextContent;

    }

  });
  
}


// try {
        

// } catch (error) {

//   display.value = 'Error'; // Display 'Error' if there is an error in evaluation

// }

});