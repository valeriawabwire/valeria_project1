const vehicleEndpoints = 'http://localhost:3000/Vehicles';
console.log(vehicleEndpoints);

document.addEventListener("DOMContentLoaded", () => {
    //Fetch Vehicle data from the json server using the given url
    fetch(vehicleEndpoints)
        .then(response => response.json())
        .then(data => {
            // Process and display fetched vehicle data on the webpage
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching vehicle data:', error);
        });
});

document.getElementById("addVehicleForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newVehicle = {
        id: formData.get("id"),
        model: formData.get("model"),
        year: parseInt(formData.get("year")),
        mileage: parseInt(formData.get("mileage")),
        price: formData.get("price"),
        availability: "available" // Initial availability status
    };
    addVehicle(newVehicle);// Call the function to add the new vehicle
    event.target.reset();// Reset the form fields after submission
});


function displayVehicleInventory(vehicles) {
    const vehicleListElement = document.getElementById("vehicleList");
    vehicleListElement.innerHTML = ""; // Clear previous content
    vehicles.forEach(vehicle => {
        const vehicleItem = document.createElement("div");
        vehicleItem.innerHTML = `
        <p><strong>Model:</strong> ${vehicle.model}</p>
        <p><strong>Year:</strong> ${vehicle.year}</p>
        <p><strong>Mileage:</strong> ${vehicle.mileage}</p>
        <p><strong>Price:</strong> ${vehicle.price}</p>
        <p><strong>Availability:</strong> ${vehicle.availability}</p>
        <hr>
    `;
        vehicleListElement.appendChild(vehicleItem);
    });
};
console.log(displayVehicleInventory);

function addVehicle(newVehicle) {
    fetch(vehicleEndpoints, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVehicle),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            fetch(vehicleEndpoints)
                .then(response => response.json())
                .then(data => {
                    displayVehicleInventory(data.Vehicles);
                })
                .catch(error => {
                    console.error('Error fetching vehicle data:', error);
                });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};
console.log(addVehicle);

document.addEventListener("DOMContentLoaded", () => {
    const vehicleData = {
        "Vehicles": [
            {
                "id": "AA",
                "model": "Audi Q3",
                "mileage": 11245,
                "vehicle-no": 19,
                "year": "2015",
                "price": "$28000",
                "condition": "Well maintained, dark blue alternative paint, leather interior.",
                "poster": "https://www.motortrend.com/uploads/2023/07/10956-2024-Audi-Q3-S-Line-45-front-view.jpg?fit=around%7C875:492"
            },
            {
                "id": "BB",
                "model": "Audi Q5",
                "mileage": 10667,
                "vehicle-no": 7,
                "year": "2017",
                "price": "$29500",
                "condition": "Road worthy vehicle, off road beast with a 4Ltr capacity, 4000CC Engine capacity and extra body kit for off-roading activities.",
                "poster": "https://s1.cdn.autoevolution.com/images/news/audi-q5-bentley-bentayga-get-the-4x4-squared-treatment-138910-7.jpg"
            },
            {
                "id": "CC",
                "model": "Audi TT",
                "mileage": 0,
                "vehicle-no": 8,
                "year": "2024",
                "price": "$35000",
                "condition": "Yellow but dangerous brand new on roading machine, suitable twin turbo with black interior, quite the consumer since it is a powerful and luxurious vehicle with a convertible roof.",
                "poster": "https://uploads.audi-mediacenter.com/system/production/media/65009/images/f031bdf159f659450975d8a2fce95e47cb1d074f/A188449_web_2880.jpg?1698324069"
            },
            {
                "id": "DD",
                "model": "Audi RSq8",
                "mileage": 11,
                "vehicle-no": 13,
                "year": "2022",
                "price": "$76000",
                "condition": "New and orange, twin-turbo engine SUV, alternative for a lamborghini Urus, pure curative on a budget but same range as a supercar.",
                "poster": "https://www.carscoops.com/wp-content/uploads/2023/01/ABT-Audi-RSQ8-5.jpg"
            },
            {
                "id": "EE",
                "model": "Audi Rs6",
                "mileage": 26,
                "vehicle-no": 2,
                "year": "2023",
                "price": "$56000",
                "condition": "Brand new red-coupe vehicle that will get you from here to there yesterday(very fast), red interior,loud pipe an mtm with 4000CC and 800 Horse Power .",
                "poster": "https://img.gta5-mods.com/q85-w800/images/2020-audi-rs6-avant-add-on-extras-dirtmap-digital-dials-00abolfazl00/558e01-b,l.jpg"
            },
            {
                "id": "FF",
                "model": "Audi Rs7",
                "mileage": 1125,
                "vehicle-no": 1,
                "year": "2017",
                "price": "$47800",
                "condition": "German machines never disappoint, this racer is v8, grey in color and long-term road worthy.",
                "poster": "https://www.automaniac.org/resources/images/variant/271/rs7_1.jpg"
            },
            {
                "id": "GG",
                "model": "Audi A4",
                "mileage": 14598,
                "vehicle-no": 37,
                "year": "2015",
                "price": "$13890",
                "condition": "A beautiful and very comfortable family car, grey color and fuel friendly.",
                "poster": "https://www.carexpert.com.au/app/uploads/2020/11/2021-Audi-A4-45-TFSI-quattro-S-line-Sedan-2020-Audi-A4-S-Line-1.jpg"
            },
            {
                "id": "HH",
                "model": "Audi A6",
                "mileage": 15,
                "vehicle-no": 36,
                "year": "2024",
                "price": "$25000",
                "condition": "Brand new white A6, very comfortable with leather seats, family car with tv on both front seats head rests. ",
                "poster": "https://img-ik.cars.co.za/news-site-za/images/2020/08/Audi-A6TDI-4.jpg?tr=w-1200,h-800"
            },
            {
                "id": "II",
                "model": "Audi Q4",
                "mileage": 9997,
                "vehicle-no": 3,
                "year": "2021",
                "price": "$15000",
                "condition": "Undebatable condition, has covered a distance showing road worthiness and able to cover a long-term purpose.",
                "poster": "https://images.drive.com.au/caradvice/image/private/c_fill,f_auto,g_auto,h_675,q_auto:eco,w_1200/v1/e7d53b8bff733f2446bf86a147448681"
            },
            {
                "id": "JJ",
                "model": "Audi A8",
                "mileage": 0,
                "vehicle-no": 17,
                "year": "2024",
                "price": "$23000",
                "condition": "Brand new vehicle, black vintage paint.",
                "poster": "https://mediaservice.audi.com/media/cdb/data/3fe8efbd-f311-475a-8050-154c72fa9683.jpg"
            }
        ]

    };


    const vehicleListElement = document.getElementById("vehicleList");

    vehicleData.Vehicles.forEach(vehicle => {
        const vehicleDiv = document.createElement("div");
        vehicleDiv.classList.add("vehicle");

        const img = document.createElement("img");
        img.src = vehicle.poster;
        vehicleDiv.appendChild(img);

        const detailsButton = document.createElement("button");
        detailsButton.textContent = "View Details";
        detailsButton.addEventListener("click", () => {
            showVehicleDetails(vehicle);
        });
        vehicleDiv.appendChild(detailsButton);

        const purchaseButton = document.createElement("button");
        purchaseButton.textContent = "Purchase";
        purchaseButton.addEventListener("click", () => {
            purchaseVehicle(vehicle);
        });
        vehicleDiv.appendChild(purchaseButton);

        vehicleListElement.appendChild(vehicleDiv);
    });

    function showVehicleDetails(vehicle) {
        // Implement your code to show vehicle details
    }

    function purchaseVehicle(vehicle) {
        // Update the vehicle number
        vehicle['vehicle-no']--; // Assuming 'vehicle-no' is the property to represent vehicle number

        // Call a function to update the vehicle data on the server
        updateVehicleData(vehicle);

        // Display a message to the user confirming the purchase
        alert(`You have successfully purchased ${vehicle.model}. Vehicle number updated to ${vehicle['vehicle-no']}.`);
    }
    console.log(purchaseVehicle);

    function updateVehicleData(vehicle) {
        // Implement code to update the vehicle data on the server
    }

    function showVehicleDetails(vehicle) {
        // Construct a string containing all details of the vehicle
        let details = `Model: ${vehicle.model}\n`;
        details += `Year: ${vehicle.year}\n`;
        details += `Mileage: ${vehicle.mileage}\n`;
        details += `Price: ${vehicle.price}\n`;
        details += `Condition: ${vehicle.condition}\n`;
        details += `Vehicle Number: ${vehicle['vehicle-no']}\n`; // Note: 'vehicle-no' contains special character '-'

        // Show the details in an alert dialog
        alert(details);
    }
    console.log(showVehicleDetails);
});

const newModelEndpoints = 'http://localhost:3000/NewModels';
// console.log(newModelEndpoints);

document.addEventListener("DOMContentLoaded", () => {
    //Fetch Vehicle data from the json server using the given url
    fetch(newModelEndpoints)
        .then(response => response.json())
        .then(data => {
            // Process and display fetched vehicle data on the webpage
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching vehicle data:', error);
        });
});

document.addEventListener("DOMContentLoaded", () => {
    const newModels = [
        //Vehicle number shows the number of vehicles that are in stock at the moment
        {
            "id": "A1A",
            "model": "Audi R8",
            "mileage": 0,
            "vehicle-no": 1,
            "demand": 13,
            "year": "2024",
            "price": "$153000",
            "condition": "Newest face of the Audi, v12 supercar, vintage with a speedometer running upto 350KM/H, twin turbo with three exhaust loud pipes and dangerous in color.",
            "poster": "https://cdn.motor1.com/images/mgl/VzM4p7/s3/audi-r8-japan-final-edition.jpg"
        },
        {
            "id": "B2B",
            "model": "Audi Rs7 Sportback",
            "mileage": 0,
            "vehicle-no": 1,
            "demand": 27,
            "year": "2024",
            "price": "$116000",
            "condition": "Brand new sportsback with a streamlined body, you know what else is that streamlined;an aeroplane; supercar, fast vehicle with continuous tail lights, carbon fibre body and best of the best.",
            "poster": "https://i.ytimg.com/vi/WiwM5ULI1F4/maxresdefault.jpg"
        },
        {
            "id": "C3C",
            "model": "Audi Rs6 Avant",
            "mileage": 0,
            "vehicle-no": 1,
            "demand": 66,
            "year": "2024",
            "price": "$103000",
            "condition": "Baddest on the road, this speed demon is quite spectacular, appeasing to the eye and body as well, a v8 with variance in paint .",
            "poster": "https://i0.wp.com/audiclubna.org/wp-content/uploads/Audi-RS-6-Avant-GT-471.jpg?ssl=1"
        }
    ];

    const viewNewModelsBtn = document.getElementById("viewNewModelsBtn");
    const notificationBadge = document.createElement("span");
    notificationBadge.id = "notificationBadge";
    notificationBadge.textContent = newModels.length.toString(); // Update the badge with the count of new models
    viewNewModelsBtn.appendChild(notificationBadge);

    // Add click event listener to the button
    viewNewModelsBtn.addEventListener("click", () => {
        displayNewModelDetails(newModels);
    });
});

function displayNewModelDetails(newModels) {
    // Implement your code to display the details of new models
    newModels.forEach(model => {
        alert(`Model: ${model.model}\nYear: ${model.year}\nMileage: ${model.mileage}\nPrice: ${model.price}\nCondition: ${model.condition}`);
    });
};
console.log(displayNewModelDetails);

document.addEventListener("DOMContentLoaded", () => {
    // Select the submit order button
    const submitOrderBtn = document.getElementById("dealershipOrderBtn");

    // Add event listener to the submit order button
    submitOrderBtn.addEventListener("click", () => {
        // Update the text content of the submit order button to "Order Placed"
        submitOrderBtn.textContent = "Order Placed";

        // Optionally, you can disable the button after placing the order
        submitOrderBtn.disabled = true;

        // You can also add additional logic here to handle the form submission, e.g., sending data to the server
    });
});

function placeOrder(vehicleId) {
    let selectedVehicle = newModels.find(vehicle => vehicle.id === vehicleId);
    if (selectedVehicle) {
        console.log(`Order placed for ${selectedVehicle.model}`);
        // Additional logic to process the order
    } else {
        console.log('Vehicle not found');
    }
}

