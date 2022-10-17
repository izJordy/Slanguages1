const belgiumNav = document.querySelector("#belgium");
const spainNav = document.querySelector("#spain");
const unitedkingdomNav = document.querySelector("#unitedkingdom");
const belgiumFlag = document.querySelector("#BEflag");
const spainFlag = document.querySelector("#SPflag");
const unitedkingdomFlag = document.querySelector("#UKflag");
const BE = document.querySelector("#BE")
const SP = document.querySelector("#SP")

belgiumNav.addEventListener("mouseover", e => {
  BE.classList.add("redbackground");
})

belgiumNav.addEventListener("mouseleave", e => {
  BE.classList.remove("redbackground");
})

spainNav.addEventListener("mouseover", e => {
  SP.classList.add("redbackground");
})

spainNav.addEventListener("mouseleave", e => {
  SP.classList.remove("redbackground");
})

belgiumFlag.addEventListener("mouseover", e => {
  BE.classList.add("redbackground");
})

belgiumFlag.addEventListener("mouseleave", e => {
  BE.classList.remove("redbackground");
})

spainFlag.addEventListener("mouseover", e => {
  SP.classList.add("redbackground");
})

spainFlag.addEventListener("mouseleave", e => {
  SP.classList.remove("redbackground");
})

unitedkingdomFlag.addEventListener("mouseover", e => {
  UK.classList.add("redbackground");
})

unitedkingdomFlag.addEventListener("mouseleave", e => {
  UK.classList.remove("redbackground");
})