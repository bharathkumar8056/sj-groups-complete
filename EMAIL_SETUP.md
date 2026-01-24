# Email Configuration Guide

The contact form on your website uses **Resend** to send emails. This guide will help you set it up.

## Why Resend?

- **Free tier**: 100 emails per day (perfect for most small businesses)
- **Easy setup**: No server configuration needed
- **Reliable**: Industry-leading email delivery
- **No spam filters**: Built-in authentication protocols

## Setup Steps

### Step 1: Create a Resend Account
1. Go to [https://resend.com](https://resend.com)
2. Click "Get Started" or "Sign Up"
3. Sign up with your email and create a password
4. Verify your email address

### Step 2: Get Your API Key
1. After signing up, go to the [API Keys page](https://resend.com/api-keys)
2. Click "Create API Key" or "Add API Key"
3. Give it a name like "SJ GROUPS Website"
4. Copy the API key (it starts with `re_`)

### Step 3: Configure Your Environment
1. Open the `.env.local` file in your project root (create it if it doesn't exist)
2. Add your API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. Save the file

### Step 4: Verify Setup
1. Start your development server: `npm run dev`
2. Go to http://localhost:3000/contact
3. Fill out the form and click "Send Message via Email"
4. You should see a success message
5. Check your email (sjgroupsvpm@gmail.com) to confirm the email arrived

## How It Works

When users fill out the contact form:
1. Form data is sent to `/api/send-email` endpoint
2. The API endpoint validates the data
3. If valid, it sends an email via Resend API
4. User sees a success/error message

## Emails Received

When someone submits the form, you'll receive an email at `sjgroupsvpm@gmail.com` containing:
- Their full name
- Their email address (you can reply directly)
- Their phone number
- Their company name (if provided)
- Their message

## Testing Without Resend

If you haven't set up Resend yet, the form will still work locally:
- Messages are logged to your server console
- User sees a success message
- No actual email is sent (you'll see a message in your terminal logs)

This allows you to test the form without immediate email setup.

## Troubleshooting

### "Email service is not properly configured"
- Make sure your `.env.local` file exists
- Check that `RESEND_API_KEY` is set correctly
- Restart your development server after adding the key

### Emails going to spam
- Resend handles DKIM, SPF, and DMARC setup automatically
- Check your spam folder
- Make sure the "from" address is verified in Resend dashboard

### Rate limit reached (100+ emails per day)
- Upgrade your Resend plan
- Or implement daily email batching/summaries

## For Production

When deploying:
1. Set the `RESEND_API_KEY` environment variable in your hosting platform
2. For Vercel: Add it in Project Settings → Environment Variables
3. For other platforms: Refer to their documentation
4. Never commit `.env.local` to version control

## Support

- Resend Documentation: https://resend.com/docs
- Resend Support: https://resend.com/support
