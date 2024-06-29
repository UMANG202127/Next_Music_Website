import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Music Acedamy/);
});


test('should navigate to the courses page', async ({ page }) => {
  // Start from the index page 
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'Courses' and click on it
  await page.click('text=Courses')
  // The new URL should be "/courses" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/courses')
  
})

test('should navigate to the product page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'About' and click on it
  await page.click('text=Products')
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/products')
  
})

test('should navigate to the course page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'About' and click on it
  await page.click('text=Explore Courses')
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/courses')
  
})


test('should navigate to the all course page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'About' and click on it
  await page.click('text=view All Courses')
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/courses')
  
})



test('should navigate to the Home page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'About' and click on it
  await page.click('text=Music Master')
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/')
  
})



test('should navigate to the Login page page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('https://musicmaster01.kinde.com/auth/cx/_:nav&m:register&psid:49105b9492a94031964dc10dedd2e313')
  // Find an element with the text 'About' and click on it
  await page.click('text=Sign in')
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('https://musicmaster01.kinde.com/auth/cx/_:nav&m:login&psid:49105b9492a94031964dc10dedd2e313')

})


test('should navigate to the Register page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('https://musicmaster01.kinde.com/auth/cx/_:nav&m:login&psid:49105b9492a94031964dc10dedd2e313')
  // Find an element with the text 'About' and click on it
  await page.click('text=Create one')
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('https://musicmaster01.kinde.com/auth/cx/_:nav&m:register&psid:49105b9492a94031964dc10dedd2e313')

})


