const firebaseConfig = {
  apiKey: "AIzaSyDAzZV7BMSpN_Uw3JNya8uMu-Ze1wRbZIo",
  authDomain: "almalink-d2a07.firebaseapp.com",
  databaseURL: "https://almalink-d2a07-default-rtdb.firebaseio.com",
  projectId: "almalink-d2a07",
  storageBucket: "almalink-d2a07.appspot.com",
  messagingSenderId: "62292137866",
  appId: "1:62292137866:web:3c8a6bfedf486d29e85a73",
};

firebase.initializeApp(firebaseConfig);

let alumniDB = firebase.database().ref("alumni_details");

document.getElementById("signupform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = getElementVal("name");
  let email = getElementVal("email");
  let password = getElementVal("password");
  let skills = getElementVal("skills");
  let current_position = getElementVal("current_position");
  let education_qualification = getElementVal("education_qualification");
  let current_company = getElementVal("current_company");

  saveMessages(
    name,
    email,
    password,
    skills,
    current_position,
    education_qualification,
    current_company
  );

  //   enable alert
  document.querySelector(".alert").style.display = "flex";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 2000);

  //   reset the form
  document.getElementById("signupform").reset();
}

const saveMessages = (
  name,
  email,
  password,
  skills,
  current_position,
  education_qualification,
  current_company
) => {
  let newContactForm = alumniDB.push();

  newContactForm.set({
    name: name,
    email: email,
    password: password,
    skills: skills,
    current_position: current_position,
    education_qualification: education_qualification,
    current_company: current_company,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
