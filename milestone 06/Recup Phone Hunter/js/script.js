// step 1: get the search btn and input field then added evenhandler func 
const searchButton = (isSeeMore)=>{
    const searchInputFiled = document.getElementById('search-input-field');
    const searchInputValue = searchInputFiled.value;
    loadPhones(searchInputValue, isSeeMore);
}

// step 2: load dynamic data with API
const loadPhones = async(searchId='iphone', isSeeMore)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchId}`);
    const data = await res.json();
    const phoneItems = data.data;
    displayPhoneItems(phoneItems,isSeeMore)
}

// step 3: display phone items
const displayPhoneItems = (phoneItems, isSeeMore)=>{
    // get the card container
    const phoneCardContainer = document.getElementById('phone-card-container');
    phoneCardContainer.textContent= ''

    // step 4: data not found massage
    const dataNotFound = document.getElementById('data-not-found');
    if(phoneItems.length === 0){
        dataNotFound.classList.remove('hidden')
    }else{
        dataNotFound.classList.add('hidden')
    }

    // step 5: see more btn enable and when clik btn then display all data
    const seeMoreBtn = document.getElementById('see-more-btn');
    if(phoneItems.length > 12 && !isSeeMore){
        seeMoreBtn.classList.remove('hidden');
    }else{
        seeMoreBtn.classList.add('hidden')
    }
    // show only 12 card if not show all
    if(!isSeeMore){
        phoneItems =phoneItems.slice(0, 8)
    }
    // looping in phoneItems and display show data
    phoneItems.forEach(SinglePhone=>{
        const cardDiv = document.createElement('div');
        cardDiv.classList = `card shadow p-4`
        cardDiv.innerHTML = `
        <figure class="px-10 py-2 bg-gray-100">
                   <img src="${SinglePhone.image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                  <h2 class="card-title">${SinglePhone.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions">
                <button onclick="showdetails('${SinglePhone.slug}');show_detail.showModal()" class="btn btn-primary">Details</button>
                  </div>
            </div>
        `
        phoneCardContainer.appendChild(cardDiv);

    })
}
// step 6: get the see more btn and added onclick func
const seeMoreCard = ()=>{
    searchButton(true)
}
// showdetails data
const showdetails = async (id)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data  = await res.json();
    const phoneDetails = data.data;
    displayShowDetails(phoneDetails);
}

// step 8: display showDetials
const displayShowDetails = (phoneDetails) =>{
    console.log(phoneDetails);
    const showDetialContainer = document.getElementById('show-detail-content');
    showDetialContainer.innerHTML = `
    <img src=${phoneDetails.image}>
    <h2>Name: ${phoneDetails.name}</h2> 
    <h2>Brand: ${phoneDetails.brand}</h2>   
    <h2>Release Date: ${phoneDetails.releaseDate ? phoneDetails.releaseDate : 'Realease Date Not Found'}</h2>
    `
}
loadPhones()
