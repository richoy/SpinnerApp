const saySomething = (req, res, next) => {
    res.status(200).json({
        body: 'Hello from the server! Test 2'
    });
};

module.exports.saySomething = saySomething;