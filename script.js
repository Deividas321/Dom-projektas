document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.querySelector('.btn');
    const enterInput = document.querySelector('.enter');
    const searchInput = document.getElementById('search');
    const countryList = document.getElementById('list');

    const countries = ["Lietuva", "Latvia", "Estija", "Lenkija", "Suomija", "Rusija"];

    // Add new country to the list
    enterButton.addEventListener('click', () => {
        const newCountry = enterInput.value.trim();
        if (newCountry && !countries.includes(newCountry)) {
            countries.push(newCountry);
            const li = document.createElement('li');
            li.textContent = newCountry;
            countryList.appendChild(li);
            enterInput.value = '';
        }
    });

    // Filter country list based on search input
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredCountries = countries.filter(country =>
            country.toLowerCase().includes(query)
        );

        countryList.innerHTML = '';
        filteredCountries.forEach(country => {
            const li = document.createElement('li');
            li.textContent = country;
            countryList.appendChild(li);
        });
    });

    // Initialize the country list
    function initCountryList() {
        countryList.innerHTML = '';
        countries.forEach(country => {
            const li = document.createElement('li');
            li.textContent = country;
            countryList.appendChild(li);
        });
    }

    initCountryList();
});
