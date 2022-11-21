import { Entity } from "./Entity";
import { DateOfBirth } from "./DateOfBirth";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class UserEntity extends Entity implements User {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    readonly password: string,
    readonly dateOfBirth: DateOfBirth
  ) {
    super();
    this.firstName = this.createName(firstName);
    this.lastName = this.createName(lastName);
    this.password = this.createPassword(password);
    this.email = this.createEmail(email);
    this.dateOfBirth = this.createDate(<any>dateOfBirth);
  }

  // Getters
  get age() {
    return this.dateOfBirth["age"];
  }

  get userFirstName(): string {
    return this.firstName;
  }

  get userLastName(): string {
    return this.lastName;
  }

  get userEmail(): string {
    return this.email;
  }

  // Validator methods
  static isValidInput(value: string): string {
    if (value.trim() === "") throw Error("Please enter");
    if (value.length > 32) throw Error("Must be less than 32 characters");
    return value;
  }

  static isValidEmail(value: string): boolean {
    if (value.length > 254) throw Error("Email must not exceed 254 characters");
    const email = value.toLowerCase();
    const validEmail: RegExp =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    validEmail.test(email);
    return validEmail.test(email);
  }

  static isValidPassword(value: string): string {
    const MIN_LENGTH = 8;
    const MAX_LENGTH = 32;
    const PW_VALIDATION: RegExp =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (value === undefined || value === "")
      throw Error("Password must not be empty");
    if (value.length < MIN_LENGTH)
      throw Error(`Password must be minimum of ${MIN_LENGTH}`);
    if (value.length > MAX_LENGTH)
      throw Error(`Password must not exceed ${MAX_LENGTH}`);
    if (!PW_VALIDATION)
      throw Error(
        `Password must be btween ${MIN_LENGTH} - ${MAX_LENGTH} and contain at last 1 uppercase character, 1 digit and 1 symbol  i.e. ( ! % ^ " )`
      );
    return value;
  }

  // Factory functions
  private createDate(value: string): DateOfBirth {
    return new DateOfBirth(value);
  }

  private createEmail(email: string): string {
    return UserEntity.isValidEmail(email) ? email : "Invalid email";
  }

  private createName(value: string): string {
    const name = value[0].toUpperCase() + value.slice(1);
    return UserEntity.isValidInput(name) ? name : "Invalid name";
  }

  private createPassword(value: string): string {
    const password = value;
    return UserEntity.isValidInput(password) ? password : "Invalid password";
  }

  // UI validation
  static validateInput(
    input: HTMLInputElement,
    message: string,
    valid: boolean
  ): boolean {
    const error = <HTMLDivElement>input.parentNode!.querySelector("small");
    error.innerText = message;
    input.className = valid ? "success" : "error";
    return !valid;
  }

  static validate(input: HTMLInputElement): boolean {
    const { type, value }: { type: string; value: string } = input;
    switch (type) {
      case "text":
        if (input.id === "firstname" && value.trim() === "") {
          this.validateInput(input, "You must enter your first name", false);
          return false;
        } else if (input.id === "lastname" && value.trim() === "") {
          this.validateInput(input, "You must enter your last name", false);
          return false;
        } else {
          this.validateInput(input, "", true);
          return true;
        }
      case "email":
        const email: string = value.toLowerCase().trim();
        if (email === "") {
          this.validateInput(input, "Email must not be blank", false);
          return false;
        }
        if (!this.isValidEmail) {
          this.validateInput(
            input,
            "Please enter a valid email address",
            false
          );
          return false;
        } else {
          this.validateInput(input, "", true);
          return true;
        }

      case "date":
        if (value === "") {
          this.validateInput(input, "You must enter your birthday", false);
          return false;
        } else if (0) {
          //FIX THIS
          this.validateInput(
            input,
            "You must be more than 13 years old",
            false
          );
          return false;
        } else {
          this.validateInput(input, "", true);
          return true;
        }

      case "password":
        if (value.length < 5 || value.trim() === "") {
          this.validateInput(input, "Minimum 5 characters", false);
          return false;
        } else {
          this.validateInput(input, "", true);
          return true;
        }
    }
    return false;
  }
}
