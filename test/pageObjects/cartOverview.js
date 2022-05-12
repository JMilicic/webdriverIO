class CartOverview {

get productPrices(){
    return $$('tr td:nth-child(4) strong')
}

get totalPrice(){
    return $ ('h3 strong')
} 

get checkoutBtn(){
    return $('.btn-success')
}

async sumOfProducts(){
    const sumOfProducts = (await Promise.all (await this.productPrices.map(async (productPrice) => parseInt((await productPrice.getText()).split('.')[1].trim())))) // amount[1] = $.13000 - it stores the dollar sign in amount[0]
    .reduce((acc, price) => acc + price, 0)
}

async totalFormattedPrice(){
    const totalValue = parseInt((await this.totalPrice.getText()).split('.')[1].trim())
}

}

module.exports = new CartOverview()