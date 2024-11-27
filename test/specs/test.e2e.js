import { expect, browser, $ } from '@wdio/globals'

describe('My portfolio application', () => {

    // C'est un peu le hello world du test case
    it('Must display my Name', async () => {
        await browser.url('')
        await expect($('#nameTest')).toBeExisting()
        await expect($('#nameTest')).toHaveText(
            expect.stringContaining('Arnaud Pissot'))
    })

    // Ici on paramétrise le test qui va servir à ouvrir mes paragraphes
    const paragraphs = [
        ['istqb', 'Conception de cas de tests'],
        ['hurl', 'Open Source'],
        ['bash', 'Linux, macOS, Windows'],
        ['postman', 'API'],
        ['webdriverio', 'polyvalence avec node.js'],
    ]
    // On teste le même cas paramétrisé
    for (const paragraph of paragraphs) {
        it(`Must display the ${paragraph[0]} paragraph`, async () => {
            await expect($(`#${paragraph[0]}`)).toBeExisting()
            await $(`#${paragraph[0]}`).click()
            await expect($('#modalTest')).toHaveText(
                expect.stringContaining(`${paragraph[1]}`)
            )
            await $('.n-base-close').click()
        })
    }
    
})

