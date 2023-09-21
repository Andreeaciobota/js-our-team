//Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
//Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
//Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
//Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
//Scott Estrada	Developer	scott-estrada-developer.jpg
//Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg


//background 
const body = document.body;
body.style.backgroundColor = 'rgb(5, 73, 115)';


const team = [
  {
      name: 'Wayne Barnett',
      job: 'Founder & CEO',
      pic: 'wayne-barnett-founder-ceo.jpg'
  },
  {
      name: 'Angela Caroll',
      job: 'Chief Editor',
      pic: 'angela-caroll-chief-editor.jpg'
  },
  {
      name: 'Walter Gordon',
      job: 'Office Manager',
      pic: 'walter-gordon-office-manager.jpg'
  },
  {
      name: 'Angela Lopez',
      job: 'Social Media Manager',
      pic: 'angela-lopez-social-media-manager.jpg'
  },
  {
      name: 'Scott Estrada',
      job: 'Developer',
      pic: 'scott-estrada-developer.jpg'
  },
  {
      name: 'Barbara Ramos',
      job: 'Graphic Designer',
      pic: 'barbara-ramos-graphic-designer.jpg'
  }
]
// pubblico informazioni 

const display = document.getElementById('result')
let listElement = '';
let listName = '';
let listJob = '';
let listPic = '';


for(let i = 0; i < team.length; i++){
  const employee = team[i];

  //creazione  card
  let card = document.createElement('div')
  card.className = '_card';    

  //lista
  listPic = `<ul><img src="../img/${employee['pic']}" alt="">`
  listName = `<li>name: ${employee['name']}</li>`
  listJob = `<li>job: ${employee['job']}</li></ul>`

  // pubblico
  listElement = listPic += listName += listJob
  card.innerHTML = listElement;
  display.append(card)
}