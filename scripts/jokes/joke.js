export const jokeHTML = (jokeObject) => {
    return `
    <div class="jokeContainer">
    <h4>Coach Steve's Dad Jokes</h4>
    <h6>Joke Number ${jokeObject.id}</h6>
    <p>Question: "${jokeObject.question}"</p>
    <button id="button--answer">Answer</button>
    <dialog id="dialog--answer">
    <button id="button--close">❌</button>
        <p>Answer: "${jokeObject.answer}"</p>
        <button id="newJoke">See another!</button>
    </dialog>
    </div>
    `
}