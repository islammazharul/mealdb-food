const showAllFood = (searchText) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(res => res.json())
    .then(data => displayFood(data.meals.slice(0, 6)))
}
const displayFood = foods =>{
    console.log(foods)
    const cardContainer = document.getElementById('card-container');
    // cardContainer.innerHTML = ''
    foods.forEach(food =>{
        console.log(food)
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col')
        cardDiv.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
              <div class="col-md-4">
                <img src="${food.strMealThumb}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${food.strMeal}</h5>
                  <p class="card-text">${food.strInstructions.slice(0, 100) + '......'}</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  <a href="" onclick="loadMealDetails2(${food.idMeal})"data-bs-toggle="modal" data-bs-target="#mealDetails" class="text-warning">View Details
                </div>
              </div>
        </div>
        </div>
        `
        cardContainer.appendChild(cardDiv)
    })
    
}

// async await
const loadMealDetails2 = async(idMeal) =>{
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  try{
      const res = await fetch(url)
      const data = await res.json();
      mealDetails(data.meals[0])
  }
  catch(error){
      console.log(error)
  }
}


const mealDetails = food =>{
  document.getElementById('mealDetailsLabel').innerText = food.strMeal;
  const mealDetailsBody = document.getElementById('mealDetailsBody');
  mealDetailsBody.innerHTML = `
  <img class="img-fluid" src="${food.strMealThumb
  }">
  <p><span class="fw-bold">Category:</span> ${food.strCategory}</p>
  <p><span class="fw-bold">Area:</span> ${food.strArea}</p>
  <p><span class="fw-bold">Instruction:</span> ${food.strInstructions}</p>
  <p><span class="fw-bold">Youtube:</span> <a href="">${food.strYoutube}</p>

  `
  
}





const showAllCard = () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(res => res.json())
    .then(data => displayCard(data.meals))
}
const displayCard = foods =>{
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ''
    foods.forEach(food =>{
        console.log(food.strMealThumb)
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col')
        cardDiv.innerHTML = `
        <div class="card mb-3 rounded" style="max-width: 540px;">
        <div class="row g-0">
              <div class="col-md-4">
                <img src="${food.strMealThumb}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${food.strMeal}</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  <a href="" onclick="loadMealDetails2(${food.idMeal})"data-bs-toggle="modal" data-bs-target="#mealDetails" class="text-warning">View Details
                </div>
              </div>
        </div>
        </div>
        `
        cardContainer.appendChild(cardDiv)
    })     
}

document.getElementById('btn-search').addEventListener('click', function(e){
  const searchText = document.getElementById('search-field').value;
  // console.log(searchText)
  showAllFood(searchText) 
})

showAllFood()