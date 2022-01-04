import { getAuthors, getRecipients } from "./dataAccess.js"

export const ServiceForm = () => {
    const authors = getAuthors()
    const recipients = getRecipients()
    let html = `
        <div class="field">
            <label class="label" for="author">Author</label>
            <select class="authors" id="authors">
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

        <div class="field">
            <label class="label" for="letter">Letter</label>
            <input type="text" name="letterBox" class="input" />
        </div>
        
        <div class="topic">
            <label class="label" for="topics">Topics</label>

            <input type="radio" id="business" name="topic" value="business" />
            <label for="business">Business</label>

            <input type="radio" id="friendly" name="topic" value="friendly" />
            <label for="friendly">Friendly</label>

            <input type="radio" id="family" name="topic" value="family" />
            <label for="family">Family</label>

            <input type="radio" id="congratulations" name="topic" value="congratulations" />
            <label for="congratulations">Congratulations</label>

            <input type="radio" id="condolences" name="topic" value="condolences" />
            <label for="condolences">Condolences</label>
        </div>

        <div class="field">
            <label class="label" for="recipient">Recipient</label>
            <select class="recipients" id="recipients">
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