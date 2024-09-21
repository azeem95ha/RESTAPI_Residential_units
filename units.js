function getAllUnits() {
    fetch('/api/units') 
      .then(response => response.json())
      .then(data => {
        // Update the UI with the units data
        const unitsList = document.getElementById('unitsList');
        unitsList.innerHTML = ''; // Clear previous list
  
        data.units.forEach(unit => { // Use data.units from the API response
          const unitCard = document.createElement('div');
          unitCard.classList.add('unit-card');
          unitCard.innerHTML = `
            <h3>${unit.UnitNum}</h3> 
            <p>Project: ${unit.ProjectName}</p> 
            <p>Zone: ${unit.Zone}</p>
            <p>Price: ${unit.Price}</p>
            <button onclick="showUnitDetails(${unit.id})">View Details</button> 
          `;
          unitsList.appendChild(unitCard);
        });
      })
      .catch(error => {
        console.error('Error fetching units:', error);
      });
  }