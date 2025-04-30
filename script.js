const fileInput = document.getElementById("fileInput");
const soundboard = document.getElementById("soundboard");

fileInput.addEventListener("change", () => {
  const files = Array.from(fileInput.files);

  files.forEach(file => {
    if (file.type.startsWith("audio/")) {
      const audioURL = URL.createObjectURL(file);
      const btn = document.createElement("button");
      btn.className = "sound-btn";
      btn.textContent = file.name.replace(/\.[^/.]+$/, ""); // remove file extension

      btn.onclick = () => {
        const audio = new Audio(audioURL);
        audio.play();
      };

      soundboard.appendChild(btn);
    }
  });

  fileInput.value = ""; // allow uploading same file again
});
