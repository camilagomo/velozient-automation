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

## ✅ Continuous Integration

This project uses **GitHub Actions** to automatically run Cypress E2E tests on every push to the repository.

---

### 🔄 CI/CD Pipeline

- 📁 The pipeline is configured in the `.github/workflows/` directory.  
- 🚀 On every push to the `main` branch, Cypress tests are executed automatically.  
- 🛑 If any test fails, the execution stops and the failure is shown in the **GitHub Actions** panel.

---

### 📌 Latest Execution Status

[![Cypress Tests](https://github.com/camilagomo/velozient-automation/actions/workflows/cypress.yml/badge.svg)](https://github.com/camilagomo/velozient-automation/actions)

🔗 [View pipeline execution](https://github.com/camilagomo/velozient-automation/actions/runs/16232119475/job/45837107112)


## 👩‍💻 Author

Created by Camila Monteiro
