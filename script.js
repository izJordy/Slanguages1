const belgiumNav = document.querySelector("#belgium");
const spainNav = document.querySelector("#spain");
const unitedkingdomNav = document.querySelector("#unitedkingdom");
const franceNav = document.querySelector("#france");
const belgiumFlag = document.querySelector("#BEflag");
const spainFlag = document.querySelector("#SPflag");
const unitedkingdomFlag = document.querySelector("#UKflag");
const franceFlag = document.querySelector("#FRflag");
const ukraineFlag = document.querySelector("#UKRflag");
const BE = document.querySelector("#BE");
const SP = document.querySelector("#SP");
const FR = document.querySelector("#FR");
const UKR = document.querySelector("#UKR");

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

franceFlag.addEventListener("mouseover", e => {
  FR.classList.add("redbackground");
})

franceFlag.addEventListener("mouseleave", e => {
  FR.classList.remove("redbackground");
})

ukraineFlag.addEventListener("mouseover", e => {
  UKR.classList.add("redbackground");
})

ukraineFlag.addEventListener("mouseleave", e => {
  UKR.classList.remove("redbackground");
})