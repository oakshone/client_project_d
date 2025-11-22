import { footer } from "../modules/footer.mjs";
footer()

// nav
const hb = document.querySelector('#hamburgerBtn');
const pn = document.querySelector('#primaryNav');
hb.addEventListener('click', () => {
    pn.classList.toggle('hidden');
})


const signup = document.querySelector('#newProfile')
const display = document.querySelector('#existingProfile')

const ppName = localStorage.getItem("ppName")

if (ppName == null) {
    signup.className = "block"
    const submitBtn = document.querySelector('#newProfile input[type=submit]')
    submitBtn.addEventListener("click", () => createProfile())

} else {
    display.className = "block"
    const name = document.querySelector('#myName')
    name.innerHTML = localStorage.getItem('ppName')

    const email = document.querySelector('#myEmail')
    email.innerHTML = localStorage.getItem('ppEmail')

    const phone = document.querySelector('#myPhone')
    phone.innerHTML = localStorage.getItem('ppPhone')

    const deleteBtn = document.querySelector('#existingProfile button')
    deleteBtn.addEventListener("click", () => {
        localStorage.removeItem("ppName")
        localStorage.removeItem("ppEmail")
        localStorage.removeItem("ppPhone")
        window.location.reload()
    })
}

function createProfile() {
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const phone = document.querySelector('#phone')

    if(!name.value || !email.value || !phone.value) {

    } else {
        localStorage.setItem('ppName', name.value)
        localStorage.setItem('ppEmail', email.value)
        localStorage.setItem('ppPhone', phone.value)
        window.location.reload()
    }
}
