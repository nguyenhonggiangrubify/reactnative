const user = require('../database/user.json')

const login = (username, pass)=>{
   const userlogin = user.find(user => user.username === username && user.password === pass)
   console.log('userlogin ', !userlogin)
   if(userlogin)
       return true
    return false
}

export default {login}