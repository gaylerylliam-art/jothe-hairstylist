const filterButtons = document.querySelectorAll(".service-tabs button");
const albumCards = document.querySelectorAll(".album-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    albumCards.forEach((card) => {
      const isVisible = selected === "all" || card.dataset.category === selected;
      card.hidden = !isVisible;
    });
  });
});
