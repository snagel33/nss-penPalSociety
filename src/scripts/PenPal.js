import { ServiceForm } from "./ServiceForm.js"
import { Letters } from "./Letters.js"


export const PenPal = () => {
    return `
        <h1>Pen Pal Society</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="letters">
            <h2>Letters</h2>
            ${Letters()}
        </section>
    `
}