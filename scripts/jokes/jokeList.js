import { useArrayOfDadJokes } from "./jokeDataProvider.js";
import { jokeHTML } from "./joke.js";

const contentElement = document.querySelector("#container");

export const dadJokeList = () => {
    const arrayOfDadJokesCopy = useArrayOfDadJokes();

    for (const dadJokeObject of arrayOfDadJokesCopy) {
        contentElement.innerHTML += jokeHTML(dadJokeObject);
    }
}