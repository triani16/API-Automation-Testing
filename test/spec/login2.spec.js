const request  = require("supertest");
const { expect } = require("chai");

const BaseURL= "https://kasir-api.belajarqa.com"

async function getToken (payload) {
    const response = await request (BaseURL)
    .post("/authentications")
    .send(payload)
    return response
}

describe ('Login With Function Feature', () => {
    it('Success Login', async () => {
        const payload = {
            "email": "trianikamila@gmail.com",
            "password": "triani123@"       
        }

        const response = await getToken(payload)
        console.log((await  response).status);
        console.log((await  response).body);

        //ASSERTION
        expect((await response).status).to.equal(201);
        expect((await response).body.data.user.name).to.equal("triani");
        })
   

    it('Failed Login', async () => {
        const payload = {
            "email": "trianikamila@gmail.com",
            "password": "triani12345@"       
        }

        const response = await getToken(payload)
        // console.log((await  response).status);
        // console.log((await  response).body)

        //ASSERTION
        expect((await response).status).to.equal(401);
        })
    })
