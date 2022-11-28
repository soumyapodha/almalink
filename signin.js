

const container = document.querySelector(".container");
const show_btn = document.querySelector(".show-btn");
const submit_btn = document.querySelector("#submit-btn")

show_btn.addEventListener("click", () => {
container.style.display = 'block';
});


submit_btn.addEventListener("click", () => {
    container.style.display = 'none';
    alert("Login Successfull");
});
    
