const menuSection = document.querySelector(".menu-section")

const studiesLink = document.getElementById('studiesLink')
const SecStudiesLink = document.getElementById('studies')
const SeccStudiesLink = document.querySelector('.studies')

const experiencesLink = document.getElementById('experiencesLink')
const SecExperiencesLink = document.getElementById('experiences')

const projectsLink = document.getElementById('projectsLink')
const SecProjectsLink = document.getElementById('projects')

const contactLink = document.getElementById('contactLink')
const SecContactLink = document.getElementById('contact')


// Menu toggle

menuSection.addEventListener("click",()=>{
    menuSection.classList.toggle("on")
})

// Agregando padding na section

studiesLink.addEventListener('click', ()=>{
    SecStudiesLink.style.paddingTop = "120px"
    SecExperiencesLink.style.paddingTop = "40px"
    SecProjectsLink.style.paddingTop = "40px"
    SecContactLink.style.paddingTop = "40px"
})

experiencesLink.addEventListener('click', ()=>{
    SecStudiesLink.style.paddingTop = "40px"
    SecExperiencesLink.style.paddingTop = "120px"
    SecProjectsLink.style.paddingTop = "40px"
    SecContactLink.style.paddingTop = "40px"
})

projectsLink.addEventListener('click', ()=>{
    SecStudiesLink.style.paddingTop = "40px"
    SecExperiencesLink.style.paddingTop = "40px"
    SecProjectsLink.style.paddingTop = "120px"
    SecContactLink.style.paddingTop = "40px"
})

contactLink.addEventListener('click', ()=>{
    SecStudiesLink.style.paddingTop = "40px"
    SecExperiencesLink.style.paddingTop = "40px"
    SecProjectsLink.style.paddingTop = "40px"
    SecContactLink.style.paddingTop = "120px"
})



