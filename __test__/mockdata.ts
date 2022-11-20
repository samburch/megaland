import { UserEntity } from "../src/UserEntity";

export const sameUserOne = new UserEntity(
  "Carl",
  "Sagan",
  "carl@sagan.com",
  "123456789",
  "1934-11-09"
);

export const sameUserTwo = new UserEntity(
  "Carl",
  "Sagan",
  "carl@sagan.com",
  "123456789",
  "1934-11-09"
);

export default {
  sameUserOne,
  sameUserTwo,
};
