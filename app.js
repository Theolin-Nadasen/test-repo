const paragraphs = document.querySelectorAll("p")

paragraphs.forEach((item) => {
    console.log(item.innerText);
    console.log(length(item.innerText));
})