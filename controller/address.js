const db = require("../db")
const Address = db.Address

const addAddress = async (req, resp) => {

    let Addr = new Address(req.body)
    Addr.save(function(err, data) {
        if (err) {
            resp.status(400).json({error:"Bad request"})
        }
        else{
            resp.status(200).json({address:data, message:"Address added successfully."})
        }
    })
}

const getAddress = async (req, resp) => {
    let response = {address: await Address.findById(req.params.id)}
    resp.status(200).json(response)
}

const getAddressList = async (req, resp) => {
    let response = {address: await Address.find({})}
    resp.status(200).json(response)
}

const updateAddress = async (req, resp) => {
    Address.findByIdAndUpdate(req.params._id, req.body, function(err) {
        if (err) {
            resp.status(400).json({error:"Bad request"})
        }
        else{
            resp.status(200).json({message: "Address updated successfully."})
        }
    })
}

const deleteAddress = async (req, resp) => {
    Address.findByIdAndDelete(req.params.id, function(err) {
        if (err) {
            resp.status(400).json({error:"Bad request"})
        }
        else{
            resp.status(200).json({message: "Address deleted successfully."})
        }
    })
}

module.exports = {
    addAddress,
    getAddress,
    getAddressList,
    updateAddress,
    deleteAddress
}