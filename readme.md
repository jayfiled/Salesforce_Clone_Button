## Script to run on User pages in Salesforce to enable the cloning button.

## Purpose 🚀

Salesforce has a user clone feature hiding behind the scenes and requires modification to the page to enable, so I wrote a script that runs on the page to enable it without any Salesforce admin having to do it.  It creates a 'clone' button that, when pressed, creates a new user and pre-fills the fields with their data.

### Installation instructions 📑

To develop the script I installed the chrome extension [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en).

- Create a new user script.
- Replace the `\\Your code here...` text with the contents of index.js.
- Amend the **@matches** value to be the URL of your Salesforce instance.
- Go to the script, then click on the settings tab.  Add a **user includes** rule if you want to use a wildcard to run on a subset of pages, or a **user matches** rule if you want your script to only run on certain pages.
- Save your script, close and return to the dashboard.  Make sure your script is enabled and also that the Chrome Extension is set to enabled. 

### Future features 🏹
None yet 🎶 🎺

### Improvements 🏃‍♂️💨
- [ ] **Make the script run when SF page is loaded, instead of waiting 5 seconds**

### Pain points 🤕
- [ ] **Trying to add the button in the iFrame where the User info is**
(This iFrame comes from a different subdomain so it can't be accessed by JS after the page loads)