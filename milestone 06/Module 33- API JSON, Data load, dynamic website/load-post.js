function loadPostSection(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayBlogSection(data))
}
function displayBlogSection(data){
    const containerDiv = document.getElementById('blog-container');
    containerDiv.classList.add('post')
    for(const post of data){
        const div = document.createElement('div');
        div.classList.add('post-inner')
        div.innerHTML = `
        <h4>userId: ${post.id}</h4>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        containerDiv.appendChild(div)
    }
}



loadPostSection();


 