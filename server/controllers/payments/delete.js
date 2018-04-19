const Payments = require('../../model/Payments')

handlePaymentDelete = (req, res, next) => {
    let query = {paymentID: req.body.paymentID}
    Payments.deleteOne(query, (err, callback) =>
    {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: "Payment deleted"
            });
        } 
    });
}

module.exports = { handlePaymentDelete }