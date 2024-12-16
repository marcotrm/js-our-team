// DOM ELEMENTS
    const teamContainer = document.querySelector(".team-container")
    const memberFormElm = document.getElementById("member-form")
    const nameElm = document.getElementById("name")
    const roleElm = document.getElementById("role")
    const emailElm = document.getElementById("email")
    const imageElm = document.getElementById("image")
// DOM ELEMENTS
const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    }
  ];

  // FUNCTIONS
  function createCardMember (member){
    const {name, role, email, img} = member;
    const card = `
          <div class="card-team bg-black d-flex">
              <div class="card_img">
                  <img src="./${img}" alt="${name}">
              </div>
              <div class="card_info text-light p-3 me-4">
                  <h4><strong>${name}</strong></h4>
                  <p>${role}</p>
                  <a id="email" href="#">${email}</a>
              </div>
          </div>`;
     return card;     
  }
  // FUNCTIONS
  
  // PRINT OF EACH MEMBERS
  let listItem =""
  for (let i = 0; i < teamMembers.length; i++) {
    const {name, role, email, img} = teamMembers[i];
    listItem += createCardMember(teamMembers[i])
  }
  teamContainer.innerHTML = listItem;