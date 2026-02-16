class home {
    constructor(page) {
        this.registerLink = page.locator("//a[text()='Register']")
        this.myaccountLink = page.locator("//a[text()='My account']")
        this.logoutLink = page.locator("//a[text()='Log out']")
        this.loginLink = page.locator("//a[text()='Log in']")
        this.loginSucces = page.locator('//div[@class="header-links"]/descendant::a[@href="/customer/info"]')
        this.searchTB = page.locator('input#small-searchterms')
        this.searchBtn = page.locator('//input[@value="Search"]')
        this.userlink = page.locator("//a[text()='edith@gmail.com']")
        
    }
}
export default home