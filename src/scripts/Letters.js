import { getLetters, getAuthors, getRecipients } from "./dataAccess.js"

const convertLettersToListElement = (letter) => {
    const authors = getAuthors()
    // const topics = getTopics()
    const recipients = getRecipients()
    const letters = getLetters()

    const foundAuthor = authors.find(
        (author) => {
            return author.id === parseInt(letter.author)
        }
    )

    const foundRecipient = recipients.find(
        (recipient) => {
            return recipient.id === parseInt(letter.recipient)
        }
    )

    const date = new Date()

    return `
    <li class="letterBox">
        <p>Dear ${foundRecipient.name} (${foundRecipient.email}),</p>
        ${letter.letter}
        <p>Sincerely, ${foundAuthor.name} (${foundAuthor.email})</p>
        <button>${letter.topic}</button>
        <p>Sent on ${date}</p>
        
    </li>`
}

export const Letters = () => {
    const letters = getLetters()
    return `
        <ul>
            ${letters.map(
                (letter) => {
                    return convertLettersToListElement(letter)
                }
            ).join("")}
        </ul>
    `
}


// export const Letters = () => {
//     const letters = getLetters()

//     let html = `
//         <ul>
//             ${
//                 letters.map((letter) => convertLettersToListElement(letter)).join("")
//             }
//         </ul>
//     `

//     return html
// }

// const convertLettersToListElement = (letter) => {
//     const recipient = getRecipients()
//     const author = getAuthors()

//     return `
//         <li> 
//         Dear ${recipient.name} (insert email here),
//             ${letter.letter}
//         Sincerely, ${author.name} (insert email here)
//         Sent on (insert date here)
//         </li>`
// }