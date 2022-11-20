interface ValueObject {
  date: string;
  age?: number;
}

export class DateOfBirth implements ValueObject {
  age?: number;
  constructor(public date: string) {
    this.age = DateOfBirth.getAge(date);
    this.date = DateOfBirth.isValidDate(date);
  }

  static getAge(value: string): number {
    return new Date().getFullYear() - new Date(value).getFullYear();
  }

  static isValidDate(date: string): any {
    const age = this.getAge(date);
    if (age < 13) throw Error("You must be 13 years old or more");
    return new Date(date).toISOString();
  }
}
