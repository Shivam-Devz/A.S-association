# A.S Association

A.S Association is a simple, responsive web project built using **HTML**, **CSS**, and **JavaScript**. It serves as a foundational website structure for a business or organization, including core pages like Home, About Us, Services, Contact, Sign In, and a Cart page that integrates WhatsApp for order processing.

## 🚀 Features

- ✅ Responsive layout using HTML & CSS
- ✅ Interactive elements with JavaScript
- ✅ Simple cart functionality with WhatsApp redirection
- ✅ User sign-in page (front-end only)
- ✅ Contact and service information pages

## 🧾 Pages Overview

### 🏠 Home Page
- Welcomes users and introduces the A.S Association
- Navigation bar links to all key sections of the website

### ℹ️ About Us Page
- Provides background information about the A.S Association
- Showcases mission, vision, or team

### 🛠 Services Page
- Displays a list of services offered
- Could be static or dynamic based on the future scope

### 🛒 Cart Page
- Shows selected items for purchase
- **Proceed Order** button redirects users to WhatsApp with a pre-filled message to confirm the order

### 🔐 Sign In Page
- Front-end form for user sign-in
- (No back-end authentication yet)

### 📞 Contact Page
- Contains a form or contact details (email, phone, location)
- May include embedded map or social links

## 📲 WhatsApp Integration

When the user clicks on the `Proceed Order` button in the Cart page, they are redirected to WhatsApp with a message pre-filled. This allows direct order confirmation via chat.

Example redirect URL:

```javascript
https://wa.me/1234567890?text=I'm%20interested%20in%20placing%20an%20order!
````

> Note: Replace `1234567890` with your actual WhatsApp number.

## 🛠 Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

## 📁 Project Structure

```
A.S-Association/
│
├── index.html             # Home Page
├── about.html             # About Us Page
├── services.html          # Services Page
├── contact.html           # Contact Page
├── signin.html            # Sign In Page
├── cart.html              # Cart Page
│
├── css/
│   └── style.css          # All styles
│
├── js/
│   └── script.js          # All scripts
│
└── README.md              # Project documentation
```

## 📌 How to Use

1. Clone or download this repository
2. Open `index.html` in your browser
3. Navigate through the pages using the navbar
4. Use the cart page to simulate a purchase process via WhatsApp

## 📬 Contact

If you have any questions or suggestions, feel free to reach out via the Contact page or message directly on WhatsApp.

---

Thank you for visiting **A.S Association**! 🎉
