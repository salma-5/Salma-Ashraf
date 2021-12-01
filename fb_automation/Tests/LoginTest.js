import loginPage from "../pages/loginPage";
import basePage from "../pages/basePage";
import data from "../testData/data";
import { Selector, browser, t } from "testcafe";

const testdata = new data();
const loginObj = new loginPage();
const baseObj = new basePage();

const faceBookUrl = testdata.FaceBookUrl;
const userName = testdata.validFaceBookEmail;
const password = testdata.validFaceBookPassword;
const userNameSpan = loginObj.accUserNameSpan;

fixture`login Module`.page(faceBookUrl).beforeEach(async (t) => {
  await t.setTestSpeed(0.8);
  await t.maximizeWindow();
});

test.meta({ testType: "Task" })("valid login", async (t) => {
  await loginObj.enterEmail(userName);
  await loginObj.enterPassword(password);
  await loginObj.pressLogin();

  await t.expect(userNameSpan.textContent).contains(userName);
});
