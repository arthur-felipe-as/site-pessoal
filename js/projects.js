import { projects } from './projectsData.js'

export function generateCards(){
const container = document.querySelector('#projects')
projects.forEach(({ name, description, imagepath, url }) => {
  const card = document.createElement('div')
  card.className = 'flex flex-col bg-primary m-2 p-5 max-w-75 rounded-xl'
  card.innerHTML = `<img src="${imagepath}"
  class="rounded-xl"
  /> 
  <h3 class="font-mono font-bold" >${name}</h3>
  <p>${description}</p>
  <a href="${url}">View</a>`
  container.appendChild(card)
})
}



