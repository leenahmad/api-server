'use strict'

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);
const { db } = require('../src/models/index');


beforeAll(async() => {
  await db.sync();
})


afterAll(async() => {
  await db.drop();
})

describe('testing API server',() => {
   
    it('testing /', async() => {
        const response = await request.get('/');
      
        expect(response.text).toEqual('home route');
       
    })


it(' get status 404 for bad route',async()=>{
  const res1 =await request.get('/mus');
  const res2 =await request.get('/fod');
  expect(res1.status).toBe(404);
  expect(res2.status).toBe(404);

});

it(' get status 404 for bad method ',async()=>{
  const res1 =await request.post('/music/1');
  const res2 =await request.post('/food/1');
  expect(res1.status).toBe(404);
  expect(res2.status).toBe(404);
});

// food routes
// get food
it('database food routes' , async() => {
  const res = await request.get('/food');
  expect(res.status).toBe(200);
})

// POST 
it('post test / create food' , async() =>{
  const res = await request.post('/food').send({
    favoriteFood : "shhawerma",
    unfavorableFood: "mansaf"
  })

   expect(res.status).toEqual(200);
})

// get one food 
it('get one food' , async() => {
  const res = await request.get('/food/1');
  // console.log(res)
  expect(res.status).toEqual(200);
  expect(res.body.id).toEqual(1)
  // console.log(res.body)
})

//update food 
it('update food' , async() =>{
  const res = await request.put('/food/1').send({
    favoriteFood : "shhawerma55",
    unfavorableFood: "mansaf40"
  })
  expect(res.status).toEqual(200)
  expect(res.body.id).toEqual(1)
})

//destroy food
it('destroy food' , async() =>{
  const res = await request.delete('/food/1')
  expect(res.status).toEqual(204);
  
})
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


// music routes
// get music
it('database music routes' , async() => {
  const res = await request.get('/music');
  expect(res.status).toBe(200);
})

// POST 
it('post test / create music' , async() =>{
  const res = await request.post('/music').send({
    favoriteMusic : "leen",
  })

   expect(res.status).toEqual(200);
})

// get one music 
it('get one music' , async() => {
  const res = await request.get('/music/1');
  // console.log(res)
  expect(res.status).toEqual(200);
  expect(res.body.id).toEqual(1)
  // console.log(res.body)
})

//update music 
it('update music' , async() =>{
  const res = await request.put('/music/1').send({
    favoriteMusic : "seeeeeeeeee55"
  })
  expect(res.status).toEqual(200)
  expect(res.body.id).toEqual(1)
})

//destroy music
it('destroy music' , async() =>{
  const res = await request.delete('/music/1')
  expect(res.status).toEqual(204);
  
})

})


