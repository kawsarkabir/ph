// step 1: load data
const loadCategoryNews = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/categories`
  );
  const data = await res.json();
  const categoryNews = data.data;
  displayCategoryNews(categoryNews);
};
// step 2: display category news
const displayCategoryNews = (categoryNews) => {
  const categoryNewsItems = categoryNews.news_category;
  const categoryNewsContainer = document.getElementById(
    "category-news-conteiner"
  );
  categoryNewsItems.forEach((categoryNewsItem) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <button id="category-btn" onclick = "singleNewsLoad()" class="btn btn-outline btn-primary">${categoryNewsItem.category_name}</button>
        `;
    categoryNewsContainer.appendChild(div);
  });
};

// step 3: single news load click category button
const singleNewsLoad = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`
  );
  const data = await res.json();
  const singleNews = data.data;
  displaySingleNews(singleNews);
};

const displaySingleNews = (singleNews) => {
  const singleNewsContainer = document.getElementById("single-news-container");
  singleNews.forEach((singleNew) => {
    console.log(singleNew);
    const div = document.createElement("div");
    div.classList = `card card-side bg-base-100 shadow my-8`;
    div.innerHTML = `
  <figure class ="w-1/7"><img class="w-60 h-80" src="${singleNew.image_url}" alt="Movie"/></figure>
  <div class="card-body w-3/4">
    <h2 class=" text-3xl font-bold">${singleNew.title}</h2>
    <p>${singleNew.details}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Details</button>
    </div>
  </div>
        `;
    singleNewsContainer.appendChild(div);
  });
};

loadCategoryNews();

/* const loadCategoryNews = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/categories`
  );
  const data = await res.json();
  const categoryNews = data.data.news_category;
  displayCategoryNews(categoryNews);
};
const displayCategoryNews =(categoryNews)=>{
  const categoryNewsConteiner = document.getElementById('category-news-conteiner');
  categoryNews.forEach(categoryNew=>{
    console.log(categoryNew);
    const div = document.createElement('div')
    div.innerHTML = `
    <a onclick="singleNews('${categoryNew.category_id}')" class="tab">${categoryNew.category_name}</a>
    `
    categoryNewsConteiner.appendChild(div);
  })
}
const singleNews = async(id)=>{
  console.log(id);
  const res = await fetch(``)
  
}
loadCategoryNews() */