class ConfirmationPage{

get typeTheCountry(){
    return $('#country')
}

get loadingSign(){
    return $('.lds-ellipsis')
}

get countrySelection(){
    return $('=India')
}

get purchaseBtn(){
    return $('input[type="submit"]')
}

get alertMessage(){
    return $('.alert-success')
}

async inputCountry(country){
    this.typeTheCountry.setValue(country)
}

}

module.exports = new ConfirmationPage()