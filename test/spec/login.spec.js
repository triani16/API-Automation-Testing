const request  = require("supertest");
const { expect } = require("chai");

describe ('Login Feature', () => {
    it('Success Login', async () => {
        const response = await request("https://kasir-api.belajarqa.com")
        .post ("/authentications") 
        .send ({
            "email": "trianikamila@gmail.com",
            "password": "triani123@"       
        })
        // console.log((await  response).status);
        // console.log((await  response).body)

        //ASSERTION
        expect((await response).status).to.equal(201);
        expect((await response).body.data.user.name).to.equal("triani");
        })
   

    it('Failed Login', async () => {
        const response = await request("https://kasir-api.belajarqa.com")
        .post ("/authentications") 
        .send ({
            "email": "trianikamila@gmail.com",
            "password": "triani12345@"       
        })
        // console.log((await  response).status);
        // console.log((await  response).body)

        //ASSERTION
        expect((await response).status).to.equal(401);
        })
    })
