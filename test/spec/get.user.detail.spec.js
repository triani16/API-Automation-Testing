const request  = require("supertest");
const config = require('../../data/config.json')

async function getUser (userId,token){
    const response = await request(config.baseURL)
    .get('/users/'+ userId)
    // .send(payload)
    .set("Authorization", `Bearer ${token}`)
    .set("Content-Type", 'application/json')
    
    return response
    
}

module.exports = {getUser}