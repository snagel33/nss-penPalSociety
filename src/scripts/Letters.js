import { getLetters, getAuthors } from "./dataAccess.js"

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
    const authors = getAuthors()
    return `
        <li> 
            ${letter.letter}
            ${authors.name}
        </li>`
}