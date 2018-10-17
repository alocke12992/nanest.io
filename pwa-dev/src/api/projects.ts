import axios from 'axios'

// stubbed projects
const _projects = [
  { 'id': 1, 'title': 'Go to Mars', 'background': 'https://www.tesla.com/content/dam/tesla-site/sx-redesign/img/socialcard/MS.jpg', 'description': 'Step right up and why you should get a one way ticket' },
  { 'id': 2, 'title': 'Go to Mars', 'background': 'https://c1.staticflickr.com/5/4654/25254688767_83c0563d06_b.jpg', 'description': 'Step right up and why you should get a one way ticket' },
  { 'id': 3, 'title': 'Go to Mars', 'background': 'https://cnet4.cbsistatic.com/img/hB4uN0bgKsSaUmdN0mpQOgyd4ik=/970x0/2018/01/26/acff5cc9-37d3-4986-a720-9acf1214ca39/boringcompanyflamethrower.jpg', 'description': 'Step right up and why you should get a one way ticket' },
  { 'id': 4, 'title': 'Go to Mars', 'background': 'https://cnet1.cbsistatic.com/img/FwErVB1ZNEbnsem0ZJPAAtPghiE=/936x527/2018/01/11/0e8ad8f2-83ea-4390-a4e1-cb5475fd978b/hyperloop-one-tour-01707.jpg', 'description': 'Step right up and why you should get a one way ticket' }
]

export let getProjects = (cb: Function) => {
  setTimeout(() => cb(_projects), 100)
}
