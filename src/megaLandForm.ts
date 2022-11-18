export interface User {
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
  password: string;
}

export class UserRegistration implements User {
  constructor(
    public firstName: string,
    public lastName: string,
    public dob: Date,
    public email: string,
    public password: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.email = email;
    this.password = password;
  }

  get age(): number {
    return UserRegistration.calculateAge(this.dob);
  }

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

  static formatName(value: string): string {
    if (value[0] === undefined) return "Anonymous";
    return value[0].toUpperCase() + value.slice(1);
  }

  static calculateAge(value: Date): number {
    const todaysDate = new Date().getFullYear();
    const selectedDate = new Date(value).getFullYear();
    const age: number = todaysDate - selectedDate;
    return age;
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
          this.formatName(value);
          return true;
        }
      case "email":
        const email: string = value.toLowerCase().trim();
        const validEmail: RegExp =
          /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if (email === "") {
          this.validateInput(input, "Email must not be blank", false);
          return false;
        }
        if (!email.match(validEmail)) {
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
        const age = this.calculateAge(new Date(value));
        if (value === "") {
          this.validateInput(input, "You must enter your birthday", false);
          return false;
        }
        if (Math.sign(age) === -1) {
          this.validateInput(
            input,
            "Your birthday must be a past date!",
            false
          );
          return false;
        } else if (age < 13) {
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
