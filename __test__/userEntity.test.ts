import { describe, expect, test } from "@jest/globals";
import { DateOfBirth } from "../src/DateOfBirth";
import { UserEntity } from "../src/UserEntity";
import { sameUserOne, sameUserTwo } from "./mockdata";

describe("Given this is an Object Entity", () => {
  test("When the object is instantiated, then the entity is uniquely identifiable", () => {
    const newUser = new UserEntity(
      "tim",
      "robbins",
      "test@test.com",
      "12345",
      "2000-01-01"
    );
    expect(newUser).toHaveProperty("id");
  });
  test("When there are two UserEntity's with the same details, then they are treated as unique", () => {
    expect(sameUserOne).not.toBe(sameUserTwo);
  });
});

describe("Given that the user has valid details", () => {
  test("Then the valid email address method will return true", () => {
    const validEmail = "test@test.com";
    expect(UserEntity.isValidEmail(validEmail)).toBeTruthy();
  });
  test("Then the first letter of the FirstName should be upprer case", () => {
    const firstNameLowerCase = "tim";
    const newUser = new UserEntity(
      firstNameLowerCase,
      "Burch",
      "test@test.com",
      "12345",
      "2000-01-01"
    );
    expect(newUser.userFirstName).toMatch("Tim");
  });
  test("Then the first letter of the LastName should be upper case", () => {
    const lastNameLowerCase = "robbins";
    const newUser = new UserEntity(
      "tim",
      lastNameLowerCase,
      "test@test.com",
      "12345",
      "2000-01-01"
    );
    expect(newUser.userLastName).toMatch("Robbins");
  });
  test("Then the date of birth should be an ISO formatted date string", () => {
    const overThirteen = "2009-01-01";
    const toUppercaseName = new UserEntity(
      "tim",
      "robbins",
      "test@test.com",
      "12345",
      overThirteen
    );
    expect(toUppercaseName.dateOfBirth["date"]).toMatch(
      "2009-01-01T00:00:00.000Z"
    );
  });
  test("Then their age should be over 13", () => {
    const overThirteen = "2009-01-01";
    const newUser = new UserEntity(
      "tim",
      "robbins",
      "test@test.com",
      "12345",
      overThirteen
    );
    expect(newUser.age).toBeGreaterThanOrEqual(13);
  });
});

describe("Given that the user has email address is invalid", () => {
  test("Then should be return false when fake email is used", () => {
    const invalidEmail = "notanemail";
    expect(UserEntity.isValidEmail(invalidEmail)).toBeFalsy();
  });

  test("Then should throw error if empty", () => {
    const empty = " ";
    expect(() => {
      UserEntity.isValidInput(empty);
    }).toThrow("Please enter");
  });

  test("Then should throw error if email address is more than 254 chars", () => {
    const exceedsCharLimit = "S".repeat(255);
    expect(() => {
      UserEntity.isValidEmail(exceedsCharLimit);
    }).toThrow("Email must not exceed 254 characters");
  });
});

describe("Given that the user name is invalid", () => {
  test("Then should throw error if name input is more than 32 chars", () => {
    const exceedsCharLimit = "s".repeat(33);
    expect(() => {
      UserEntity.isValidInput(exceedsCharLimit);
    }).toThrow("Must be less than 32 characters");
  });
});

describe("Given that the users date of birth is below minimum age", () => {
  test("Then they should not be able to sign up", () => {
    const underAge = "2999-01-01";
    expect(() => {
      DateOfBirth.isValidDate(underAge);
    }).toThrowError("You must be 13 years old or more");
  });
});
