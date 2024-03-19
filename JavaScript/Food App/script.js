const mealContainer = document.querySelector(".container__meals");

const getAllFoodItems = async () => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=s`
  );
  const data = await response.json();

  console.log(data.meals);

  data.meals.map((meal, index) => {
    const postsHtmlData = `
    <div class="container__meals--meal">
        <div class="img__container">
            <img src=${meal.strMealThumb} alt="pasta" class="container__meal--img" />
        </div>
         <div class="container__meals--content">
            <h3 class="container__meal--title">${meal.strMeal}</h3>
            <p class="container__meal--desc">
               ${meal.strInstructions}
            </p>
        </div>
    </div>
    `;

    mealContainer.insertAdjacentHTML("afterbegin", postsHtmlData);
  });
};

getAllFoodItems();
