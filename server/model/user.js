const mongose = require("mongoose");

const UserInfo = mongose.Schema({
    email:
    {
        type: String,
        maxlength: 100,
        required: true,
        index:
        {
            unique: true,
            dropDups: true
        }
    },
    reserve:
    {
       type: String,
    },
    joinDate:
    {
        type: Date,
        default: Date.now
    }
})

User = mongose.model("User", UserInfo);
module.exports = User;