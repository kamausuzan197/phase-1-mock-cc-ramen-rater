// write your code here
fetch("http://localhost:3000/ramens")
  .then(res => res.json())
  .then(data => data.forEach(ramen => {
    const menu = document.querySelector("#ramen-menu");
    const img = document.createElement("img")
    img.src = ramen.image
    menu.append(img)
    img.addEventListener('click', (e) => {
      const bigImg = document.querySelector(".detail-image")
      bigImg.src = ramen.image
      const name = document.querySelector(".name")
      name.innerText = ramen.name
      const restaurant = document.querySelector(".restaurant")
      restaurant.innerText = ramen.restaurant
      const rating = document.querySelector("#rating-display")
      rating.innerText = ramen.rating
      const comment = document.querySelector("#comment-display")
      comment.innerText = ramen.comment
    })
  }))


const form = document.querySelector("form")
form.addEventListener("submit", formAction)
function formAction(e) {
  e.preventDefault()
  const obj = {
    name: e.target[0].value,
    restaurant: e.target[1].value,
    image: e.target[2].value,
    rating: e.target[3].value,
    comment: e.target[4].value
  }
  fetch("http://localhost:3000/ramens", {
    method: 'POST',
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(obj)
  })
  form.reset()
}