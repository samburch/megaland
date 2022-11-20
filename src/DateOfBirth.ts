interface ValueObject {
  date: string;
  age: number;
}

export class DateOfBirth implements ValueObject {
  readonly age: number;
  constructor(public date: string) {
    this.age = this.calcAge;
    this.date = this.isValidDate(date);
  }

  private get calcAge(): number {
    return new Date().getFullYear() - new Date(this.date).getFullYear();
  }

  isValidDate(date: string): any {
    if (this.calcAge < 13) return "You must be 13 years old or more";
    return new Date(date).toISOString();
  }
}
