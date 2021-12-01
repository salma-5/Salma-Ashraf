
export default class testData {
  
    constructor() {
      const faker = require("faker");
  
      //Base url 
      this.FaceBookUrl = "https://www.facebook.com/login.php";
      
      
      //credentials
      this.validFaceBookEmail = "qpamlfcmok_1638286047@tfbnw.net";
      this.validFaceBookPassword  = "Test@1234";

      //fake user
      this.firstname = faker.name.firstName(1)
      this.surname = faker.name.lastName(1)
      this.email = faker.internet.email(this.firstname, this.surname, "instabug")
      this.password = faker.internet.password(9);
      
    }}