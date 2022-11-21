interface ValueObject {
  date: string;
  age?: number;
}

export class DateOfBirth implements ValueObject {
  age?: number;
  constructor(public date: string) {
    this.date = DateOfBirth.isValidDate(date);
    this.age = this.getAge(date);
  }

  // Validator
  static isValidDate(date: string): any {
    const thirteenYears = new Date(
      new Date().setFullYear(new Date().getFullYear() - 13)
    );
    const input = new Date(date);
    if (input >= thirteenYears) {
      throw Error("You must be more than 13 years old");
    } else {
      return new Date(date).toISOString();
    }
  }

  // Factory method
  private getAge(value: string) {
    return new Date().getFullYear() - new Date(value).getFullYear();
  }
}
