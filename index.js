const settingsBtn = document.getElementById("settings")
const layoutEl = document.querySelector(".layout")
const addAvatarBtn = document.getElementById("avatar-btn")
const avatarEl = document.querySelector(".avatars")

const arrAvatars = document.querySelectorAll(".avatar")
const profilePic = document.getElementById("profile-pic")


settingsBtn.addEventListener("click",() =>{
    layoutEl.classList.toggle("scale")
})

addAvatarBtn.addEventListener("click",() =>{
    avatarEl.classList.toggle("active")

    if(avatarEl.classList.contains("active")){
    for(let i = 0; i < arrAvatars.length; i++){
        arrAvatars[i].onclick = function changePic() {
            let x = arrAvatars[i].src
            profilePic.src = x
        }
    }
}
})