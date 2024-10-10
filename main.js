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

            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching users:', error));
