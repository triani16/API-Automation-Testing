const request  = require("supertest");
const config = require('../../data/config.json')

async function getAllUser (token){
    const response = await request(config.baseURL)
    .get('/users')
    // .send(payload)
    .set("Authorization", `Bearer ${token}`)
    
    return response
    
}

module.exports = {getAllUser}