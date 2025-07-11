# 🐞 BUG REPORT

## Bug ID: BUG_002  
**Title:** Application breaks with React error when booking with check-out date earlier than check-in  
**Severity:** High  
**Environment:**  
- **URL:** https://automationintesting.online  
- **Browser:** Firefox  
- **Date observed:** 2025-07-11  
- **Test file:** `booking_invalid.cy.js` (Cypress)

---

## ✅ Steps to Reproduce:
1. Go to [https://automationintesting.online](https://automationintesting.online)  
2. Set the **Check-in** date to `2025-07-12`  
3. Set the **Check-out** date to `2025-07-09` (earlier than check-in)  
4. Click the **"Check Availability"** button  
5. Observe that:
   - The app redirects to `/reservation`
   - The reservation form is not displayed
   - The **"Book now"** button still appears (even though no room should be bookable)
   - A React error is thrown in the browser console

---

## Actual Result:
- The application **redirects to a broken reservation page** even with invalid date input.
- The **React throws minified error #418** (`Error: Minified React error #418`) visible in dev console.
- No booking form is shown.
- Cypress logs confirm **multiple API calls respond with 200**, but logic breaks.
- `"Book now"` button remains present, **misleading the user** into thinking a booking is still possible.

---

## Expected Result:
- The frontend should **prevent submission** when the check-out date is earlier than the check-in.
- A **validation message** should be shown.
- The **user should not be redirected** to the reservation page.
- The booking button ("Book now") should **not appear** in this case.

---

## Hypothesis:
- The frontend currently **does not validate date logic before submission**.
- Backend tries to process invalid input and causes failure in React rendering (likely unhandled `undefined` state).
- Presence of `"Book now"` in DOM suggests business logic was bypassed.

---

## Recommendation:
- Add **client-side validation** to ensure:
  - Check-out date > Check-in date
  - Dates are not in the past
- Block or disable `"Check Availability"` if dates are invalid
- Ensure backend handles this input safely with a **user-friendly error**, not a generic 500
- Remove `"Book now"` when no valid rooms exist for given criteria