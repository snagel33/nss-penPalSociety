import { fetchAuthors, fetchLetters, fetchRecipients } from "./dataAccess.js"
import { PenPal } from "./PenPal.js"


export const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

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