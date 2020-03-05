import { dadJokeList } from "./jokeList";

export const initializeJokeButton = () => {
    const getNewJokeButton = document.querySelector(".newJoke");
    getNewJokeButton.addEventListener(
        "click",
        theEvent => {
            dadJokeList();
        }
    )
}