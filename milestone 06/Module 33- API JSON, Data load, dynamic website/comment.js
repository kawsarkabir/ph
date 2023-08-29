function comments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => showCommets(data));
}
function showCommets(data){
    const commentContainer = document.getElementById('comment-container');
    commentContainer.classList.add('container')
    for(const comment of data){
        console.log(comment);
        const div = document.createElement('div')
        div.classList.add('inner')
        div.innerHTML = `
         <h3>Id:${comment.id}</h3>
         <h4>name: ${comment.name}</h4>
         <h5>email: ${comment.email}</h5>
         <p>${comment.body}</p>
        `
        commentContainer.appendChild(div)
    }
}
comments()