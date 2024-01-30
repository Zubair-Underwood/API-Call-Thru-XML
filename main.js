const postsListContainer = document.querySelector(".posts-list-container");

function fetchUsingFetchMethod() {

    const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {

        method: "GET",

    });

    fetchRequest
        .then((response) => response.json())
        .then((result) => displayResults(result))
        .catch((e) => console.log(e));

}


function displayResults(posts) {

    postsListContainer.innerHTML = posts.map(postItem => `
    <div class="post-item">
        <h3>${postItem.title}</h3>
        <p>${postItem.body}</p>
    </div>
    `).join(" ");
}

fetchUsingFetchMethod();

