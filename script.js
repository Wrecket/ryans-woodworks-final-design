

const btn = document.querySelector('#button');
const distance = document.querySelector("#distance");
        btn.onclick = (event) => {
            let result = (Math.round(distance.value  * 90) / 100).toFixed(2);
            event.preventDefault();
            // show the selected index
            document.querySelector('#cost').innerHTML = `£${result}`;
        };

        let filteredimgs = props.state.recipes.filter(recipe => {
            return recipe.category.toLowerCase().includes(props.state.searchInput) || recipe.name.toLowerCase().includes(props.state.searchInput) || recipe.time.toLowerCase().includes(props.state.searchInput)
        })
        return filteredRecipes.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)