# Password-HW

This project is a password geneator site intended for users who need to create secure passwords for accounts with sensitive data. Passwords are generated using user inputed criteria (special characters, lowecase characters, uppercase charatcers, and numeric characters) which the site then takes and uses to create a strong password using only the specified criteria.
<br><br>

**Note**: Passwords must be between 8 and 128 characters and at least one criteria must be specified.

## Features
### Generate Password Button
<hr>
When this button is clicked, a series of modal prompt questions will be displayed in order to take the user's password criteria and password length. Once this data is gathered, a function is ran using the user's inputs to generate a password that fits the user criteria and is the desried length.
<br><br>

### Modal Prompt Criteria System
<hr>
The modal prompt criteria system allows users to select their password criteria in a series of true/false statements (OK = true, Cancel = false). The final prompt takes in a user inputed password length, which must be between 8 and 128 in order for a password to be generated. If the user criteria is outside the bounds of modern password rules, the user will be notified with a modal alert and no password will be  generated
<br><br>

### Display Box
<hr>
Once the generator function has taken the user criteria and generated a password, the result will be displayed in the password display box. The user can then copy this password and apply it to desired accounts. 
