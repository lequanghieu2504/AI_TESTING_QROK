Feature("AI - Facebook Testing");

// Basic Facebook test
// Scenario("AI test - Facebook basic", ({ I }) => {
//   I.amOnPage("https://www.facebook.com/");
//   I.see("Facebook"); // Verify page loaded
//   pause();
// });


// Basic Date Time test
Scenario("AI test - Datetime basic", async ({ I }) => {
  await I.amOnPage("http://127.0.0.1:5500/Assignment/date_checker.html");
  await I.see("Date Checker"); // Verify page loaded
  await I.seeElement('#day');
  await I.seeElement('#month');
  await I.seeElement('#year');
  pause();
});



Scenario("Date Checker - Valid date functionality", async ({ I }) => {
  // Given: User opens date checker page
  await I.amOnPage("http://127.0.0.1:5500/Assignment/date_checker.html");
  await I.see("Date Checker");

  // When: User enters a valid date
  await I.fillField('#day', '15');
  await I.fillField('#month', '6');
  await I.fillField('#year', '2023');
  await I.click('.check-btn');
  await I.wait(3);

  // Then: Should show valid date message
  await I.see(' Valid Date!');
});

Scenario('Date Checker - Invalid date (day 32)', async ({ I }) => {
  // Given: User opens date checker page
  await I.amOnPage("http://127.0.0.1:5500/Assignment/date_checker.html");

  // When: User enters invalid day (32)
  await I.fillField('#day', '32');
  await I.fillField('#month', '5');
  await I.fillField('#year', '2023');
  await I.click('.check-btn');
  await I.wait(3);

  // Then: Should show invalid date error
  await I.see('Invalid date! Please check your input.');
});

// Scenario('Date Checker - Invalid month (13)', async ({ I }) => {
//   // Given: User opens date checker page
//   await I.amOnPage("http://127.0.0.1:5500/Assignment/date_checker.html");

//   // When: User enters invalid month (13)
//   await I.fillField('#day', '15');
//   await I.fillField('#month', '13');
//   await I.fillField('#year', '2023');
//   await I.click('.check-btn');
//   await I.wait(3);

//   // Then: Should show invalid date error
//   await I.see('Invalid date! Please check your input.');
// });

// Scenario('Date Checker - February 29 on non-leap year', async ({ I }) => {
//   // Given: User opens date checker page
//   await I.amOnPage("http://127.0.0.1:5500/Assignment/date_checker.html");

//   // When: User enters Feb 29 on non-leap year (2023)
//   await I.fillField('#day', '29');
//   await I.fillField('#month', '2');
//   await I.fillField('#year', '2023');
//   await I.click('.check-btn');
//   await I.wait(3);

//   // Then: Should show invalid date error
//   await I.see('Invalid date! Please check your input.');
// });

// Scenario('Date Checker - Empty fields validation', async ({ I }) => {
//   // Given: User opens date checker page
//   await I.amOnPage("http://127.0.0.1:5500/Assignment/date_checker.html");

//   // When: User clicks check without entering any fields
//   await I.click('.check-btn');
//   await I.wait(3);

//   // Then: Should show validation error
//   await I.see('Please enter all fields (day, month, year)');
// });







///1.AI Prompting - Facebook login test cases

Scenario('Verify Facebook login page loads successfully', async ({ I }) => {
  // Given: User opens Facebook login page
  await I.amOnPage('https://www.facebook.com/');

  // Then: Page should load required elements
  await I.see('Facebook');
  await I.seeElement('#email');
  await I.seeElement('[name="pass"]');
  await I.seeElement('[name="login"]');
});

Scenario('Login attempt with invalid email format', async ({ I }) => {
  // Given: User is on login page
  await I.amOnPage('https://www.facebook.com/');

  // When: User enters invalid email format
  await I.fillField('#email', 'invalid_email_format');
  await I.fillField('[name="pass"]', 'testpassword');
  await I.click('[name="login"]');

  // Then: User should remain on login form
  await I.seeElement('#email');
});

Scenario('Login attempt with incorrect password', async ({ I }) => {
  // Given: User is on login page
  await I.amOnPage('https://www.facebook.com/');

  // When: User enters valid-looking email but wrong password
  await I.fillField('#email', 'valid_email@example.com');
  await I.fillField('[name="pass"]', 'wrongpassword');
  await I.click('[name="login"]');

  // Then: Login should fail and form is still visible
  await I.seeElement('#email');
});

Scenario('Login attempt with empty fields', async ({ I }) => {
  // Given: User is on login page
  await I.amOnPage('https://www.facebook.com/');

  // When: User clicks login without entering any fields
  await I.click('[name="login"]');

  // Then: Validation should keep user on login page
  await I.seeElement('#email');
});

Scenario('Verify forgotten password link works', async ({ I }) => {
  // Given: User is on login page
  await I.amOnPage('https://www.facebook.com/');

  // When: User clicks "Forgotten password?" link
  await I.see('Forgotten password?');
  await I.click('Forgotten password?');

  // Then: User should be redirected to recovery page
  await I.see('Find Your Account');
});

Scenario('Login with non-existent account shows appropriate error', async ({ I }) => {
  const testEmail = 'testuser@example.com';
  const testPassword = 'correctpassword';

  // Given: User is on login page
  await I.amOnPage('https://www.facebook.com/');

  // When: User enters credentials for non-existent account
  await I.fillField('#email', testEmail);
  await I.fillField('[name="pass"]', testPassword);
  await I.click('[name="login"]');
  await I.wait(3);

  // Then: Facebook should show appropriate error message
  await I.see('The email address you entered isn\'t connected to an account');
});



//2.GENERATE PAGE OBJECTS
Scenario('Generate Page Object', async ({ I }) => {
  await I.amOnPage('http://127.0.0.1:5500/SWT-Codeceptjs-AI/Assignment/date_checker.html');
  pause()
});






//3. SELF-HEAL FALLING TEST
// Scenario('Self-Heal - Date Checker', async ({ I }) => {
//   await I.amOnPage('http://127.0.0.1:5500/SWT-Codeceptjs-AI/Assignment/date_checker.html');
//   await I.fillField('da', '31');
//   await I.fillField('month', '02');
//   await I.fillField('year', '2020');
//   await I.click('Check Date');
//   await I.wait(2);
//   // After invalid date, should still see date fields
//   await I.seeElement('#day');
//   await I.seeElement('#month');
//   await I.seeElement('#year');
// });
