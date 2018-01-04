describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have login screen', async () => {
    await expect(element(by.id('loginScreen'))).toBeVisible();
  });

  it('should login correct', async () => {
    await element(by.id('emailInput')).tap();
    await element(by.id('emailInput')).typeText('wrong@email.com');
    await expect(element(by.text('wrong@email.com'))).toBeVisible();
    await element(by.id('passInput')).tap();
    await element(by.id('passInput')).typeText('test');
    await expect(element(by.text('test'))).toBeVisible();
    await element(by.id('loginButton')).tap();
    await waitFor(element(by.text('error'))).toHaveText('Invalid email or password').withTimeout(3000);
  });

  it('should login correct', async () => {
    await element(by.id('emailInput')).tap();
    await element(by.id('emailInput')).typeText('correct@email.com');
    await expect(element(by.text('correct@email.com'))).toBeVisible();
    await element(by.id('passInput')).tap();
    await element(by.id('passInput')).typeText('test');
    await expect(element(by.text('test'))).toBeVisible();
    await element(by.id('loginButton')).tap();
    await waitFor(element(by.id('homeScreen'))).toBeVisible().withTimeout(3000);
  });

  it('should logout correct', async () => {
    await element(by.id('logoutButton')).tap();
    await expect(element(by.id('loginScreen'))).toBeVisible();
  });

})
