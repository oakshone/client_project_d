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
        myItemContainer.className = "border rounded-xl grid text-center shadow-lg overflow-hidden"

        const myPhoto = document.createElement('img')
        myPhoto.src = `images/${x.image_name}`
        myPhoto.alt = x.title
        myPhoto.className = "w-full"

        const myTitle = document.createElement('h2')
        myTitle.className = "text-2xl text-mygrey-100"
        myTitle.innerHTML = x.title

        const myPrice = document.createElement('p')
        myPrice.className = "text-xl font-bold text-mygrey-100 pt-2 pb-2"
        myPrice.innerHTML = x.price
        
        const orderBtn = document.createElement('button')
        orderBtn.innerText = 'Order'
        orderBtn.className = "bg-mygrey-60 h-9 self-center m-2 rounded-full hover:bg-mygrey-40 text-myprimary"
        orderBtn.addEventListener('click', () => addItem(x.item_number));
        
        
        const orderstatus = document.createElement('img')
        //orderstatus.innerHTML="&#x2713;"
        orderstatus.src = "../images/checkmark.svg"
        orderstatus.className = "check w-8 h-8 bg-mygrey-30 text-white text-center mx-auto round";

        myItemContainer.appendChild(myTitle)
        myItemContainer.appendChild(myPhoto)
        myItemContainer.appendChild(myPrice)
        myItemContainer.appendChild(orderBtn)
        myItemContainer.appendChild(orderstatus)


        displaymenuitems.appendChild(myItemContainer)
    }) // end of the loop
} // end fn

displayItems(pepperData)

function addItem(item) {
    // console.log(item)
    let pepperData = document.querySelector(`#pepperData${item}`)
    pepperData.classList.toggle("ordered");
}

