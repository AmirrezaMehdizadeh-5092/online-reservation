const mongose = require("mongoose");

const ReserveInfo = mongose.Schema({
    rooz : 
    {
        type : "string",
        required : true
    },
    daynumber  :
    {
        type:"string",
        required : true
    },
    month : 
    {
        type:"string",
        required : true
    },
    clock : 
    {
        type:"string",
        required : true
    },
    email : 
    {
        type:"string",
        required : true
    },
    fname  :
    {
        type:"string",
        required : true
    },
    lname : 
    {
        type:"string",
        required : true
    },
    code_meli : 
    {
        type:"string",
        required : true
    },
    phone : 
    {
        type:"string",
        required : true
    },
    description  :
    {
        type:"string",
    },
    /*email:
    {
        type: String,
        maxlength: 100,
        required: true,
        index:
        {
            unique: true,
            dropDups: true
        }
    },*/
    status:
    {
       type: String,
    },
    joinDate:
    {
        type: Date,
        default: Date.now
    }
})

Reserve = mongose.model("Reserve", ReserveInfo);
module.exports = Reserve;