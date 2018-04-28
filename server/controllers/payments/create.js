const Payments = require('../../model/Payments');


handlePaymentCreate = (req, res, next) => {
    let paymentArray;
    let paymentID;

    Payments.distinct('paymentID', (err, callback) =>
    {
        paymentArray = callback;
    }).then(function(){
        do {
            paymentID = String(parseInt(Math.random()*100000));
            while (paymentID.length < 5)
            {
                paymentID = '0' + paymentID;
            }
        }
        while (JSON.stringify(paymentArray).indexOf(paymentID) != -1);

        let newPayment = new Payments
        ({
            paymentID: paymentID,
            name: req.body.name,
            accountNumber: req.body.accountNumber,
            company: req.body.company,
            bank: req.body.bank,
            transferNumber: req.body.transferNumber,
            amount: req.body.amount,
            clientID: req.body.clientID,
            createdAt: new Date()
        });
        newPayment.save((err, callback) => {
            if (err) {
                res.json({
                    success: false,
                    data: err
                });
            } else {
                res.json({
                    success: true,
                    data: "Payment uploaded"
                });
            } 
        });
    });
}

module.exports = { handlePaymentCreate }