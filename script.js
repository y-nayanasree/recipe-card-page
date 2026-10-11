
const footer = document.querySelector("footer");

if (footer) {
    const date = new Date();
    footer.title = "Recipe card created on " + date.toLocaleDateString();
}
