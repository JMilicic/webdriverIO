describe('Windows and Frames Miscellanous', async () => {

    it('Parent and Child windows switch', async () => {
        await browser.url("/loginpagePractise/")
        await $(".blinkingText").click()
        const handles = await browser.getWindowHandles() // this method will return an array with all the window handles open(2), parent window is index 0
        await browser.switchToWindow(handles[1])
        console.log(await browser.getTitle())
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
        console.log(await browser.getTitle())
        await browser.newWindow("/")
        console.log(await browser.getTitle())
        await browser.switchWindow("/loginpagePractise/")
        await $("#username").setValue("helloISwitchedBack")
    })

    it('Frames switch', async () => {
        await browser.url("/AutomationPractice/")
        await $("#mousehover").scrollIntoView()
        console.log(await $$("a").length) //27
        await browser.switchToFrame(await $("[id='courses-iframe']"))
        console.log(await $('=Courses').getTagName())
        console.log(await $$("a").length) //111
        await browser.switchToFrame(null)// switching back/exit from the frame
    })
})

//npx wdio run ./wdio.conf.js