// load dynamic data from api with async fetch
const loadPhones = async (searchId ="iphone") => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchId}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
};

// search bar part
document.getElementById('search-btn').addEventListener('click', ()=>{
    const searchInputFiled = document.getElementById('search-input-field');
    const searchInputText = searchInputFiled.value;
    loadPhones(searchInputText);
})

// display phone
const displayPhones = (phones) =>{
    console.log(phones);
    const phoneCardContainer = document.getElementById('phone-card-container');
    phones.forEach(phone =>{
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList= `card p-4 shadow`;
        phoneCard.innerHTML = `
            <figure class="px-10 py-2 bg-gray-100">
                   <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions">
                    <button class="btn btn-primary">Details</button>
                  </div>
            </div>
        `
        phoneCardContainer.appendChild(phoneCard);

    });
}


loadPhones()