const loginPage = require('../pageObjects/loginPage')
const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync('test\testData\loginTest.json'))


describe('Ecommerce Application', async () => {

    credentials.forEach( ({username, password}) => {
    it('Login Fail page', async () => {
        await browser.url("/loginpagePractise/")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        await loginPage.Login(username, password)
        await console.log(await loginPage.alert.getText())
        await browser.waitUntil(async()=>await loginPage.signInBtn.getAttribute('value') === 'Sign In', {
            timeout: 5000,
            timeoutMsg: 'error message is not displayed'
        })
        await console.log(await loginPage.alert.getText())
        await expect(await loginPage.textInfo).toHaveTextContaining('username is rahulshettyacademy and Password is learning')
    })
})

})

//npx wdio run ./wdio.conf.js