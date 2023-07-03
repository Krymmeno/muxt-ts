describe('Login Page', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000/');
    });
  
    it('should be titled "Login Page"', async () => {
        await expect(page.title()).resolves.toMatch('Login Page');
    });

    it('should display the login form', async () => {
        const loginForm = await page.$('#login-form');
        expect(loginForm).toBeTruthy();
    });
    
    it('should allow the user to login', async () => {
        await expect(page).toFill('#email', 'myusername');
        await expect(page).toFill('#password', 'mypassword');
        await expect(page).toClick('#login-button');

        await page.waitForNavigation();

        const homePage = await page.waitForSelector('#home-page');
        expect(homePage).toBeTruthy();
    });
});