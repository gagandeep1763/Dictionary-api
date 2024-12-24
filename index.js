const inputWord = document.getElementById("inp-word");
const searchBtn = document.getElementById("search-btn");
const wordTitle = document.getElementById("word-title");
const definition = document.getElementById("definition");
const example = document.getElementById("example");

const fetchDefinition = async (word) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) {
            throw new Error("Word not found");
        }
        const data = await response.json();
        const meaning = data[0].meanings[0].definitions[0];
        wordTitle.textContent = word;
        definition.textContent = `Definition: ${meaning.definition}`;
    } catch (error) {
        wordTitle.textContent = "Error";
        definition.textContent = error.message;
    }
};

searchBtn.addEventListener("click", () => {
    const word = inputWord.value.trim();
    if (word) {
        fetchDefinition(word);
    }
});
