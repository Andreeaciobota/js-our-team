//Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
//Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
//Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
//Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
//Scott Estrada	Developer	scott-estrada-developer.jpg
//Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg


//background 
const body = document.body;
body.style.backgroundColor = 'rgb(5, 73, 115';




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

const display = document.getElementById('result')
let list = '';
let listName = '';
let listJob = '';
let listPic = '';
display.append(list);

//pubblico 

for(let i = 0; i < team.length; i++){
  const employee = team[i];
  listName = `<li>name: ${employee['name']}</li>`
    listJob = `<li>job: ${employee['job']}</li>`
    listPic = `<img src="../img/${employee['pic']}" alt="">`

    list+= listName += listJob += listPic
}

display.innerHTML = list