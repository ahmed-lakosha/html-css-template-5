document.querySelectorAll("#btn-pro").forEach((ptn) =>
  ptn.addEventListener("click", function (e) {
    this.lastElementChild.classList.toggle("pro-toggler");
    this.lastElementChild.classList.toggle("fa-eye");
    this.lastElementChild.classList.toggle("fa-eye-slash");
    this.classList.toggle("bg-primary");
    this.classList.toggle("bg-secondary");
  })
);
