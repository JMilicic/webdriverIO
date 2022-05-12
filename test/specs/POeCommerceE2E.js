const expectChai = require('chai').expect
const loginPage = require('../pageObjects/loginPage')
const shop = require('../pageObjects/shop')
const cartOverview = require('../pageObjects/cartOverview')
const confirmationPage = require('../pageObjects/confirmationPage')
const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync('test/testData/loginTest.json'))
let e2eCredentials = JSON.parse(fs.readFileSync('test/testData/e2eTest.json'))

describe('Ecommerce Application', async () => {

    credentials.forEach(  ({username, password}) => {
    it('End to End Checkout Flow - Smoke', async () => {
        products = ["iphone X", "Blackberry"]
        await browser.url("/loginpagePractise/")
        await browser.maximizeWindow()
        await loginPage.Login(username, password)
        await shop.checkoutBtn.waitForDisplayed()
        await shop.addProductsToCart(products)       
        await shop.checkoutBtn.click()
        productsSum = await cartOverview.sumOfProducts()
        totalValue = await cartOverview.totalFormattedPrice()
        
        await expectChai(productsSum).to.equal(totalValue)

        await cartOverview.checkoutBtn.click()
        await confirmationPage.inputCountry('ind')
        await confirmationPage.loadingSign.waitForExist({reverse:true})
        await confirmationPage.countrySelection.click()
        await confirmationPage.purchaseBtn.click()
        await expect(confirmationPage.alertMessage).toHaveTextContaining('Success')

    })
})
})

//npx wdio run ./wdio.conf.js