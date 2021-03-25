const express = require("express");
const app = express();

const users = require("./data/users-data");
const states = require("./data/states-data");

// TODO: return a single user by id from /users/:userId in form of { data: Object }
app.get("/users/:userId",(req,res,next)=>{
    let singleUser = ""
    const {userId}=req.params;
    for(let user of users){
        console.log(user,"current user in array")
        console.log(user.id,"step of array's ID")
        console.log(userId,"userId")
        console.log(typeof user.id,"type of array's ID")
        console.log(typeof userId,"type of userId")
        if(user.id===parseInt(userId)){
            console.log("match!")
            console.log(user,"the matched user data")
            singleUser = user
            // return singleUser
        }

    }
    console.log(singleUser)

    if (!singleUser){
        console.log(singleUser)
        next(`User ID not found: ${userId}`)
    }else{
    res.json({data:singleUser})
    }
})
// TODO: return an array of users from /users in form of { data: Array }
app.get("/users",(req,res,next)=>{
    res.json({data:users})
})
// TODO: Return a single state from /states/:stateCode in the form of { data: { stateCode: String, name: String } }
    app.get("/states/:stateCode",(req,res,next)=>{
        const {stateCode}=req.params;
        const stateData=states[stateCode];
        console.log(stateData,"statedata")
        if(stateData===undefined){
            next(`State code not found: ${stateCode}`)
        }else{
            console.log("data return",`stateCode: ${stateCode}, name: ${stateData}`)
            res.json({data:{stateCode:stateCode, name: stateData}})
        }
    })
// TODO: return all states from /states in the form of { data: Array }
    app.get("/states",(req,res,next)=>{
        res.json({data:states})
    })
// TODO: add not found handler
app.use((req,res,next)=>{
    next(`Not found: ${req.originalUrl}`)
})

// TODO: Add error handler
app.use((error,req,res,next)=>{
    res.send(error)
})

module.exports = app
