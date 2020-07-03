class Helper {
    static numberFormating(price){
        let formating = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        })
        return formating.format(price)
    }
}

module.exports = Helper;