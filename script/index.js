const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") // promise of response
    .then((res) => res.json()) // promise of json data
    .then((json) => displayLesson(json.data));
};

const loadLevelWord = (id) => {
  // console.log(id);
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  // wordContainer.innerHTML = "";

  words.forEach((word) => {
    console.log(word);
    const card = document.createElement("div");
    card.innerHTML = `
        <p>Cat</p>
        `;
    wordContainer.append(card);
  });
};

const displayLesson = (lessons) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  for (let lesson of lessons) {
    console.log(lesson);

    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        
                <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-primary btn-outline"><i class="fa-solid fa-book"></i>Lesson - ${lesson.level_no}</button>
              
        `;
    levelContainer.append(btnDiv);
  }
};

loadLessons();
