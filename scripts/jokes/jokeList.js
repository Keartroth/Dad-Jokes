import { useArrayOfDadJokes } from "./jokeDataProvider.js";
import { jokeHTML } from "./joke.js";

const contentElement = document.querySelector("#container");

export const dadJokeList = () => {
    const arrayOfDadJokesCopy = useArrayOfDadJokes();

    let randomNumber = Math.floor(Math.random()*arrayOfDadJokesCopy.length);
    let randomDadJoke = arrayOfDadJokesCopy[randomNumber];
    contentElement.innerHTML = jokeHTML(randomDadJoke);
}