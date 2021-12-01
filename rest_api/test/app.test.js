const endpoint = "http://localhost:3030";
const chai = require("chai");
const chaiHttp = require("chai-http");
const faker = require("faker");
var end = require("supertest");
const { expect } = chai;

chai.use(chaiHttp);

describe("Bestbuy Products", () => {
  var fakeProductID;
  it("Verify that the user can get all the products", function (done) {
    chai
      .request("http://localhost:3030")
      .get("/products")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it("Verify that the user can add a new product", (done) => {
    let product = {
      name: faker.commerce.productName(),
      type: faker.commerce.product(),
      upc: "random",
      description: faker.commerce.product(),
      model: "X1",
      price: parseInt(faker.commerce.price(2, 4)),
    };
    chai
      .request(endpoint)
      .post("/products")
      .send(product)
      .end((err, res) => {
        fakeProductID = res.body.id;
        expect(res).to.have.status(201);
        expect(res.body.name).to.be.equal(product.name);
        done();
      });
  });

  it("Verify that the user can get a product by id", (done) => {
    chai
      .request(endpoint)
      .get(`/products?id=${fakeProductID}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.total).to.be.greaterThan(0);
        expect(res.body.data[0].id).to.equals(fakeProductID);
        done();
      });
  });

  it("verify that the existing version is version 1.1.0", (done) => {
    chai
      .request(endpoint)
      .get("/version")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.version).to.equals("1.1.0");
        done();
      });
  });

  it("Verify that the health check is editable", (done) => {
    chai
      .request(endpoint)
      .get("/healthcheck")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.readonly).to.be.false;
        done();
      });
  });
});
