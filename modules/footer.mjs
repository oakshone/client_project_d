export function footer() {

    const social = document.createElement('section')
    social.className = "flex justify-evenly py-4 bg-mygrey-50 mt-5"


    const face = document.createElement('a')
    face.href = "#"
    face.target = "_blank"
    face.className = "w-10 h-10 p-2 rounded bg-myprimary shadow-sm border-2 border-mygrey-30 hover:bg-primary"
    const faceImg = document.createElement('img')
    faceImg.src = "images/facebook.svg"
    faceImg.alt = "facebook icon"
    faceImg.className ="size-full"
    face.appendChild(faceImg)
    social.appendChild(face)

    const twitter = document.createElement('a')
    twitter.href = "#"
    twitter.target = "_blank"
    twitter.className = "w-10 h-10 p-2 rounded bg-myprimary shadow-sm border-2 border-mygrey-30 hover:bg-primary"
    const twitterImg = document.createElement('img')
    twitterImg.src = "images/twitter.svg"
    twitterImg.alt = "twitter icon"
    twitterImg.className ="size-full"
    twitter.appendChild(twitterImg)
    social.appendChild(twitter)

    const instagram = document.createElement('a')
    instagram.href = "#"
    instagram.target = "_blank"
    instagram.className = "w-10 h-10 p-2 rounded bg-myprimary shadow-sm border-2 border-mygrey-30 hover:bg-primary"
    const instagramImg = document.createElement('img')
    instagramImg.src = "images/instagram.svg"
    instagramImg.alt = "instagram icon"
    instagramImg.className ="size-full"
    instagram.appendChild(instagramImg)
    social.appendChild(instagram)

    const tiktok = document.createElement('a')
    tiktok.href = "#"
    tiktok.target = "_blank"
    tiktok.className = "w-10 h-10 p-2 rounded bg-myprimary shadow-sm border-2 border-mygrey-30 hover:bg-primary"
    const tiktokImg = document.createElement('img')
    tiktokImg.src = "images/tiktok.svg"
    tiktokImg.alt = "tiktok icon"
    tiktokImg.className ="size-full"
    tiktok.appendChild(tiktokImg)
    social.appendChild(tiktok)


    const copyright = document.createElement('section')
    copyright.innerHTML = `<p class="bg-mygrey-90 text-center text-mygrey-30 p-2">&copy; ${new Date().getFullYear()} Jackson Nieporte DWDD 2620</p>`


    const footerElement = document.querySelector("footer")
    footerElement.appendChild(social)
    footerElement.appendChild(copyright)
}