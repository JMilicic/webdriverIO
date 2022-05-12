const expectChai = require('chai').expect

describe('Ecommerce Application', async () => {

    it('End to End Checkout Flow', async () => {
        const products = ['iphone X', 'Blackberry']
        await browser.url("/loginpagePractise/")
        await browser.maximizeWindow()
        await $("input[name='username']").setValue('rahulshettyacademy')
        await $("//input[@type='password']").setValue('learning')
        await $("#signInBtn").click()
        // await checkoutButton.waitForExist() //linkText - * means its partial text
        const checkoutBtn = await $(".btn-primary")
        await checkoutBtn.waitForDisplayed()
        
        const cards = await $$("div[class='card h-100']")
        for (let i = 0; i < await cards.length; i++){
            const card = await cards[i].$('div h4 a')
            if(products.includes(await card.getText())){
                await cards[i].$('.card-footer button').click()
            }
        }
        await checkoutBtn.click()
        productPrices = await $$('tr td:nth-child(4) strong')
        const sumOfProducts = (await Promise.all (await productPrices.map(async (productPrice) => parseInt((await productPrice.getText()).split('.')[1].trim())))) // amount[1] = $.13000 - it stores the dollar sign in amount[0]
            .reduce((acc, price) => acc + price, 0)
        const totalValue = parseInt((await $ ('h3 strong').getText()).split('.')[1].trim())
        await expectChai(sumOfProducts).to.equal(totalValue)

        await $('.btn-success').click()
        await $('#country').setValue('ind')
        await $('.lds-ellipsis').waitForExist({reverse:true})
        await $('=India').click()
        await $('input[type="submit"]').click()
        await expect($('.alert-success')).toHaveTextContaining('Success')

    })
})

//npx wdio run ./wdio.conf.js