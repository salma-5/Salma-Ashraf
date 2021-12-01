import RegistrationPage from "../pages/RegistrationPage";
import basePage from "../pages/basePage";
import data from "../testData/data";
import { Selector, browser, t } from "testcafe";

const testdata = new data();
const registrationObj = new RegistrationPage();
const baseObj = new basePage();
const regForm = registrationObj.registerationForm;
const faceBookUrl = testdata.FaceBookUrl;
const firstname = testdata.FirstName;
const surname = testdata.surName;
const email = testdata.validEmail;
const password = testdata.password;

fixture`Registration Module`.page(faceBookUrl).beforeEach(async (t) => {
  await t.setTestSpeed(0.8);
  await t.maximizeWindow();
});

test.meta({ testType: "Task" })("User registration", async (t) => {
  await registrationObj.presscreateNewAccount();
  await t.expect(Selector(regForm).exists).eql(true);

  await registrationObj.enterfirstName(firstname);
  await registrationObj.entersurName(surname);
  await registrationObj.enterregisteredEmail(email);
  await registrationObj.enterNewPassword(password);
  await registrationObj.presssignUp();

  await t.expect(userNameSpan.textContent).equal(true);
});
