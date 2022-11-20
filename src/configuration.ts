import "./megaLandForm.css";
import { UserEntity } from "./UserEntity";

const registrationForm = document.querySelector<HTMLFormElement>(
  "#megaland-registration"
)!;

registrationForm.addEventListener("change", function (event) {
  const input = event.target as HTMLInputElement;
  UserEntity.validate(input);
});

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formElements = registrationForm.elements as HTMLFormControlsCollection;

  const firstname = UserEntity.validate(
    formElements[<any>"firstname"] as HTMLInputElement
  );
  const lastname: boolean = UserEntity.validate(
    formElements[<any>"lastname"] as HTMLInputElement
  );
  const dateOfBirth: boolean = UserEntity.validate(
    formElements[<any>"dob"] as HTMLInputElement
  );
  const email: boolean = UserEntity.validate(
    formElements[<any>"email"] as HTMLInputElement
  );
  const password: boolean = UserEntity.validate(
    formElements[<any>"password"] as HTMLInputElement
  );

  if (firstname && lastname && email && dateOfBirth && password) {
    const fn: string = (formElements[<any>"firstname"] as HTMLInputElement)
      .value;
    const ln: string = (formElements[<any>"lastname"] as HTMLInputElement)
      .value;
    const dob = <string>(formElements[<any>"dob"] as HTMLInputElement).value;
    const em = (formElements[<any>"email"] as HTMLInputElement).value;
    const pw = (formElements[<any>"password"] as HTMLInputElement).value;
    const userRegistration = new UserEntity(fn, ln, em, pw, dob);
    console.log(userRegistration);
  }
});
