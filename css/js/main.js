
// document.querySelectorAll(".carousel").forEach(carousel => {
//   const items = carousel.querySelectorAll(".carousel-item");
//   const btnHtml = Array.from(items, () => {
//       return `<span class="carousel-btn"></span>`;
//   });
//   carousel.insertAdjacentHTML("beforeend", `
//       <div class="carousel-nav">
//           ${btnHtml.join("")}
//       </div>
//   `);
//   const buttons = carousel.querySelectorAll(".carousel-btn");
//   buttons.forEach((button, i) => {
//       button.addEventListener("click", () => {
//           // Un-select all the items
//           items.forEach(item => item.classList.remove("carousel-item-selected"));
//           buttons.forEach(btn => btn.classList.remove("carousel-btn-selected"));

//           items[i].classList.add("carousel-item-selected");
//           button.classList.add("carousel-btn-selected");
//       });
//   });
//   // Select the first item on page load
//   items[0].classList.add("carousel-item-selected");
//   buttons[0