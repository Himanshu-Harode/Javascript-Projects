const accordionData = [
  {
    id: 1,
    question: "What does MERN stand for?",
    answer:
      "MERN stands for MongoDB, Express.js, React.js, and Node.js. It’s a popular full-stack JavaScript framework for building modern web applications.",
  },
  {
    id: 2,
    question: "Why use the MERN stack?",
    answer:
      "The MERN stack lets you build powerful single-page applications using one language — JavaScript — across the entire stack, from database to frontend.",
  },
  {
    id: 3,
    question: "What is MongoDB?",
    answer:
      "MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents instead of tables and rows.",
  },
  {
    id: 4,
    question: "What is Express.js?",
    answer:
      "Express.js is a minimal, fast Node.js web application framework. It simplifies building RESTful APIs by providing robust routing and middleware support.",
  },
  {
    id: 5,
    question: "What is React.js?",
    answer:
      "React.js is a frontend JavaScript library for building user interfaces. It uses reusable components and a virtual DOM for fast rendering.",
  },
  {
    id: 6,
    question: "What is Node.js?",
    answer:
      "Node.js is a runtime environment that allows you to run JavaScript on the server side. It’s built on Chrome’s V8 engine for high performance.",
  },
  {
    id: 7,
    question: "How do you handle authentication in MERN?",
    answer:
      "You can use tools like JWT (JSON Web Tokens), Passport.js, or OAuth with Express and MongoDB to implement secure user authentication.",
  },
  {
    id: 8,
    question: "What tools help manage state in React apps?",
    answer:
      "Popular state management options include React’s built-in Context API, Redux, Zustand, and React Query for server state.",
  },
  {
    id: 9,
    question: "How do you deploy a MERN app?",
    answer:
      "A common approach is deploying the frontend on Vercel or Netlify, and the backend on Heroku, Render, or a VPS like DigitalOcean. MongoDB Atlas is popular for database hosting.",
  },
  {
    id: 10,
    question: "What is the benefit of using REST APIs in MERN?",
    answer:
      "REST APIs separate frontend and backend logic. React handles the UI, while Express + Node serve data through API endpoints connected to MongoDB.",
  },
]

const accordion = document.querySelector(".accordion")

function createAccordion() {
  accordion.innerHTML = accordionData
    .map(
      ({ id, question, answer }) => `
  <div class="accordion-item" key=${id}>
    <div class="accordion-title">
        <p>${question}</p>
        <i class="fa-solid fa-chevron-right">
        </i>
    </div>
    <p class="accordion-content">${answer}</p>
  </div>
  `
    )
    .join("")
}

createAccordion()

const getAccordionTitle = document.querySelectorAll(".accordion-title")
const getIconName = document.querySelectorAll(".fa-chevron-right")

getAccordionTitle.forEach((currentItem) => {
  currentItem.addEventListener("click", (e) => {
    const icon = currentItem.querySelector("i")
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active")
      icon.classList.remove("fa-chevron-down")
      icon.classList.add("fa-chevron-right")
    } else {
      getAccordionTitle.forEach((item) => {
        item.classList.remove("active")
        const itemIcon = item.querySelector("i")
        itemIcon.classList.remove("fa-chevron-down")
        itemIcon.classList.add("fa-chevron-right")
      })
      currentItem.classList.add("active")
      icon.classList.add("fa-chevron-down")
      icon.classList.remove("fa-chevron-right")
    }
  })
})
