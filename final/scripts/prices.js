fetch('data/prices.json')
  .then(response => response.json())
  .then(data => {
    const scooterTableBody = document.querySelector('#scooter-prices-table tbody');
    const atvTableBody = document.querySelector('#atv-prices-table tbody');
    const jeepTableBody = document.querySelector('#jeep-prices-table tbody');

    const createRow = (item) => `
      <tr>
        <td>${item.type}</td>
        <td>${item.persons}</td>
        <td>$${item.half_day}</td>
        <td>$${item.full_day}</td>
        <td>$${item.walk_in_half_day}</td>
        <td>$${item.walk_in_full_day}</td>
      </tr>
    `;

    const createImage = (item) => `
      <img src="${item.image}" alt="${item.type}">
    `;

    data.scooters.forEach(item => {
      scooterTableBody.innerHTML += createRow(item);
      document.querySelector('#scooters .images').innerHTML += createImage(item);
    });

    data.atvs.forEach(item => {
      atvTableBody.innerHTML += createRow(item);
      document.querySelector('#atvs .images').innerHTML += createImage(item);
    });

    data.jeeps.forEach(item => {
      jeepTableBody.innerHTML += createRow(item);
      document.querySelector('#jeeps .images').innerHTML += createImage(item);
    });
  })
  .catch(error => console.error('Error fetching prices data:', error));
