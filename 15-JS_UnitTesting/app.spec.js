const request =require("request");



describe("endpoint unit testing (using done)", ()=>{
    var server;
    var data={};
    var data2={};

    beforeAll((done)=>{
        server=require("../app.js");

        let completedRequests = 0;

        request.get("http://localhost:3000/",(error,res,body)=>{
            data.status=res.statusCode;
            data.body=body;
            checkCompleted();
        })

        request.get("http://localhost:3000/2",(error,res,body)=>{
            data2.status=res.statusCode;
            data2.body=body;
            checkCompleted();
        })

        checkCompleted = ()=>{
            completedRequests++;
            if (completedRequests == 2) {
                done();
            }
        }
    })
    afterAll(()=>{
        server.close();
    })

    it("test statuscode",()=>{
        expect(data.status).toEqual(200);
    })

    it("test body", ()=>{
        expect(data.body).toEqual("hello world");
    })

    it("test statuscode /2",()=>{
        expect(data2.status).toEqual(200);
    })

    it("test body /2", ()=>{
        expect(data2.body).toEqual("from /2");
    })

})



// const fetch = require('node-fetch');

// describe("endpoint unit testing (using fetch+async/await)", () => {
//   let server;
//   let data = {};
//   let data2 = {};

//   beforeAll(async () => {
//     server = require("../app.js");

//     const res1 = await fetch("http://localhost:3000/");
//     data.status = res1.status;
//     data.body = await res1.text();

//     const res2 = await fetch("http://localhost:3000/2");
//     data2.status = res2.status;
//     data2.body = await res2.text();
//   });

//   afterAll(() => {
//     server.close();
//   });

//   it("test statuscode /", () => {
//     expect(data.status).toEqual(200);
//   });

//   it("test body /", () => {
//     expect(data.body).toEqual("hello world");
//   });

//   it("test statuscode /2", () => {
//     expect(data2.status).toEqual(200);
//   });

//   it("test body /2", () => {
//     expect(data2.body).toEqual("from /2");
//   });
// });








// ------------------------------------------------

const util = require("util");
const get = util.promisify(request.get); // convert callback-style to promise-style

describe("endpoint unit testing (using request+async/await)", () => {
  let server;
  let data = {};
  let data2 = {};

  beforeAll(async () => {
  try {
    server = require("../app.js");

    const res1 = await get("http://localhost:3000/");
    data.status = res1.statusCode;
    data.body = res1.body;

    const res2 = await get("http://localhost:3000/2");
    data2.status = res2.statusCode;
    data2.body = res2.body;
  } catch (err) {
    console.error("❌ Error in beforeAll:", err);
    throw err;
  }
});
  afterAll(() => {
    server.close();
  });

  it("test statuscode /", () => {
    expect(data.status).toEqual(200);
  });

  it("test body /", () => {
    expect(data.body).toEqual("hello world");
  });

  it("test statuscode /2", () => {
    expect(data2.status).toEqual(200);
  });

  it("test body /2", () => {
    expect(data2.body).toEqual("from /2");
  });
});

