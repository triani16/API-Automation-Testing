const request  = require("supertest");
const config = require('../../data/config.json')

async function updateUser (userId,token,payload){
    const response = await request(config.baseURL)
    .put('/users/'+ userId)
    .send(payload)
    .set("Authorization", `Bearer ${token}`)
    
    return response
    
}

module.exports = {updateUser}