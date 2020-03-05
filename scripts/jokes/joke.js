export const jokeHTML = (jokeObject) => {
    return `
    <div class="jokeContainer">
    <h4>Dad Joke</h4>
    <h6>Number ${jokeObject.id}</h6>
    <p>Question: "${jokeObject.question}"</p>
    <p>Answer: "${jokeObject.answer}"</p>
    <button class="newJoke">See another!</button>
    </div>
    `
}