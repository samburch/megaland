// import { describe, expect, test } from "@jest/globals";
// import { UserEntity } from "../src/UserEntity";

// describe("Given that I am under age, I should not be able to subscribe", () => {
//   test("Returns false if users date of birth is over 13 years", () => {
//     document.body.innerHTML = `
//       <div class="input-field">
//         <label for="dob">Date of birth:</label>
//         <input type="date" id="dob" value="2022-01-01" />
//         <small></small>
//       </div>
//   `;
//     document.getElementById("dob");
//     const input = document.getElementById("dob") as HTMLInputElement;
//     expect(UserEntity.validate(input)).toBeFalsy();
//   });
//   test("Apply 'You must be more than 13 years old' on input field group", () => {
//     document.body.innerHTML = `
//       <div class="input-field">
//         <label for="dob">Date of birth:</label>
//         <input type="date" id="dob" value="2022-01-01" />
//         <small></small>
//       </div>
//   `;
//     document.getElementById("dob");
//     const input = document.getElementById("dob") as HTMLInputElement;
//     const small = document.querySelector("small");
//     UserEntity.validate(input);
//     expect(small?.innerText).toContain("You must be more than 13 years old");
//   });
// });

// describe("Given that my date of birth is in the future, I should not be able to subscribe", () => {
//   test("Returns false if users date of birth is in the future", () => {
//     document.body.innerHTML = `
//       <div class="input-field">
//         <label for="dob">Date of birth:</label>
//         <input type="date" id="dob" value="2500-01-01" />
//         <small></small>
//       </div>
//   `;
//     document.getElementById("dob");
//     const input = document.getElementById("dob") as HTMLInputElement;
//     expect(UserEntity.validate(input)).toBeFalsy();
//   });
//   test("Adds error class to date input", () => {
//     document.body.innerHTML = `
//       <div class="input-field">
//         <label for="dob">Date of birth:</label>
//         <input type="date" id="dob" value="2500-01-01" />
//         <small></small>
//       </div>
//   `;
//     document.getElementById("dob");
//     const input = document.getElementById("dob") as HTMLInputElement;
//     UserEntity.validate(input);
//     expect(input).toMatchSnapshot();
//   });
//   test("Apply 'Your birthday must be a past date!' on input field group", () => {
//     document.body.innerHTML = `
//       <div class="input-field">
//         <label for="dob">Date of birth:</label>
//         <input type="date" id="dob" value="2500-01-01" />
//         <small></small>
//       </div>
//   `;
//     document.getElementById("dob");
//     const input = document.getElementById("dob") as HTMLInputElement;
//     const small = document.querySelector("small");
//     UserEntity.validate(input);
//     expect(small?.innerText).toContain("Your birthday must be a past date!");
//   });
// });

// describe("Given that I have a valid date of birth, I can see how old I am", () => {
//   test("Returns the users valid age from the class getter", () => {
//     const validAge = new UserEntity(
//       "sam",
//       "burch",
//       "2000-01-01",
//       "sam.burch@gmail.com",
//       "pasword"
//     );
//     expect(validAge).toBeGreaterThan(13);
//   });
//   test("Adds success class to date input", () => {
//     document.body.innerHTML = `
//       <div class="input-field">
//         <label for="dob">Date of birth:</label>
//         <input type="date" id="dob" value="2000-01-01" />
//         <small></small>
//       </div>
//   `;
//     document.getElementById("dob");
//     const input = document.getElementById("dob") as HTMLInputElement;
//     UserEntity.validate(input);
//     expect(input).toMatchSnapshot();
//   });
// });
