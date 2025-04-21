const phrases = ["Business Analyst", "Data Enthusiast", "Problem Solver"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false, isEnd = false;
function loop() {
  document.getElementById('typed-text').innerHTML = currentPhrase.join('');
  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      document.getElementById('typed-text').innerHTML = currentPhrase.join('');
    }
    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
    }
    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }
    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  setTimeout(loop, isEnd ? 2000 : isDeleting ? 50 : 100);
}
loop();
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
const projects = [
  { title: "AI Surgical Tool Segmentation", description: "A project using deep learning for tool detection in surgeries." },
  { title: "Stroke Prediction Model", description: "Analyzed stroke data to predict patient outcomes using ML." },
  { title: "Dashboard in Tableau", description: "Interactive dashboards to visualize financial KPIs." }
];
const container = document.getElementById('project-container');
projects.forEach(proj => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p>`;
  container.appendChild(card);
});

