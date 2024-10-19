const selector = document.querySelector(".flavor-selector");
document.documentElement.setAttribute("flavor", selector.value);
selector.addEventListener("change", function () {
    localStorage.setItem("flavor", this.value);
    document.documentElement.setAttribute("flavor", this.value);
});