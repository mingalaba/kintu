const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));

  console.log('Navigating...');
  await page.goto('http://localhost:5174/future-audit');
  
  console.log('Answering question 1...');
  await page.click('button:has-text("1 a 9 personas")');
  await page.waitForTimeout(600);

  console.log('Answering question 2...');
  await page.click('button:has-text("Las decisiones clave")');
  await page.waitForTimeout(600);

  console.log('Answering question 3...');
  await page.click('button:has-text("Nulo: la operación")');
  await page.waitForTimeout(600);

  console.log('Answering question 4...');
  await page.click('button:has-text("Reunionitis")');
  await page.waitForTimeout(600);

  console.log('Filling form...');
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="company"]', 'Test Inc');
  await page.fill('input[name="phone"]', '1234567890');
  await page.selectOption('select[name="role"]', 'ceo');
  await page.selectOption('select[name="priority"]', 'urgent');
  await page.selectOption('select[name="coreTool"]', 'manual');

  console.log('Submitting...');
  await page.click('button[type="submit"]');

  console.log('Waiting for scanner...');
  await page.waitForTimeout(5000);

  console.log('Done.');
  await browser.close();
})();
