const mongose = require("mongoose");

const DoctorInfo = mongose.Schema({
    name:
    {
        type: "string",
    },
    tazasos:
    {
        type: "string",
    },
    city:
    {
        type: "string",
    },
    emtiaz:
    {
        type: "string",
    },
    code_nezam_pezeshki:
    {
        type: "string",
        required: true,
        index:
        {
            unique: true,
            dropDups: true
        }
    },
    telephone_24:
    {
        type: "string",
    },
    telephone_matab:
    {
        type : "string",
    },
    address :
    {
        type : "string",
    },
    joinDate:
    {
        type: Date,
        default: Date.now
    }
})

Doctor = mongose.model("Doctor", DoctorInfo);
module.exports = Doctor;