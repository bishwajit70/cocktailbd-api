function loadCocktail() {
    document.getElementById('main').innerHTML = "";
    let inputValue = document.getElementById('input-value').value;
    // console.log(inputValue);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayDrinks(data.drinks))
        document.getElementById('input-value').value = "";
}

const displayDrinks = cocktails => {
    
    for (const drink of cocktails) {
        const mainDiv = document.getElementById('main');
        const div = document.createElement('div');
        div.classList.add('col-md-3');
        div.classList.add('pb-5');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${drink.strDrink}</h5>
                <a href="" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
        mainDiv.appendChild(div);
    }
    
}