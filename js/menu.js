import { footer } from "../modules/footer.mjs";
footer()

// nav
const hb = document.querySelector('#hamburgerBtn');
const pn = document.querySelector('#primaryNav');
hb.addEventListener('click', () => {
    pn.classList.toggle('hidden');
})


import { pepperData } from "../data/peppers.js";
console.log(pepperData);

const displaymenuitems = document.querySelector('#peppershere')

function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const myItemContainer = document.createElement('div')
        myItemContainer.className = "border border-myprimary rounded-xl text-center bg-mygrey-10 shadow-lg"

        const myPhoto = document.createElement('img')
        myPhoto.src = `images/${x.image_name}`
        myPhoto.alt = x.title
        myPhoto.className = "w-full"

        const myTitle = document.createElement('h2')
        myTitle.className = "text-lg mx-1 text-myprimary"
        myTitle.innerHTML = x.title

        const mylearnBtn = document.createElement('button')
        mylearnBtn.innerText = 'Learn More'
        mylearnBtn.className = "border border-mygrey-50 rounded-full shadow-lg text-md px-4 py-1 m-4 cursor-pointer text-mygrey-100"
        mylearnBtn.addEventListener('click', () => showStuff(x));

        myItemContainer.appendChild(myTitle)
        myItemContainer.appendChild(myPhoto)
        myItemContainer.appendChild(mylearnBtn)

        displaymenuitems.appendChild(myItemContainer)
    }) // end of the loop
} // end fn

displayItems(pepperData)

const mydialog = document.querySelector('#mydialog')
const mytitle = document.querySelector('#mydialog h2')
const myclose = document.querySelector('#mydialog button')
myclose.addEventListener("click", () => mydialog.close())
const myphoto = document.querySelector('#photo')
const mydesc = document.querySelector('#desc')
const mycalorie = document.querySelector('#calories')
const myscovilles = document.querySelector('#scovilles')
const myitem = document.querySelector('#item')

function showStuff(x) {
    mytitle.innerHTML = x.title
    myphoto.src= `images/${x.image_name}`
    myphoto.className="w-full h-full rounded"
    mydesc.innerHTML = x.description
    mycalorie.innerHTML = `Calories: <span class="text-gray-800">${x.calories}</span>`
    myitem.innerHTML = `Order Number: <span class="text-red-700">${x.item}</span>`
    const scovilleList=x.scovilles
    console.log(scovilleList)
    scovilleList.forEach(a => {
        const thisScoville = document.createElement('li')
        thisScoville.innerHTML = a
        
        myscovilles.appendChild(thisScoville)
    })
    mydialog.showModal()
}