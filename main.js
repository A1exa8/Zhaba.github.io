fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) 
    .then(users => {
        console.log(users); 

        const tableBody = document.querySelector('#usersTable tbody');

        users.forEach(user => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = user.name;
            row.appendChild(nameCell);

            const emailCell = document.createElement('td');
            emailCell.textContent = user.email;
            row.appendChild(emailCell);

            const streetCell = document.createElement('td');
            streetCell.textContent = user.address.street;
            row.appendChild(streetCell);

            const cityCell = document.createElement('td');
            cityCell.textContent = user.address.city;
            row.appendChild(cityCell);

            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching users:', error));
