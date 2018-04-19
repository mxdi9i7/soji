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
            transferDate: new Date(req.body.transferDate),
            amount: req.body.amount,
            description: req.body.description,
            jobID: req.body.jobID,
            createdAt: new Date()
        });
        newPayment.save((err, callback) => {
            if (err) {
                res.json({
                    success: false,
                    message: err
                });
            } else {
                res.json({
                    success: true,
                    message: "Payment uploaded"
                });
            } 
        });
    });
}

module.exports = { handlePaymentCreate }