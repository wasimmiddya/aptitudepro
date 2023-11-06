const doLogOut = (req, res) => {
    console.log("logout");
    res.cookie('token', null, {maxAge: 0})
    return res.status(201).json({success: true})
}

module.exports = {doLogOut}