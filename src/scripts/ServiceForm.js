import { getAuthors, getRecipients, sendLetter } from "./dataAccess.js"

export const ServiceForm = () => {
    const authors = getAuthors()
    const recipients = getRecipients()
    let html = `
        <div class="field">
            <label class="label" for="author">Author</label>
            <select class="authors" name="author" id="authors">
            <option value="">Choose author...</option>
            ${
                authors.map(
                    author => {
                        return `<option value="${author.id}">${author.name}</option>`
                    }
                ).join("")
            }
            </select>
        </div>

        <div class="textArea">
            <label class="label" for="letter">Letter</label>
            <textArea type="text" name="letterBox" class="input" /></textArea>
        </div>
        
        <div class="topic">
            <label class="label" for="topics">Topics</label>

            <input type="radio" id="business" name="topics" value="business" />
            <label for="business">Business</label>

            <input type="radio" id="friendly" name="topics" value="friendly" />
            <label for="friendly">Friendly</label>

            <input type="radio" id="family" name="topics" value="family" />
            <label for="family">Family</label>

            <input type="radio" id="congratulations" name="topics" value="congratulations" />
            <label for="congratulations">Congratulations</label>

            <input type="radio" id="condolences" name="topics" value="condolences" />
            <label for="condolences">Condolences</label>
        </div>

        <div class="field">
            <label class="label" for="recipient">Recipient</label>
            <select class="recipients" name="recipient" id="recipients">
            <option value="">Choose recipient...</option>
            ${
                recipients.map(
                    recipient => {
                        return `<option value="${recipient.id}">${recipient.name}</option>`
                    }
                ).join("")
            }
            </select>
        </div>

        <button class="button" id="sendLetter">Send Letter</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const userAuthor = document.querySelector("select[class='authors']").value
        const userLetter = document.querySelector("textArea[name='letterBox']").value
        const userTopic = document.querySelector("input[name='topics']:checked").value
        const userRecipient = document.querySelector("select[class='recipients']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            author: userAuthor,
            letter: userLetter,
            topic: userTopic,
            recipient: userRecipient
        }

        // Send the data to the API for permanent storage
        sendLetter(dataToSendToAPI)
    }
})