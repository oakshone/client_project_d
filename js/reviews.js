import { reviews } from "../data/reviews.js";

console.log(reviews)

const htmlEl = document.querySelector('#lets-go')

reviews.forEach(r => {
    console.log(r)


const rSection = document.createElement('section')
rSection.classList = "p-4 border rounded bg-mygrey-70"

const thename = document.createElement('h2')
thename.className = "text-2xl text-red-500"
thename.textContent = r.reviewer

const theappraisal = document.createElement('p')
theappraisal.textContent = r.comment
theappraisal.className = "text-mysecondary font-handwrite"



// build stars
const thestars = document.createElement('div')
thestars.className = "flex my-4"
for (let i = 0; i < 5; i++) {
    // console.log(reviews.stars)
    const starimage = document.createElement('img')
    i < r.rating ? starimage.src = "./images/starColor.svg" : starimage.src = "./images/starWhite.svg"
    starimage.className = "w-4 mr-1"
    thestars.appendChild(starimage)
}

rSection.appendChild(thename);
rSection.appendChild(thestars);
rSection.appendChild(theappraisal);
htmlEl.appendChild(rSection);
})