function previewImage(event) {
    const image = document.getElementById('imagePreview');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = 'block';
}


function generateResume() {
   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    const resumeOutput = document.getElementById("resume-output");
    const image = document.getElementById("imagePreview").src;


    resumeOutput.innerHTML = `
          <img src="${image}" alt="Profile Picture" style="width:120px; height:120px;  border-radius:50%;">
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Education:</h3>
        <p>${education}</p>
        <h3>Work Experience:</h3>
        <p>${experience}</p>
        <h3>Skills:</h3>
        <p>${skills}</p>
    `;

    resumeOutput.classList.add('animated');
}
