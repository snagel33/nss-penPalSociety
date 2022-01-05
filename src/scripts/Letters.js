import { getLetters, getAuthors, getRecipients } from "./dataAccess.js"

export const Letters = () => {
    const letters = getLetters()

    let html = `
        <ul>
            ${
                letters.map((letter) => convertLettersToListElement(letter)).join("")
            }
        </ul>
    `

    return html
}

const convertLettersToListElement = (letter) => {
    const recipient = getRecipients()
    const author = getAuthors()

    return `
        <li> 
        Dear ${recipient.name} (insert email here),
            ${letter.letter}
        Sincerely, ${author.name} (insert email here)
        Sent on (insert date here)
        </li>`
}