# How to Set Up EmailJS to Receive Contact Form Messages

Currently, your contact form is set up to use EmailJS, but you need to configure it to actually send emails to your inbox.

## Step-by-Step Setup:

### 1. Create a Free EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account (200 emails/month free)

### 2. Add an Email Service
- In the EmailJS dashboard, go to **Email Services**
- Click **Add New Service**
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions to connect your email

### 3. Create an Email Template
- Go to **Email Templates** in the dashboard
- Click **Create New Template**
- Use this template structure:
  ```
  From: {{from_name}} <{{from_email}}>
  To: hdarensbourg1@gmail.com
  Subject: New Contact Form Message from {{from_name}}
  
  You have a new message from your portfolio website:
  
  Name: {{from_name}}
  Email: {{from_email}}
  
  Message:
  {{message}}
  ```
- Save the template and note the **Template ID**

### 4. Get Your Public Key
- Go to **Account** → **General**
- Copy your **Public Key**

### 5. Update Your Contact Component
- Open `src/components/Contact.js`
- Find these lines (around line 30-32):
  ```javascript
  const serviceId = 'YOUR_SERVICE_ID';
  const templateId = 'YOUR_TEMPLATE_ID';
  const publicKey = 'YOUR_PUBLIC_KEY';
  ```
- Replace with your actual values:
  - `YOUR_SERVICE_ID` → Your Email Service ID (from step 2)
  - `YOUR_TEMPLATE_ID` → Your Template ID (from step 3)
  - `YOUR_PUBLIC_KEY` → Your Public Key (from step 4)

### 6. Test It!
- Start your development server: `npm start`
- Fill out the contact form on your website
- Submit it and check your email inbox!

## Alternative: Simple mailto: Link (No Setup Required)

If you prefer a simpler solution that doesn't require EmailJS setup, you can use a mailto link instead. The form will open the user's email client with your email pre-filled.

Would you like me to implement this simpler alternative instead?

