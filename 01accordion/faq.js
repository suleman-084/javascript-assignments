const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

//   const accordianBody;
let main = document.querySelector(".accordian_body");
let create = document.createElement("div");
create.className = "header";
main.appendChild(create);

const faqs = [];

function showFaq() {}

function createFaq() {
  for (let i = 0; i < faqData.length; i++) {
    let que = document.createElement("div");
    que.className = "faq";
    let ans = document.createElement("div");
    ans.className = "answers";
    create.appendChild(que);
    create.appendChild(ans);

    que.innerText = faqData[i].question;
    ans.innerText = faqData[i].answer;

    console.log((ans.style.display = "none"));

    que.addEventListener("click", function () {
      if (ans.style.display == "none") {
        ans.style.display = "block";
      } else {
        ans.style.display = "none";
      }
    });
  }
}
createFaq();

function btnStatusUpdate() {}
