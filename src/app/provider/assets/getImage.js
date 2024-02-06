const axios = require("axios");

async function getRandomMealImage() {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    // Récupérez l'URL de l'image du plat
    const mealImageURL = response.data.meals[0].strMealThumb;
    return mealImageURL;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'image du plat :", error);
    return null;
  }
}

module.exports = getRandomMealImage;
