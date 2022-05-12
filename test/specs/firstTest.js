describe('Ecommerce Application', async () => {

    it('Login Fail page - Smoke', async () => {
        await browser.url("/loginpagePractise/")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        await $("#username").setValue("secondCSS")
        await $("//input[@type='password']").setValue("learninssg")
        await $("#signInBtn").click()
        await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value') === 'Sign In', {
            timeout: 5000,
            timeoutMsg: 'error message is not displayed'
        })
        await console.log(await $(".alert-danger").getText())
        await expect($("p")).toHaveTextContaining('username is rahulshettyacademy and Password is learning')
    })

    it('Login Success page title - Smoke', async () => {
        await browser.url("/loginpagePractise/")
        await $("input[name='username']").setValue('rahulshettyacademy')
        await $("//input[@type='password']").setValue('learning')
        await $("#signInBtn").click()
        await expect(browser).toHaveUrlContaining("shop")
        await expect(browser).toHaveTitle("ProtoCommerce")

    })
})

//npx wdio run ./wdio.conf.js