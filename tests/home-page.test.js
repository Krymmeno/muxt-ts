describe('Home Page', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000/home');
    });

    it('should display the home page', async () => {
        const loginForm = await page.$('#home-page');
        expect(loginForm).toBeTruthy();
    });
});