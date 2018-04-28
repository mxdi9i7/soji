const Payments = require('../../model/Payments')
const { itemsPerPage } = require('../../constant')
const pagination = require('../pagination')

fetchPaymentsWithFilter = (req, res) => {
    let page = req.query.page
    let query = {}

    Payments.find({}, (err, payments) => {
        let paginationData = pagination(payments, itemsPerPage, page)
        const data = {
            pageCount: paginationData.pageCount,
            results: paginationData.results,
            totalCount: paginationData.totalCount,
            page: Number(page)
        }
        res.json({
            success: true,
            data: data
        })
    })
}

fetchPaymentsByClient = (req, res) => {
    const { clientID } = req.query
    Payments.find({clientID}, (err, payments) => {
        res.json({
            success: true,
            data: payments
        })
    })
}
module.exports = {
    fetchPaymentsWithFilter, fetchPaymentsByClient
}