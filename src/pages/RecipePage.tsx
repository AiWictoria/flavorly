import { useState, useEffect } from "react";
RecipePage.route = {
  path: "/recipes",
  menuLabel: "Recipes",
  index: 2,
};

export default function RecipePage() {
  const [recipes, setRecipes] = useState<any[]>([]);

  async function fetchRecipes() {
    const res = await fetch("/api/recipes", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const data = await res.json();
      setRecipes(data);
      console.log(data);
    } else {
      alert("Något gick fel");
    }
  }
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.title}
            <br />
            Ingredients: {recipe.ingredients}
            <br />
            Instructions: {recipe.instructions}
            <br />
          </li>
        ))}
      </ul>
    </>
  );
}
