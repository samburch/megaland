import { describe, expect, test } from "@jest/globals";
import { UserRegistration } from "../src/megaLandForm";

describe("Given my email is valid, I should be able to subscribe", () => {
  test("Returns true if users email is valid", () => {
    document.body.innerHTML = `
        <div class="input-field">
            <label for="email">Email address:</label>
            <input type="email" id="email" autocomplete="email" maxlength="254" placeholder="Enter your email address" value="sam.burch85@gmail.com"/>
            <small></small>            
        </div>
  `;
    document.getElementById("email");
    const input = document.getElementById("email") as HTMLInputElement;
    expect(UserRegistration.validate(input)).toBeTruthy();
  });
  test("Adds success class to email input", () => {
    document.body.innerHTML = `
    <div class="input-field">
        <label for="email">Email address:</label>
        <input type="email" id="email" autocomplete="email" maxlength="254" placeholder="Enter your email address" value="sam.burch85@gmail.com"/>
        <small></small>            
    </div>
  `;
    document.getElementById("email");
    const input = document.getElementById("email") as HTMLInputElement;
    UserRegistration.validate(input);
    expect(input).toMatchSnapshot();
  });
});

describe("Given my email is not valid, I should be able to subscribe", () => {
  test("Returns false if users email not valid", () => {
    document.body.innerHTML = `
          <div class="input-field">
              <label for="email">Email address:</label>
              <input type="email" id="email" autocomplete="email" maxlength="254" placeholder="Enter your email address" value="not a valid email"/>
              <small></small>            
          </div>
    `;
    document.getElementById("email");
    const input = document.getElementById("email") as HTMLInputElement;
    expect(UserRegistration.validate(input)).toBeFalsy();
  });
  test("Apply 'Please enter a valid email address' on input field group", () => {
    document.body.innerHTML = `
    <div class="input-field">
        <label for="email">Email address:</label>
        <input type="email" id="email" autocomplete="email" maxlength="254" placeholder="Enter your email address" value="not a valid email"/>
        <small></small>            
    </div>
  `;
    document.getElementById("email");
    const input = document.getElementById("email") as HTMLInputElement;
    const small = document.querySelector("small");
    UserRegistration.validate(input);
    expect(small?.innerText).toContain("Please enter a valid email address");
  });
  test("Returns false if users email is empty", () => {
    document.body.innerHTML = `
          <div class="input-field">
              <label for="email">Email address:</label>
              <input type="email" id="email" autocomplete="email" maxlength="254" placeholder="Enter your email address" value=""/>
              <small></small>            
          </div>
    `;
    document.getElementById("email");
    const input = document.getElementById("email") as HTMLInputElement;
    expect(UserRegistration.validate(input)).toBeFalsy();
  });
  test("Adds error class to date input", () => {
    document.body.innerHTML = `
    <div class="input-field">
        <label for="email">Email address:</label>
        <input type="email" id="email" autocomplete="email" maxlength="254" placeholder="Enter your email address" value=""/>
        <small></small>            
    </div>
  `;
    document.getElementById("email");
    const input = document.getElementById("email") as HTMLInputElement;
    UserRegistration.validate(input);
    expect(input).toMatchSnapshot();
  });
  test("Apply 'Email must not be blank message' on input field group", () => {
    document.body.innerHTML = `
    <div class="input-field">
        <label for="email">Email address:</label>
        <input type="email" id="email" autocomplete="email" maxlength="254" placeholder="Enter your email address" value=""/>
        <small></small>            
    </div>
  `;
    document.getElementById("email");
    const input = document.getElementById("email") as HTMLInputElement;
    const small = document.querySelector("small");
    UserRegistration.validate(input);
    expect(small?.innerText).toContain("Email must not be blank");
  });
});
