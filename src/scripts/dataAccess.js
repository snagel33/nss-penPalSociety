import { mainContainer } from "./main.js"

const applicationState = {
    authors: [],
    recipients: [],
    letters: []
}

const API = "http://localhost:8088"

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (serviceLetters) => {
                // Store the external state in application state
                applicationState.letters = serviceLetters
            }
        )
}

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (serviceAuthors) => {
                // Store the external state in application state
                applicationState.authors = serviceAuthors
            }
        )
}

export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (serviceRecipients) => {
                // Store the external state in application state
                applicationState.recipients = serviceRecipients
            }
        )
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}

export const sendLetter = (userServiceLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceLetter)
    }

    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {

        })
}