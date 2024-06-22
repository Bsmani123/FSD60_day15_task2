
        document.getElementById('userForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;
            const pincode = document.getElementById('pincode').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const foodChoices = document.querySelectorAll('input[name="food"]:checked');
            const state = document.getElementById('state').value;
            const country = document.getElementById('country').value;

            if (foodChoices.length < 2) {
                alert('Please select at least two food choices.');
                return;
            }

            const food = Array.from(foodChoices).map(food => food.value).join(', ');

            const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
            const newRow = table.insertRow();

            const cells = [firstName, lastName, email, address, pincode, gender, food, state, country];
            cells.forEach(cell => {
                const newCell = newRow.insertCell();
                newCell.textContent = cell;
            });

            document.getElementById('userForm').reset();
        });
   
