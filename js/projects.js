import { projects } from './projectsData.js'

export function generateCards(){
const container = document.querySelector('#projects')
projects.forEach(({ name, description, imagepath, url }) => {
  const card = document.createElement('div')
  card.className = 'flex flex-col bg-background text-foreground'
  card.innerHTML = `<h3>${name}</h3><p>${description}</p><a href="${url}">View</a>`
  container.appendChild(card)
})
}



