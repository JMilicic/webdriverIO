const expectChai = require('chai').expect

describe('UI Controls Test Suite', async () => {

    //dropdowns 

    it('UI Controls', async () => {
        await browser.url("/loginpagePractise/")
        await $("input[name='username']").setValue('rahulshettyacademy')
        await $("//input[@type='password']").setValue('learning')
        const radioButtons = await $$(".customradio") //$$ it will find all the elements
        const userDropdown = radioButtons[1]
        await userDropdown.$("span").click() //chaining locators - span inside of a parent element
        const modal = await $('.modal-body')
        await modal.waitForDisplayed()
        await $('#cancelBtn').click()
        console.log(await $$(".customradio")[0].$("span").isSelected())
        await userDropdown.$("span").click()
        await modal.waitForDisplayed()
        await $('#okayBtn').click()
        await $$(".customradio")[0].$("span").click()
        await expect(modal).not.toBeDisabled()
        const dropDownMeny = await $("select.form-control") //select tag - then only you can use selectByAttribute and so on
        await dropDownMeny.selectByAttribute('value', 'teach')
        await dropDownMeny.selectByVisibleText("Consultant")
        await dropDownMeny.selectByIndex(0)
        expectChai(await dropDownMeny.getValue()).to.equal("stud")
    })

    it('Dynamic Dropdown Controls', async () => {
        await browser.url('/AutomationPractice/')
        await $('#autocomplete').setValue("ind")
        let items= await $$("[class='ui-menu-item'] div")
        for (var i= 0; i <await items.length; i++){
          if(await items[i].getText() === "India") {
              await items[i].click()
          }
        }

    })

    it('Checkbox Identification', async () => {
        await browser.url('/AutomationPractice/')
        let checkboxes = await $$("input[type='checkbox']")
        await checkboxes[0].click()
        await checkboxes[0].isSelected()
        await browser.saveScreenshot("screenshot.png") //take a screenshot
    })
})

//npx wdio run ./wdio.conf.js