// const FrontPage = require('../pageobjects/front-page');
// const HomePage = require('../pageobjects/home-page');
import FrontPage from '../pageobjects/front-page.js'
import HomePage from '../pageobjects/home-page.js'

describe('Demoblaze app Login Scenario. ', () => {
    it('Successfully login using correct username password', async() => {
        await FrontPage.open();

        await FrontPage.login('wibowo.bullseye', 'bullseye');
        await HomePage.verifyLoginSuccess('wibowo.bullseye')
    })
})