# 🧪 Velozient Cypress Automation

Automated end-to-end testing project using [Cypress](https://www.cypress.io/) for the application available at https://automationintesting.online.

---

## 📁 Project Structure

```
velozient-automation/
│
├── cypress/
│   ├── e2e/
│   │   ├── booking_form.cy.js        # ✅ Positive test case (valid room booking)
│   │   └── booking_invalid.cy.js     # ❌ Negative test case (invalid date logic)
│   ├── downloads/                     
│   └── screenshots/                  
│
├── BUG_REPORT.md                     # 🐞 Bug report for invalid reservation attempt
├── TEST_CASES.md                     # 🧾 Documented test cases
├── README.md                         # 📘 This guide
├── cypress.config.js                 # Cypress configuration
├── package.json                      # Project dependencies
```

---

## 🚀 Installation

Make sure you have [Node.js](https://nodejs.org/) installed.

Then install Cypress with:

```bash
npm install
```

---

## ▶️ Running the Tests

To open the Cypress UI:
```bash
npx cypress open
```

To run the tests headlessly:
```bash
npx cypress run
```

To run a specific test file:

**Positive Booking Test**
```bash
npx cypress run --spec "cypress/e2e/booking_form.cy.js"
```

**Negative Booking Test**
```bash
npx cypress run --spec "cypress/e2e/booking_invalid.cy.js"
```

---

## 📋 Included Files

### ✅ `TEST_CASES.md`
- TC_BOOK_001: Valid room booking
- TC_BOOK_002: Invalid booking with reversed dates

### 🐞 `BUG_REPORT.md`
- BUG_001: 500 error caused by frontend allowing invalid date ranges
- Steps to reproduce, expected vs actual result, and recommendations

---

## ⚙️ GitHub Actions CI

To enable test automation in your GitHub pipeline, add this to `.github/workflows/cypress.yml`:

```yaml
name: Run Cypress Tests

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests
        run: npx cypress run
```

---

## 👩‍💻 Author

Created by Camila Monteiro