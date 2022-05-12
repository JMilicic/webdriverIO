const expectChai = require('chai').expect

describe('Functional Testing on Application', async () => {
    it('Scrolling and Mouse over', async () => {
        await browser.url("/AutomationPractice/")
        await $('#mousehover').scrollIntoView()
        await browser.pause(3000)
        await $('#mousehover').moveTo()
        await browser.pause(3000)
        await $("=Top").click()
        await browser.pause(3000)
    })

    it('Handling alert messages', async () => {
        await browser.url("https://only-testing-blog.blogspot.com/2014/09/selectable.html")
        await $("button").doubleClick()
        await browser.isAlertOpen()
        expectChai(await browser.isAlertOpen()).to.be.true
        expectChai(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
        await browser.acceptAlert()
    })

    // chapter 44.- Debugging WebDriverIO Code with Visual Studio editor - check again!
    it('Web Tables Sort Validation', async() => {
        await browser.url("/seleniumPractise/#/offers")
        await $("tr th:nth-child(1)").click()
        let veggieLocators = await $$("tr td:nth-child(1)")
        let OriginalVeggieNames = await veggieLocators.map(async veggie => await veggie.getText())
        console.log(OriginalVeggieNames)
        veggies = OriginalVeggieNames.slice() // copy of the originalVeggieNames array
        sortedVeggies = veggies.sort()
        console.log(sortedVeggies)
        expectChai(OriginalVeggieNames).to.eql(sortedVeggies)
    })

    it('Web Tables Filter Validation', async ()=> {
        await browser.url("/seleniumPractise/#/offers")
        await $("#search-field").setValue("tomato")
        const veggieLocators = await $$("tr td:nth-child(1)")
        await expect(veggieLocators).toBeElementsArrayOfSize({eq:1})
        await expect(await veggieLocators[0]).toHaveTextContaining("tomato")
    })
})
//npx wdio run ./wdio.conf.js