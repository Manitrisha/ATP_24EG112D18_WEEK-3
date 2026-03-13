import exp from 'express'
export const userApp=exp.Router()
//crete API(REST API -REpresentational state transfer API)
     //route to handle GET request of client(http://localhost:3000/users)
let users=[];
  // read all users
       userApp.get('/users',(req,res)=>{
             res.json({message:"all users",payload:users})
       })
       //read a user by id  
           userApp.get('/users/:id',(req,res)=>{
          
            let idOfURL=Number(req.params.id) 
             let index=users.findIndex(user=>user.id===idOfURL)
              if(index === -1)
             {
                  return res.json({message:"user not found "})

             }
            //send response to client
            res.json({message:"user",payload:users[index]})
           })
     //route to handle POST request of client
           userApp.post('/users',(req,res)=>{
              //get  new user from client
              const newUser=req.body
              //push user into user
              users.push(newUser)
              //send res
              res.json({message:"user created"})
           })
     //route to handle PUT request of client
      userApp.put('/users',(req,res)=>{
              //get modify user from client
              let modifiedUser=req.body
              //get index of existing user in users array
              let index=users.findIndex(user=>user.id===modifiedUser.id)
              //update user with index
              if(index===-1)
                  return res.json({message:"user not found"})
             users.splice(index,1,modifiedUser)
              //send res
              res.json({message:"user modified"})
           })
           
     //route to handle DELETE request of client
      userApp.delete('/users/:id',(req,res)=>{
             //get id of user from url parameter
             let idOfURL=Number(req.params.id)
             //we used number class to get the id in number because we taking id from url by default it pass in string
             //find index of user
             let index=users.findIndex(user=>user.id===idOfURL)
             //if user not found
             if(index === -1)
             {
                  return res.json({message:"user not found to delete"})

             }
             users.splice(index,1)
             //send res
             res.json({message:"user removed"})
           })
