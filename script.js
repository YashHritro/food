const recipes = [
    {
      recipeName: "Spaghetti Carbonara",
      image: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg",
      price: 12.99,
      rating: 4.5
    },
    {
      recipeName: "Margherita Pizza",
      image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza.jpg",
      price: 10.49,
      rating: 4.7
    },
    {
      recipeName: "Chicken Tikka Masala",
      image: "https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG",
      price: 14.99,
      rating: 4.8
    },
    {
      recipeName: "Beef Tacos",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-masala.jpg",
      price: 9.99,
      rating: 4.3
    },
    {
      recipeName: "Caesar Salad",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5z2qMsPeOYqa5MJ_epJ075j9vTmUqeCl5Rg&s",
      price: 8.99,
      rating: 4.2
    },
    {
        recipeName: "Shrimp Scampi",
        image: "https://static01.nyt.com/images/2022/06/02/dining/ShrimpScampi_thumb/ShrimpScampi_thumb-square640.jpg",
        price: 16.99,
        rating: 4.6
      }
  ];
  
  const moreData = document.getElementById('more-data')
  const recipe = document.getElementById('recipe')
  const moreButton = document.getElementById('moreButton')
  const lessButton = document.getElementById('lessButton')
  const subcribe_form = document.getElementById('subcribe-form') 
  const modal = document.getElementById('modal')
  const okay = document.getElementById('ok')
  moreButton.addEventListener('click',function(){
    console.log(recipe.classList)
    if(recipe.classList.contains('hidden')){
        recipe.classList.remove('hidden')
        moreButton.innerHTML = 'See less Items <span class="text-xl mt-1 "><i class="ri-arrow-right-circle-line"></i></span>'
    } else{
        recipe.classList.add('hidden')
        moreButton.innerHTML = 'See More Items <span class="text-xl mt-1 "><i class="ri-arrow-right-circle-line"></i></span>'
    }
  })

  for(let i=0; i<recipes.length; i++){
    moreData.innerHTML += `
    <div class="shadow-rounded-2 rounded-3xl">
      <div>
        <img class="h-[300px] w-[400px] rounded-tl-3xl rounded-tr-3xl" src="${recipes[i].image}">
      </div>
      <div class="flex justify-between items-center mt-3 px-3 mb-7">
        <div>
          <div class="font-bold text-xl">${recipes[i].recipeName}</div>
          <div class="bg-[#F48E28] text-gray-200 text-center rounded-full p-1 w-[135px] text-sm mt-3">Add to Cart</div>
        </div>
        <div>
          <div class="text-[#F48E28]"><i class="ri-star-fill"></i><span class="text-black">${recipes[i].rating}</span></div>
          <div class="font-semibold">$${recipes[i].price}</div>
        </div>
      </div>
    </div>
    `
  }

  subcribe_form.addEventListener('submit',function(e){
    e.preventDefault()
    subcribe_form.reset()
    modal.classList.remove('hidden')

  })

  okay.addEventListener('click',function(){
    modal.classList.add('hidden')
  })