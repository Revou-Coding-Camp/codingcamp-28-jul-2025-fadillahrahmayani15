// Replace [Name] with actual name
document.addEventListener("DOMContentLoaded", () => {
  const name = "Harfi"; // ganti dengan input dinamis bila perlu
  document.getElementById("welcomeText").innerText = `Hi ${name}, Welcome To Website`;

  const form = document.getElementById("contactForm");
  const output = {
    name: document.getElementById("outName"),
    dob: document.getElementById("outDob"),
    gender: document.getElementById("outGender"),
    message: document.getElementById("outMessage"),
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputName = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("message").value;

    output.name.innerText = inputName;
    output.dob.innerText = dob;
    output.gender.innerText = gender;
    output.message.innerText = message;

    const now = new Date().toLocaleString();
    document.getElementById("currentTime").innerText = now;
  });
});
