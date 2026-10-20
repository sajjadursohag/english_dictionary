const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") // promise of response
    .then((res) => res.json()) // promise of json data
    .then((json) => displayLesson(json.data));
};

const displayLesson = (lessons) => {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    for (let lesson of lessons) {
        console.log(lesson);
        
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        
                <button class="btn btn-primary btn-outline"><i class="fa-solid fa-book"></i>Lesson - ${lesson.level_no}</button>
              
        `;
        levelContainer.append(btnDiv);
    }
}

loadLessons();
