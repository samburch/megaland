# MegaLand form test

**NOTE**
Having issues with my version of xcode since updating to latest MacOS Ventura. Because of this I wasn't able to reliably get 'docker-compose up' to reliably configure a Dockerfile with a version running in browser.

***Setup instructions***

1. Clone this repo
```sh
npm install https://github.com/samburch/megaland.git
```

2. Goto project folder root from terminal
   ```sh
   cd megaland
   ```

3. Run docker compose on terminal command line and follow link from terminal to run in browser
```sh
docker-compose up
```
- 3.1 Once installed and in a new terminal window run the test case scripts
```sh
npm run test
```

**Run from terminal**
If the docker-compose method fails. Please run the project manually

1. Install package dependacies
```sh
npm install
```
```sh
npm run dev
```
This will open the project in a new window

2. Run the test cases
```sh
npm run dev
```

**Approach**

1. I went for an inline validation approach for this task. Each input is validated individually when change or all at once on button submit. This I believe provides a better user experience than validating the whole form on submit.
2. There are unit tests for Email and Date of Birth inputs
3. The form returns an object based on the UserRegistration class
4. There is a get method UserRegistration.age() which will return the users age based on a valid object which could be used in the UI at a later date

**Project structure and dependancies**

- Created with Vite development tool for ease of setup
- There are two Jest test case files which unit test the email and date of birth inputs

**Solution**
![Solution](./public/megaland-ui.png "Solution")