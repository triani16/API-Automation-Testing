const request  = require("supertest");
const config = require('../../data/config.json')

async function deleteUser (userId,token){
    const response = await request(config.baseURL)
    .delete('/users/'+ userId)
    .set("Authorization", `Bearer ${token}`)
    
    return response
    
}

module.exports = {deleteUser}