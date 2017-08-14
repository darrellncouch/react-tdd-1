# React Component Practice

In this exercise, you will practice building a small contact list with 3 components:

- App
- ContactInput: contains the form and submit button
- ContactList: contains the list of contacts in list form; i.e. ul/li

## Guidelines

- The function to set state in App must be called "addContact"
- The function to handle the form submit in the ContactInput element must be called "handleSubmit"
- The function passed down into the ContactInput component must be called "addContact"
- Use this as your application state:

  ```
  { contacts: [{
      "name": "Torres Schultz",
    },
    {
      "name": "Deleon Peters",
    },
    {
      "name": "Bettye Aguirre",
    }]
  }
  ```

### User Stories:

- As a user, when I land on the home page, I see a list of contacts' names, as well as a button that says "Add Contact".
- As a user, when I click the "Submit" button, it adds a new contact to the list from the name field.
