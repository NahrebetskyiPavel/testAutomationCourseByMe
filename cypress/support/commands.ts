// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { LoremIpsum } from "lorem-ipsum";


declare global {
    namespace Cypress {
        type SignIn = {
            email?: string,
            name?: string,
            password?: string
        }
        interface Chainable {
            signUp: typeof signUp
            setEmail: typeof setEmail
            setName: typeof setName
            setPassword: typeof setPassword
            setConfirmPassword: typeof setConfirmPassword
            openSignUpForm: typeof openSignUpForm
            greeting: (options?: SignIn) => void
        }
    }
}

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});
export const email = 'greencitypavel+' +  getRandomNumber() + '@gmail.com';
export const pseudonym = lorem.generateWords(1);
export const password = 'Tempm#001';

export function getRandomNumber():number{
    const rndInt = Math.floor(Math.random() * 60000) + 1
    console.log(rndInt)
    return rndInt;
}

export function setEmail(mail?:string, baseConfig:boolean = true) {
    cy.get('#email').type(mail);
}

export function setName(pass?:string, baseConfig:boolean = true) {
    cy.get('#firstName')
}

export function setPassword(pass?:string, baseConfig:boolean = true) {
    cy.get('#password').type(pass);
}

export function setConfirmPassword(passConfirmation: string, baseConfig:boolean = true) {
    cy.get('#repeatPassword').type(passConfirmation);
}

export function openSignUpForm() {
    cy.get(`[class="header_sign-up-btn secondary-global-button"]`).click();
    cy.get( `[class="primary-global-button"]` ).should( 'be.visible' );
}

export function signUp(mail?: string, name?:string, pass?: string, passConfirm?:string, baseConfig:boolean = true) {

    openSignUpForm();
    if (baseConfig){
        setEmail(email);
        setName(pseudonym);
        setPassword(password);
        setConfirmPassword(password);
    } else {
        setEmail(mail);
        setName(name);
        setPassword(pass);
        setConfirmPassword(passConfirm);
    }

    // add commands to Cypress
    Cypress.Commands.add('signUp',signUp);
}

Cypress.Commands.add( 'signUp', signUp )