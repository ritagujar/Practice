const container = document.querySelector(".container");

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPosts = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`
  );

  const data = await response.json();

  data.map((curPost, index) => {
    const postsHtmlData = `
        <div class="posts">
            <p class="posts_no">${postCount++}</p>
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

const showData = () => {
  setTimeout(() => {
    pageCount++;
    getPosts();
  }, 300);
};

window.addEventListener("scroll", () => {
  // const scrollHeight = document.documentElement.scrollHeight
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    showData();
  }
});
