// Toggle menu open/close
const hamburger = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar ul");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});



const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(l => l.classList.remove('active')); // Remove active from all
    this.classList.add('active'); // Add to clicked one
  });
});

//commitee clubs
function showClubDescription() {
    const selected = document.getElementById("clubSelector").value;
    const clubs = document.querySelectorAll(".committee-box");

    clubs.forEach(club => {
      if (club.id === selected) {
        club.style.display = "block";
      } else {
        club.style.display = "none";
      }
    });
  }
  function showClub() {
  const selected = document.getElementById("clubDropdown").value;
  const clubs = document.querySelectorAll(".club-content");

  clubs.forEach(club => club.style.display = "none"); // Hide all
  if (selected) {
    document.getElementById(selected).style.display = "block"; // Show selected
  }
}



  //events
    function toggleSemester(id) {
      const semesters = document.querySelectorAll('.semester-events');
      semesters.forEach(sem => {
        if (sem.id === id) {
          sem.style.display = sem.style.display === 'block' ? 'none' : 'block';
        } else {
          sem.style.display = 'none';
        }
      });

      // Hide all events when switching semester
      const events = document.querySelectorAll('.event-detail');
      events.forEach(event => event.style.display = 'none');
    }

    function showEvent(eventId) {
      const allEvents = document.querySelectorAll('.event-detail');
      allEvents.forEach(event => {
        if (event.id === eventId) {
          event.style.display = event.style.display === 'block' ? 'none' : 'block';
        } else {
          event.style.display = 'none';
        }
      });
    }


function showfeedbackEvent(key) {
  const event = events[key];
  document.getElementById('event-title').innerText = event.title;
  document.getElementById('event-date').innerText = event.date;
  document.getElementById('event-participants').innerText = event.participants;
  document.getElementById('event-description').innerText = event.description;

  const photoDiv = document.getElementById('event-photos');
  photoDiv.innerHTML = "";
  event.photos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo;
    img.onclick = () => openFullScreen(photo);
    photoDiv.appendChild(img);
  });

  document.getElementById('event-details').style.display = "block";
}
function viewList() {
  alert("Redirecting to full participants list (you can link a file or modal here).");
}

function openFullScreen(src) {
  const imgWindow = window.open("", "_blank");
  imgWindow.document.write(`<img src="${src}" style="width:100%"/>`);
}


  function toggleEventSection() {
    const section = document.getElementById('eureka-jidnyasa-section');
    section.style.display = section.style.display === 'none' || section.style.display === '' ? 'block' : 'none';
  }


  
//for events
  
  function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

  function toggleEvent(id) {
    // First hide all other event-details
    const allDetails = document.querySelectorAll('.event-details');
    allDetails.forEach(detail => {
      if (detail.id !== id) {
        detail.style.display = "none";
      }
    });

    // Then toggle the selected one
    const clickedDetail = document.getElementById(id);
    if (clickedDetail.style.display === "block") {
      clickedDetail.style.display = "none";
    } else {
      clickedDetail.style.display = "block";
    }
  }




//oraganizing

 
const members = {
    hod: {
      name: "Dr. S. T. Jadhav",
      title: "Head of Department",
      image: "images/hod.jpg",
      description: `Dear ETESA Committee Members,
I extend my heartfelt appreciation to each of you for your dedication and enthusiastic efforts in driving the activities of the Electronics and Telecommunication Engineering Students' Association. Your initiatives are vital in fostering technical excellence, leadership, and a strong sense of community among our students.
Let us continue to work together to make ETESA a platform for innovation, collaboration, and holistic growth. Wishing you all the best for a productive and successful academic year ahead.
<br> Warm regards,<br>

Dr. S. T. Jadhav <br>
Head of Department <br>
Electronics and Telecommunication Engineering

`
    },
    advisor: {
      name: "Dr. A. S. Mali",
      title: "Faculty Advisor",
      image: "images/advisor.jpg",
      description: `Dear Students,
It gives me immense pleasure to extend warm greetings to all members of the Electronics and Telecommunication Engineering Student Association (ETESA). This association serves as a vibrant platform for students to nurture their technical, professional, and leadership abilities beyond the classroom environment.
As the Faculty Coordinator, I firmly believe that active participation in such student-led bodies is essential for holistic development. Through ETESA, we aim to bridge the gap between academic learning and real-world applications by organizing technical workshops, seminars, industrial visits, project exhibitions, and cultural activities. These initiatives not only strengthen technical proficiency but also foster teamwork, innovation, and communication skills among students.
I encourage each one of you to take full advantage of the opportunities provided, contribute with enthusiasm, and grow as responsible technocrats. Let us work together to make ETESA a platform of excellence, creativity, and unity.
Wishing you all a successful and enriching academic journey ahead.<br>
Warm regards.`


    },
    president: {
      name: "Mr. Tejas Mane",
      title: "President",
      image: "images/president.jpg",
      description: `Serving as the President of the ETESA committee was a valuable and memorable part of my academic journey. Throughout this period, I led a passionate team to plan and execute a wide range of activities including technical sessions, competitions, industrial visits, social initiatives, and cultural events. We introduced new ideas to engage students from all years and created platforms for them to showcase their skills and talents.

I focused on improving student participation, bringing more collaboration between faculty and students, and ensuring smooth coordination among committee members. Under my leadership, we also improved event planning, documentation, and feedback systems.

This experience helped me grow in areas like decision-making, public speaking, time management, and team motivation. Most importantly, it taught me the value of responsibility and the impact of working together toward a common goal.`
    },
    vicepresident: {
      name: "Bhakti Yadav",
      title: "Vice-President",
      image: "images/vcpresident.jpg",
      description: `Dear ETESA Members,

It is with great pride and gratitude that I reflect on my journey as the Vice President of the Electronics and Telecommunication Engineering Student Association (ETESA). This association has not only provided me with a platform to contribute to the department's growth but also helped me evolve as a leader, a collaborator, and a responsible student.

Working alongside a passionate team, I had the opportunity to lead and coordinate various events—ranging from technical workshops and industrial visits to cultural celebrations and project exhibitions. Each initiative was driven by the collective spirit of innovation, teamwork, and excellence. These experiences have greatly enhanced my skills in communication, problem-solving, planning, and people management.

Inspired by the vision of our faculty and the mission of ETESA, I strived to bridge the gap between classroom learning and practical exposure. I encourage all members to actively participate, explore your interests, and make the most of this incredible platform.

Together, let’s continue to make ETESA a symbol of creativity, unity, and technical brilliance.<br>

Warm regards,<br>
Bhakti Yadav.

`
    },
    treasurer: {
      name: "Sahil Bhosale",
      title: "Treasurer",
      image: "images/treasurer.jpg",
      description:`Being entrusted with the role of Treasurer of the Electronics and Telecommunication Engineering Student Association (ETESA) has been a truly enriching experience. This position allowed me to take on the responsibility of managing finances with transparency and precision, ensuring that every event and initiative was executed smoothly and efficiently.

Beyond numbers and budgets, this role taught me the importance of accountability, planning, and coordination. I closely worked with the organizing team to allocate resources effectively for technical workshops, industrial visits, cultural events, and various student-led activities. Through this journey, I developed strong skills in budgeting, financial reporting, and team collaboration.

ETESA is not just an association—it’s a platform for every student to grow personally and professionally. I urge all of you to participate actively, contribute wholeheartedly, and make the most of every opportunity this vibrant community offers.

Let’s continue building a legacy of excellence and teamwork.
`
    },
    secretary: {
      name:"Sanjivani Ghorapade",
      title: "Secretary",
      image: "images/secretory.jpg",
      description:`Being entrusted with the role of Treasurer of the Electronics and Telecommunication Engineering Student Association (ETESA) has been a truly enriching experience. This position allowed me to take on the responsibility of managing finances with transparency and precision, ensuring that every event and initiative was executed smoothly and efficiently.

Beyond numbers and budgets, this role taught me the importance of accountability, planning, and coordination. I closely worked with the organizing team to allocate resources effectively for technical workshops, industrial visits, cultural events, and various student-led activities. Through this journey, I developed strong skills in budgeting, financial reporting, and team collaboration.

ETESA is not just an association—it’s a platform for every student to grow personally and professionally. I urge all of you to participate actively, contribute wholeheartedly, and make the most of every opportunity this vibrant community offers.

Let’s continue building a legacy of excellence and teamwork.
`
    }
  };
function showpersonDescription(role) {
  const person = members[role];
  const box = document.getElementById("person-description");

  if (!person) return;

  // 👉 Make the box visible
  box.style.display = "block";

  // 👉 Update its content
  box.innerHTML = `
    <div class="card">
      <img src="${person.image}" alt="${person.name}" class="person-img" />
      <h3>${person.name}</h3>
      <h4>${person.title}</h4>
      <p>${person.description}</p>
    </div>
  `;
}
  



//for feedback

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw5stS_9HKkSw1jPS1EXwRX3ei2L1Q0RWUl9BqcPLCVpaIxqS94Pkdk2StHSNA6gc92tw/exec';
  const form = document.getElementById('feedbackForm');
  const responseMsg = document.getElementById('responseMsg');

  form.addEventListener('submit', e => {
    e.preventDefault(); // Stop page reload
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        if (response.ok) {
          responseMsg.textContent = '✅ Your feedback has been successfully submitted!';
          responseMsg.style.color = 'green';
          form.reset();
        } else {
          responseMsg.textContent = '❌ Submission failed. Please try again.';
          responseMsg.style.color = 'red';
        }
      })
      .catch(error => {
        responseMsg.textContent = '❌ Check your internet connection!';
        responseMsg.style.color = 'red';
        console.error('Error!', error.message);
      });
  });
 AOS.init({
    duration: 1000,// animation duration in ms
    once: true // animate only once
  });
