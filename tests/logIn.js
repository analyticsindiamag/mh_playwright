const { error } = require("console");

async function logInuserArtillery(page){
    await page.goto('https://development.machinehack.com/');
    await page.waitForTimeout(4000);
    const signinBtn = page.getByRole('button', {name: 'Sign in'});
    const signinBtnisVisible = await signinBtn.isVisible();
    console.log('Sign In button is visible: ', signinBtnisVisible);
    if(signinBtnisVisible){
        console.log('User Succefully landed on Home Page');
    }else{
        console.log(error);
        console.log('Something went wrong please check');
    }
    await signinBtn.click();
    const loginModalValidate = page.getByRole('heading', { name: 'Login to your account' }).locator('b');
    const loginModalValidateisVisbile = await loginModalValidate.isVisible();
    if(loginModalValidateisVisbile){
        console.log('Login Modal Is Visible');
    }else{
        console.log('Ooops, Something Went Wrong');
    }
}


module.exports = {
    logInuserArtillery
}