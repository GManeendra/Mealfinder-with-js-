// Load Meals
fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("mealContainer");

        data.meals.forEach(meal => {
            const card = document.createElement("div");
            card.classList.add("meal");

            card.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h3>${meal.strMeal}</h3>
      `;

            card.addEventListener("click", () => {
                console.log("Clicked meal id:", meal.idMeal);
                window.location.href = `details.html?id=${meal.idMeal}`;
            });

            container.appendChild(card);
        });
    })
    .catch(err => console.log(err));


// Load description
fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => res.json())
    .then(data => {
        const category = data.categories.find(cat => cat.strCategory === "Vegetarian");

        document.getElementById("vegetarian-desc").innerText =
            category.strCategoryDescription;
    })
    .catch(err => console.log(err));
