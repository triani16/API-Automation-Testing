const { expect } = require("chai");
const { getToken } = require("../spec/get.token.spec");
const { createUser } = require("../spec/create.user.spec");
const { getUser } = require("../spec/get.user.detail.spec");
const { getAllUser } = require("../spec/get.user.list.spec");
const { updateUser } = require("../spec/update.user.spec");
const { deleteUser } = require("../spec/delete.user.spec");



describe ( 'create-user', () => {
    it('Success create a new user', async() => {
        // get token
        const token = await getToken ()
        // create user
        const payload = {
            "name": "lala2",
            "email": "lala2@example.com",
            "password": "lala2222@" 
        }
        const response = await createUser(payload,token)
       
         console.log((await  response).body);
         console.log((await  response).status);
        //assert
        expect((await response).status).to.equal(201);
        expect((await response).body.data.name).to.equal(payload.name); // data driven testing
        expect((await response).body.message).to.equal("User berhasil ditambahkan");
    })

    it('Failed create user', async () => {
        const token = await getToken ()
        const payload = {
            "name": "lala2",
            "email": "lala2",
            "password": "lala2222@"    
        }

        const response = await createUser(payload,token)
        // console.log((await  response).status);
        //  console.log((await  response).body)

        //ASSERTION
        expect((await response).status).to.equal(400);
        })
    
})

describe ( 'update-user', () => {
    it('Success update user', async() => {
        // get token
        const token = await getToken ()
        const userId = "a33a7900-a8b3-465f-89e3-e78fc0e30d60"
        const payload = {
                "name": "lulu",
                "email": "lulu@example.com"
            }
            
        
        // create user
        const response = await updateUser(userId,token,payload)
         console.log((await  response).body);
        console.log((await  response).status);
         
        //assert
        expect((await response).status).to.equal(200);
        expect((await response).body.data.name).to.equal("lulu"); 
        expect((await response).body.message).to.equal("User berhasil diupdate"); 
    })

    it('Failed update-user', async () => {
        const token = await getToken ()
        const userId = "a33a7900-a8b3-465f"
        const payload = {
                "name": "lulu",
                "email": "lulu@example.com"
            }
            
        
        // create user
        const response = await updateUser(userId,token,payload)
         console.log((await  response).body);
        console.log((await  response).status);
         
        //assert
        expect((await response).status).to.equal(404);
        expect((await response).body.message).to.equal("id tidak valid"); 
       
        })
    
 })

describe ( 'get-user-detail', () => {
    it('Success get user detail', async() => {
        // get token
        const token = await getToken ()
        const userId = "a33a7900-a8b3-465f-89e3-e78fc0e30d60"
        // create user
        const response = await getUser(userId,token)
        //  console.log((await  response).body);
        //  console.log((await  response).status);
         
        //assert
        expect((await response).status).to.equal(200);
        expect((await response).body.data.user.name).to.equal("lulu"); 
    })

    it('Failed get-user-detail', async () => {
          // get token
          const token = await getToken ()
          const userId = "a33a7900-a8b3"
          // create user
          const response = await getUser(userId,token)
        //    console.log((await  response).body);
        //   console.log((await  response).status);
           
          //assert
          expect((await response).status).to.equal(404);
          expect((await response).body.message).to.equal("id tidak valid"); 
       
        })
    
 })


 describe ( 'get-user-list', () => {
    it('Success get user list', async() => {
        // get token
        const token = await getToken ()
        // create user
        const response = await getAllUser(token)
        //  console.log((await  response).body);
        //  console.log((await  response).status);
         
        //assert
        expect((await response).status).to.equal(200);
        
    })

    it('Invalid token get-user-list', async () => {
          // get token
          const token = await getToken ()
          // create user
          const response = await getUser(token)
           console.log((await  response).body);
          console.log((await  response).status);
           
          //assert
          expect((await response).status).to.equal(401);
          expect((await response).body.message).to.equal("Invalid token structure");
       
        })
    
 })


describe ( 'delete-user', () => {
    it('Success delete user', async() => {
        // get token
        const token = await getToken ()
        const userId = "aa081cd2-076b-4402-9767-2d571a13274b"
            
        
        // create user
        const response = await deleteUser(userId,token)
         console.log((await  response).body);
        console.log((await  response).status);
         
        //assert
        expect((await response).status).to.equal(200);
        expect((await response).body.message).to.equal("User berhasil dihapus"); 
    })

    it('Failed delete-user', async () => {
        const token = await getToken ()
        const userId = "a33a7900-a8b3-465f"
      
        // create user
        const response = await deleteUser(userId,token)
         console.log((await  response).body);
        console.log((await  response).status);
         
        //assert
        expect((await response).status).to.equal(404);
        expect((await response).body.message).to.equal("id tidak valid"); 
       
        })
    
 })