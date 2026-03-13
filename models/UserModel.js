import {Schema,model,Types} from 'mongoose'
//create user Schema
const userSchema=new Schema({
    //Structure of user resource
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"min length of username is 4 char"],
            maxLength:[6,"username siz exceed 6 chars"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"Email already existed"]
    },
    age:{
        type:Number,
    },

},

    {
        versionKey:false,
        timestamps:true,
    },
);
//GEnerate UserModel
export const UserModel=model("user",userSchema)