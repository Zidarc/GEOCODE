// Sample data for recipes
let recipes = [
    { name: "Polar Bears Are Not Actually White", ingredients: "Polar bears have black skin beneath their fur, which helps them absorb and retain heat in their frigid Arctic environment."},
    { name: "Honey Never Spoils", ingredients: " Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible." },
    { name: "Octopuses Have Three Hearts", ingredients: " Octopuses have two gills and three hearts, with two pumping blood to the gills and one pumping oxygenated blood to the rest of their body." },
];

// Function to display recipes
function displayRecipes() {
    const recipeList = document.getElementById("recipe-list");

    // Clear the existing list
    recipeList.innerHTML = "";

    // Loop through the recipes and create list items
    recipes.forEach((recipe, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${recipe.name}</h3>
            <p> ${recipe.ingredients}</p>
            <button onclick="editRecipe(${index})">Edit</button>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeList.appendChild(listItem);
    });
}

// Function to add a new recipe
function addRecipe() {
    let recipeName = document.getElementById("recipeNameInput").value;
    if (recipeName) {
        let recipeIngredients = document.getElementById("recipeItemInput").value;
        if (recipeIngredients) {
            const newRecipe = {
                name: recipeName,
                ingredients: recipeIngredients,
            };
            recipes.push(newRecipe);
            displayRecipes();
        }
    }
}

// Function to delete a recipe
function deleteRecipe(index) {
    if (confirm("Are you sure you want to delete this fact?")) {
        recipes.splice(index, 1);
        displayRecipes();
    }
}

// Function to filter recipes
function filterRecipes() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filterIngredient = document.getElementById("filterDropdown").value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => {
        return (recipe.name.toLowerCase().includes(searchInput) &&
                (filterIngredient === "" || recipe.ingredients.toLowerCase().includes(filterIngredient)));
    });
    displayFilteredRecipes(filteredRecipes);
}

// Function to display filtered recipes
function displayFilteredRecipes(filteredRecipes) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = "";

    filteredRecipes.forEach((recipe, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${recipe.name}</h3>
            <p>${recipe.ingredients}</p>
            <button onclick="editRecipe(${index})">Edit</button>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeList.appendChild(listItem);
    });
}

// Function to edit a recipe
function editRecipe(index) {
    const editedRecipe = prompt("Edit the fact heading:", recipes[index].name);
    const editedRecipeIng = prompt("Edit the fact description:", recipes[index].ingredients)
    if (editedRecipe !== null && editedRecipe !== "") {
        recipes[index].name = editedRecipe;
        if (editedRecipeIng){
            recipes[index].ingredients = editedRecipeIng;     
        }
        displayRecipes();
    }
}

// Initial display of recipes
displayRecipes();
