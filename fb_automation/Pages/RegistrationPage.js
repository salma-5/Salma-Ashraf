import { database } from "faker";
import { Selector, browser } from "testcafe";
import testData from "../testData/data";
import basePage from "./basePage";

const baseObj = new basePage();

export default class RegistrationPage {
  constructor() {
    this.createNewAccountButton = Selector(
      "[data-testid*='open-registration-form-button']"
    );
    this.registerationForm = Selector("#reg");
    this.firstNameInput = Selector("[name*='firstname']");
    this.surNameInput = Selector("[name*='lastname']");
    this.registeredEmailInput = Selector("[name*='reg_email__']");
    this.newPasswordInput = Selector("#password_step_input");
    this.birthDayList = Selector("#day");
    this.birthMonthList = Selector("#month");
    this.birthYearList = Selector("#year");
    this.genderCheckbox = Selector("[name*='sex']");
    this.signUpButton = Selector("button[type='submit']");
  }
  async presscreateNewAccount() {
    await baseObj.click(this.createNewAccountButton);
  }
  async enterfirstName(firstname) {
    await baseObj.type(this.firstNameInput, firstname);
  }
  async entersurName(surname) {
    await baseObj.type(this.surNameInput, surname);
  }

  async enterregisteredEmail(registeredemail) {
    await baseObj.type(this.registeredEmailInput, registeredemail);
  }
  async enterNewPassword(newpassword) {
    await baseObj.type(this.newPasswordInput, newpassword);
  }
  async presssignUp() {
    await baseObj.click(this.signUpButton);
  }
}
