import { fetchAuthors, fetchLetters, fetchRecipients } from "./dataAccess.js"
import { PenPal } from "./PenPal.js"


export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchLetters().then(
        () => {
            fetchAuthors().then(
                () => {
                    fetchRecipients().then(
                        () => {
                    mainContainer.innerHTML = PenPal()
                }
                )
            }
            )
        }
        )
}

render()