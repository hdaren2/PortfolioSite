# Fixing Gmail Authentication Error

## The Problem
Error: "Gmail_API: Request had insufficient authentication scopes"

This means your Gmail service in EmailJS doesn't have the correct permissions to send emails.

## Solution 1: Re-authenticate Gmail (Quick Fix)

1. Go to https://dashboard.emailjs.com/
2. Click on **Email Services** in the left sidebar
3. Find your Gmail service (service_nklyz2l)
4. Click **Edit** or **Reconnect**
5. Click **Reconnect Account** or **Authorize**
6. **IMPORTANT**: When Google asks for permissions, make sure to:
   - Grant access to "Send email on your behalf"
   - Check all required scopes
   - Click "Allow" for all permissions
7. Save the service

## Solution 2: Use EmailJS SMTP Service (Easier Alternative)

If Gmail continues to have issues, switch to EmailJS's built-in email service:

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **EmailJS** (their built-in service)
4. This service doesn't require OAuth and is easier to set up
5. Update your `serviceId` in `src/components/Contact.js` with the new service ID

## Solution 3: Use a Different Email Provider

You can also use:
- **Outlook/Hotmail** - Often easier than Gmail
- **Yahoo Mail** - Simple setup
- **Custom SMTP** - If you have your own email server

## After Fixing

Once you've re-authenticated or switched services:
1. Test the form again
2. Check your email inbox (and spam folder)
3. The form should now work correctly!

