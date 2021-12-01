import {Selector,browser} from 'testcafe'
import testData from '../testData/data';
import basePage from "./basePage";


const baseObj = new basePage();

export default class loginPage{
constructor(){
this.emailInput = Selector("#email")
this.passwordInput =  Selector("#pass")
this.loginButton  = Selector("[data-testid*='royal_login_button']");
this.accUserNameSpan = Selector('div[data-visualcompletion="ignore-dynamic"] > a')
}


async enterEmail(email)
{
    await baseObj.type(this.emailInput , email);
};

async enterPassword(password)
{
    await baseObj.type(this.passwordInput , password);
};

async pressLogin()
{
    await baseObj.click(this.loginButton);
}}
