const fileInput = document.getElementById('fileInput');
const soundboard = document.getElementById('soundboard');

fileInput.addEventListener('change', function () {
  const files = Array.from(this.files);

  files.forEach(file => {
    if (file.type.startsWith('audio/')) {
      const url = URL.createObjectURL(file);
      const button = document.createElement('button');
      button.className = 'sound-btn';
      button.textContent = file.name.replace(/\.[^/.]+$/, "");
      button.onclick = () => {
        const audio = new Audio(url);
        audio.play();
      };
      soundboard.appendChild(button);
    }
  });
});
