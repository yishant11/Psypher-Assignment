import User from "../model/user-schema.js";


export const createUser = async (request, response) =>{
    try{
        const user = request.body;
        const exists_user = await User.findOne({name:request.body.name,mobile:request.body.mobile});
        if(exists_user){
            response.status(401).json({
                message:"user Already Exist",
            })
        }
        await User.create(user);

        response.status(200).json({
            succes:true,
            data:user,
            message:"Entry Created Successfully",
        })
    }
    catch(error){
        response.status(500).json({
            success:false,
            error:error.message,
            message:"Server Error",
        })
    }
}


export const userLogin = async (request, response) =>{
    try{
        const username = request.body.username;
        const password = request.body.password;
        let exists_user = await User.findOne({name:username,password:password});
        if(exists_user){
            response.status(200).json({
                succes:true,
                data:exists_user,
                message:"User Authenticate Successfully",
            })
        }
        else{
            response.status(401).json({
                message:"Does't Exist",
            })
        }

        
    }
    catch(error){
        response.status(500).json({
            success:false,
            error:error.message,
            message:"Server Error",
        })
    }
}