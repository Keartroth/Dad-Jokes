import { dadJokeList } from "./jokeList.js";


export const initializeJokeButton = () => {
 document.querySelector("#container").addEventListener(
     "click", 
     theEvent => {
     const theDialog = document.querySelector("#dialog--answer");
     if (theEvent.target.id === "button--answer") {
        theDialog.showModal();
     }
     if (theEvent.target.id === "button--close") {
         theDialog.close();
     }
     if (theEvent.target.id === "newJoke") {
        dadJokeList();
     }
    }
    )
}