
console.log(" Hello how are you ");

document.addEventListener("click",(event)=>{
    if(event.target.classList.contains("spacesbtn")){
        document.querySelectorAll(".spacesbtn").forEach(btn=>
            {
               btn.classList.remove("activebtn");
               event.target.classList.add("activebtn");    
        })
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const citySelect = document.getElementById('city');
    const areaSelect = document.getElementById('area');
    const submitButton = document.querySelector('.submitbutton button');

    // Function to check if city is selected before area
    function validateSelection() {
      
      if (citySelect.value === 'Select City' && areaSelect.value !== 'area') {
        alert('Please select a city first');
        return false;
      }
      return true;
    }
    

    // Add event listener to the form submit button
    submitButton.addEventListener('click', function(event) {
      if (!validateSelection()) {
        event.preventDefault(); // Prevent form submission if validation fails
      }
    });
  });





  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("blinkbtn")) {
        document.querySelectorAll(".blinkbtn").forEach(btn => {
            btn.parentElement.classList.remove("afterclick");
        });
        event.target.parentElement.classList.add("afterclick");
    }
});



// document.addEventListener("click", (event) => {
//     if (event.target.classList.contains("blinkbtn")) {
//         // Remove onclick class from all buttons
//         document.querySelectorAll(".blinkbtn").forEach(btn => {
//             btn.classList.remove("onclick");
//         });

//         // Add onclick class to the clicked button
//         event.target.classList.add("onclick");
//     }
// });

//is the code for the resendentialcontainer

document.addEventListener("DOMContentLoaded", function() {
  // Get all category buttons
  const categoryButtons = document.querySelectorAll(".categorybtn");

  // Add click event listener to each category button
  categoryButtons.forEach(button => {
      button.addEventListener("click", () => {
          // Get the target container
          const targetContainerId = button.getAttribute("data-target");
          const targetContainer = document.getElementById(targetContainerId);

          // Show the target container and hide all other containers
          document.querySelectorAll(".varietycontainer").forEach(container => {
              container.style.display = container === targetContainer ? "block" : "none";
          });
      });
  });

  // Show residential container by default and hide others
  const residentialContainer = document.getElementById("resedentialcont");
  const otherContainers = document.querySelectorAll(".varietycontainer:not(#resedentialcont)");

  residentialContainer.style.display = "block";
  otherContainers.forEach(container => {
      container.style.display = "none";
  });
});


// Here We will addd teh code about the  


// const imgUpload = document.getElementById('imgUpload');
// const imageContainer = document.getElementById('imageContainer');
// const uploadButton = document.getElementById('uploadButton');

// uploadButton.addEventListener('click', function() {
//   const file = imgUpload.files[0];
  
//   if (file) {
//     const reader = new FileReader();

//     reader.onload = function(event) {
//       const imageUrl = event.target.result;
//       imageContainer.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image" style="max-width: 100%; max-height: 200px;">`;
//       imageContainer.style.display = 'block'; // Show the image container
//     }

//     reader.readAsDataURL(file);
//   }
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const toggleButton = document.getElementById('toggleButton');
//     const slider = document.querySelector('.slider');

//     toggleButton.addEventListener('change', function() {
//         if (toggleButton.checked) {
//             slider.style.left = '100%'; // Slide the slider to the right
//         } else {
//             slider.style.left = '0'; // Slide the slider back to its initial position
//         }
//     });
// });  

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const slider = document.querySelector('.slider');
    const switchLabel = document.querySelector('.switch');

    toggleButton.addEventListener('change', function() {
        if (toggleButton.checked) {
            slider.style.left = '100%'; // Slide the slider to the right
            switchLabel.classList.add('checked-bg-color'); // Add class for checked background color
        } else {
            slider.style.left = '0'; // Slide the slider back to its initial position
            switchLabel.classList.remove('checked-bg-color'); // Remove class for checked background color
        }
    });
});



console.log("here toggle functioning satrt")
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const clientsVisibility = document.querySelector('.clientsvisibility');

    toggleButton.addEventListener('change', function() {
        // Toggle the 'hidden' class on clientsvisibility
        clientsVisibility.classList.toggle('hidden');
        console.log("Toggle button clicked");
    });
});


// here  I am handeling the 

// element.addEventListener("mousemove", function(event) {
//     var clientY = event.clientY;
//     var pageY = event.pageY;
//     console.log("Client Y coordinate: " + clientY);
//     console.log("Page Y coordinate: " + pageY);
//  });
 
window.onscroll = function() {
  stickyFunction();
};

var stickyElement = document.getElementById("sticky-element");
var stickyOffset = stickyElement.offsetTop;

function stickyFunction() {
  if (window.window.scrollY >= stickyOffset) {
    stickyElement.classList.add("sticky");
  } else {
    stickyElement.classList.remove("sticky");
  }
}

// // Here I put the Validations and 



const citySelect = document.getElementById('city');
const areaSelect = document.getElementById('area'); // Assuming the area select has an ID of 'area'
const sizeInput = document.querySelector('.fifthgriditem input[type="text"]'); // Improved selector for size input
const priceInput = document.getElementById('price'); // Assuming price input hasn't been implemented yet (replace with selector if needed)

const   propertyname =document.getElementById('propertyname'); 




function toggleInputs(isEnabled) {
  areaSelect.disabled = !isEnabled;
  sizeInput.disabled = !isEnabled;
  // Enable price input if implemented (replace with actual selector)
  if (priceInput) {
    priceInput.disabled = !isEnabled;
  }
}

citySelect.addEventListener('change', function() {
  const cityValue = this.value;
  const isEnabled = cityValue !== 'Select City'; // Ensures city is selected, not just the default option
  toggleInputs(isEnabled);
});

// Check if city is selected when area input is focused
areaSelect.addEventListener('focus', function() {
  if (citySelect.value === 'Select City') {
    alert("Please choose the city first.");
    citySelect.focus();
  }
});

// Check if city is selected when size input is focused
sizeInput.addEventListener('focus', function() {
  if (citySelect.value === 'Select City') {
    alert("Please choose the city first.");
    citySelect.focus();
  }
});

// Initial state (disable area, size, and price)
toggleInputs(false);


// const citySelect = document.getElementById('city');
// const areaSelect = document.getElementById('area'); // Assuming the area select has an ID of 'area'

// const sizeInput = document.querySelector('.fifthgriditem input[type="text"]'); // Improved selector for size input
// const priceInput = document.querySelector('.not-implemented'); // Assuming price input hasn't been implemented yet (replace with selector if needed)

// function toggleInputs(isEnabled) {
//   areaSelect.disabled = !isEnabled;
//   sizeInput.disabled = !isEnabled;
//   // Enable price input if implemented (replace with actual selector)
//   if (priceInput) {
//     priceInput.disabled = !isEnabled;
//   }
// }

// citySelect.addEventListener('change', function() {
//   const cityValue = this.value;
//   const isEnabled = cityValue !== 'Select City'; // Ensures city is selected, not just the default option
//   toggleInputs(isEnabled);
// });

// // Check if city is selected when area input is focused
// areaSelect.addEventListener('focus', function() {
//   if (citySelect.value === 'Select City') {
//     alert("Please choose the city first.");
//     citySelect.focus();
//   }
// });

// // Check if city is selected when size input is focused
// sizeInput.addEventListener('focus', function() {
//   if (citySelect.value === 'Select City') {
//     alert("Please choose the city first.");
//     citySelect.focus();
//   }
// });

// // Initial state (disable area, size, and price)
// toggleInputs(false);




// const citySelect = document.getElementById('city');
// const areaSelect = document.getElementById('area'); // Assuming the area select has an ID of 'area'
// const sizeInput = document.querySelector('.fifthgriditem input[type="text"]'); // Improved selector for size input
// const priceInput = document.querySelector('.not-implemented'); // Assuming price input hasn't been implemented yet (replace with selector if needed)

// function toggleInputs(isEnabled) {
//   areaSelect.disabled = !isEnabled;
//   sizeInput.disabled = !isEnabled;
//   // Enable price input if implemented (replace with actual selector)
//   if (priceInput) {
//     priceInput.disabled = !isEnabled;
//   }
// }

// citySelect.addEventListener('change', function() {
//   const cityValue = this.value;
//   const isEnabled = cityValue !== 'Select City'; // Ensures city is selected, not just the default option
//   if (!isEnabled);
//   {
//   alert("Please choose the city first");
//   }
//   toggleInputs(isEnabled);
// });

// // Initial state (disable area, size, and price)
// toggleInputs(false);








// document.addEventListener("DOMContentLoaded", function() {
//   const citySelect = document.getElementById("city");
//   const areaInput = document.getElementById("area");
//   const sizeInput = document.getElementById("size");
//   const priceInput = document.getElementById("price");

//   areaInput.addEventListener("change", function() {
//     if (!citySelect.value) {
//       alert("Please choose the city first.");
//       citySelect.focus();
//     }
//   });

//   sizeInput.addEventListener("change", function() {
//     if (!areaInput.value) {
//       alert("Please choose the area first.");
//       areaInput.focus();
//     }
//   });

//   priceInput.addEventListener("change", function() {
//     if (!sizeInput.value) {
//       alert("Please enter the size first.");
//       sizeInput.focus();
//     }
//   });
// });






















































// // Get reference to the "Select City" div
// const selectCity = document.getElementById('selectCity');

// // Get reference to the city list div
// const cityList = document.getElementById('cityList');

// // List of cities (replace with your own data)
// const cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];

// // Function to create and display the city list
// function showCityList() {
//   // Clear any existing list items
//   cityList.innerHTML = '';
  
//   // Create a new unordered list
//   const ul = document.createElement('ul');

//   // Populate the list with cities
//   cities.forEach(city => {
//     const li = document.createElement('li');
//     li.textContent = city;
//     // Add event listener to each city item to handle selection
//     li.addEventListener('click', () => {
//       // Update the text of the "Select City" div with the selected city
//       selectCity.textContent = city;
//       // Hide the cityList div
//       cityList.style.display = 'none';
//     });
//     ul.appendChild(li);
//   });

//   // Append the list to the cityList div
//   cityList.appendChild(ul);

//   // Show the cityList div
//   cityList.style.display = 'block';
// }

// function hideSelectedCity() {
//   selectCity.textContent = 'Select City';
//   // Hide the close arrow
//   closeArrow.style.display = 'none';
// }

// // Add event listener to the "Select City" div
// selectCity.addEventListener('click', showCityList);

// // Add close arrow
// const closeArrow = document.createElement('span');
// closeArrow.innerHTML = '&#10006;';
// closeArrow.classList.add('close');
// selectCity.appendChild(closeArrow);
// closeArrow.style.display = 'none'; // Initially hidden
// // Add event listener to the close arrow
// closeArrow.addEventListener('click', hideSelectedCity);












// // Add event listener to the "Select City" div
// selectCity.addEventListener('click', showCityList);


// const closeArrow = document.createElement('span');
// closeArrow.innerHTML = '&#10006;';
// closeArrow.classList.add('close');
// selectCity.appendChild(closeArrow);
// closeArrow.addEventListener('click', hideCityList);









































// const selectCity = document.getElementById('selectCity');
//     // Get reference to the city list div
//     const cityList = document.getElementById('cityList');

//     // List of cities (replace with your own data)
//     const cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];

//     // Function to create and display the city list
//     function showCityList() {
//       // Clear any existing list items
//       cityList.innerHTML = '';
      
//       // Create a new unordered list
//       const ul = document.createElement('ul');

//       // Populate the list with cities
//       cities.forEach(city => {
//         const li = document.createElement('li');
//         li.textContent = city;
//         // Add event listener to each city item to handle selection
//         li.addEventListener('click', () => {
//           // For demonstration purposes, let's just log the selected city
//           console.log(`Selected city: ${city}`);
//           // You can perform any other action here, such as updating an input field
//         });
//         ul.appendChild(li);
//       });

//       // Append the list to the cityList div
//       cityList.appendChild(ul);

//       // Show the cityList div
//       cityList.style.display = 'block';
//     }

//     // Add event listener to the "Select City" div
//     selectCity.addEventListener('click', showCityList);