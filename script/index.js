const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") // promise of response
    .then((res) => res.json()) // promise of json data
    .then((json) => displayLesson(json.data));
};

const removeActive = () => {
  const lessonButons = document.querySelectorAll(".lesson-btn");
  // console.log(lessonButons);
  lessonButons.forEach((btn) => btn.classList.remove("active"));
};

const loadLevelWord = (id) => {
  // console.log(id);
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive(); // remove all active class
      const clickBtn = document.getElementById(`lesson-btn-${id}`);
      clickBtn.classList.add("active"); // add active class
      displayLevelWord(data.data);
    });
};

// {
//   "id": 91,
//   "level": 7,
//   "word": "Ambiguous",
//   "meaning": "অস্পষ্ট",
//   "pronunciation": "অ্যাম্বিগুয়াস",
//   "sentence": "His answer was ambiguous and confusing.",
//   "points": 7,
//   "partsOfSpeech": "adjective",
//   "synonyms": [
//     "unclear",
//     "vague",
//     "equivocal"
//   ]
// }

const loadWordDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  // console.log(url);
  const res = await fetch(url);
  const details = await res.json();
  displayWordDetails(details.data);
  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML = `
  <div class="">
  <h2 class="text-2xl font-bold"> ${word.word}(<i class="fa-solid fa-microphone-lines-slash"></i>) : ${word.pronunciation} </h2>
</div>
<div class="">
  <h2 class="font-bold">
    Meaning
    <p>আগ্রহী </p>
  </h2>
</div>
<div class="">
  <h2 class="font-bold">
    Example
    <p> Lorem ipsum dolor sit amet.</p>
  </h2>
</div>
<div class="">
  <h2 class="font-bold">
    Synonym
   <span class="btn">Syn1</span>
   <span class="btn">Syn2</span>
   <span class="btn">Syn3</span>
  </h2>
</div>




  `;
  document.getElementById("word_modal").showModal();
};
const displayWordDetails = (word) => {
  console.log(word);
};

const displayLevelWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  // {
  //   "id": 4,
  //   "level": 1,
  //   "word": "House",
  //   "meaning": "বাড়ি",
  //   "pronunciation": "হাউস"
  // }

  words.forEach((word) => {
    console.log(word);
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
    <h2 class="font-bold text-2xl">${word.word}</h2>
    <p class="font-semibold">Meaning / Pronounciation</p>
    <div class="text-2xl font-medium font-bangla">"${word.meaning} / ${word.pronunciation}"</div>
    <div class="flex justify-between items-center">
      <button onclick="loadWordDetails(${word.id})" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF]"><i class="fa-solid fa-info"></i></button>
      <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF]"><i class="fa-solid fa-volume"></i></button>
    </div>
  </div>
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
        
                <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-primary btn-outline lesson-btn "><i class="fa-solid fa-book"></i>Lesson - ${lesson.level_no}</button>
              
        `;
    levelContainer.append(btnDiv);
  }
};

loadLessons();
