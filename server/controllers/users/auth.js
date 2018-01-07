handleUserLogin = (req, res) => {
    //logic 
    for (var i = 0; i < 100; i ++) {
        console.log(i)
    }
    userCollection.find({}, (err, user) => {
        if (err) {
            res.json({
                success: false,
                data: err
            })
        }
        if (!doc) {
            res.json({
                success: false,
                data: "no user found"
            })
        }
        productsCollection.find()

        res.json({
            success: true,
            data: doc
        })
    })
    


    res.json({
        success:true,
        data: "123"
    })
}

module.exports.handleUserLogin = handleUserLogin;