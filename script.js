document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll("#mod-list li");
  listItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    }, index * 60);
  });
});
