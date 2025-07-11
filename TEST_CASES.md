# 🧪 TEST CASES — Booking Flow

This document includes two test cases for the public booking form on [https://automationintesting.online](https://automationintesting.online).

---

## Test Case 1: Successful Room Booking (Positive)

**Test ID:** TC_BOOK_001  
**Title:** Booking a room with valid check-in and check-out dates  
**Objective:** Ensure the user can view available rooms and be redirected to the reservation page, with all key API calls triggered.

**Preconditions:**
- The application is accessible at https://automationintesting.online
- At least one room is available

**Test Steps:**
1. Visit the homepage: https://automationintesting.online
2. Enter check-in date: 2025-07-12
3. Enter check-out date: 2025-07-14
4. Click "Check Availability"
5. Wait for the API responses
6. Click "Book now" on any available room

**Expected Result:**
- User is redirected to a reservation page (`/reservation/:id`)
- API calls to `/room` and `/branding` are triggered
- Room details are displayed correctly

---

## Test Case 2: Invalid Booking with Reversed Dates (Negative)

**Test ID:** TC_BOOK_002  
**Title:** Attempt booking with check-out date earlier than check-in  
**Objective:** Validate that the application breaks or shows an error when the date range is invalid.

**Preconditions:**
- The application is accessible at https://automationintesting.online

**Test Steps:**
1. Visit the homepage
2. Set check-in to 2025-07-12
3. Set check-out to 2025-07-09 (earlier)
4. Click "Check Availability"

**Expected Result:**
- User remains on the homepage
- No rooms are listed
- "Book now" button is not shown
- Application may break or throw a React error (e.g., minified error #418)
