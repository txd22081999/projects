const links = [
  "https://christmas-landing-page-2208.netlify.app/",
  "https://linkedin-clone-2208.web.app/",
  "https://landing-ui-2208.netlify.app/",
  "https://c-store-e-commerce-site.netlify.app/",
  "https://slack-clone-56d3a.web.app/",
  "https://login-form-iota.vercel.app/",
  "https://mask-ui-2208.netlify.app/",
  "https://card-ui-01-2208.netlify.app/",
  "https://input-field-ui-2208.netlify.app/",
  "https://card-smoke-2208.netlify.app",
  "https://world-ranks-2208.vercel.app/",
  "https://icon-hover-2208.netlify.app/",
];

window.onload = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const index = card.getAttribute("data-index");
    console.log(index);
    if (index) {
      card.addEventListener("click", () => {
        console.log("CLICK");
        window.open(links[index]);
      });
    }
    handleCard(card);
  });
  // console.log(index);
  // console.log(cards);
};

const handleCard = (card) => {
  // const card = document.querySelector("#card1");

  // card.addEventListener("click", () => {
  //   console.log("CLICK");
  //   window.open("https://google.com");
  // });

  console.log(card);

  const copyEmail = card.querySelector("i.email");
  if (!copyEmail) {
    return;
  }
  const email = card.querySelector("span.email").innerText;
  const copyPassword = card.querySelector("i.password");
  const password = card.querySelector("span.password").innerText;

  copyEmail.addEventListener("click", (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
  });

  copyPassword.addEventListener("click", (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(password);
  });
};
