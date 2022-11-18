import "./megaLandForm.css";
import { UserRegistration } from "./megaLandForm";

const registrationForm = document.querySelector<HTMLFormElement>(
  "#megaland-registration"
)!;

registrationForm.addEventListener("change", function (event) {
  const input = event.target as HTMLInputElement;
  UserRegistration.validate(input);
});

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formElements = registrationForm.elements as HTMLFormControlsCollection;

  const firstname = UserRegistration.validate(
    formElements[<any>"firstname"] as HTMLInputElement
  );
  const lastname: boolean = UserRegistration.validate(
    formElements[<any>"lastname"] as HTMLInputElement
  );
  const dateOfBirth: boolean = UserRegistration.validate(
    formElements[<any>"dob"] as HTMLInputElement
  );
  const email: boolean = UserRegistration.validate(
    formElements[<any>"email"] as HTMLInputElement
  );
  const password: boolean = UserRegistration.validate(
    formElements[<any>"password"] as HTMLInputElement
  );
  // Make the object properties / values immutable
  if (firstname && lastname && email && dateOfBirth && password) {
    const fn: string = UserRegistration.formatName(
      (formElements[<any>"firstname"] as HTMLInputElement).value
    );
    const ln: string = UserRegistration.formatName(
      (formElements[<any>"lastname"] as HTMLInputElement).value
    );
    const dob: Date = (formElements[<any>"dob"] as HTMLInputElement)
      .value as unknown as Date;
    const em = (formElements[<any>"email"] as HTMLInputElement).value;
    const pw = (formElements[<any>"password"] as HTMLInputElement).value;
    const user = Object.freeze(new UserRegistration(fn, ln, dob, em, pw));
    // Log user
    console.log(user);
    // Get user age
    console.log(user.age);
  }
});
