const container = document.querySelector(".container");

let limit = 4;
let pageCount = 1;

const getPosts = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`
  );
  console.log(response);

  const data = await response.json();
  console.log(data);

  data.map((curPost, index) => {
    const postsHtmlData = `
        <div class="posts">
            <p class="posts_no">${curPost.id}</p>
            <h2 class="posts_title">
                ${curPost.title}
            </h2>
            <p class="posts_description">
                ${curPost.body}
            </p>
        </div>
        `;

    container.insertAdjacentHTML("beforeend", postsHtmlData);
  });
};

getPosts();
