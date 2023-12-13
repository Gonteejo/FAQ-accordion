const faqs = document.querySelectorAll(".faq__item");
faqs.forEach((faq) => {
  const button = faq.querySelector("h2");
  const image = faq.querySelector("h2 img");
  const paragraph = faq.querySelector("p");
  button.addEventListener("click", () => {
    if (paragraph.className === "hiden") {
      paragraph.className = "show";
      image.src = "assets/images/icon-minus.svg";
    } else {
      paragraph.className = "hiden";
      image.src = "assets/images/icon-plus.svg";
    }
  });
});
