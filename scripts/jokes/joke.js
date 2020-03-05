export const jokeHTML = (jokeObject) => {
    return `
    <div class="jokeContainer">
    <h4>Dad Joke: Number ${jokeObject.id}</h4>
    <p>Question: "${jokeObject.question}"</p>
    <p>Answer: "${jokeObject.answer}"</p>
    </div>
    `
}