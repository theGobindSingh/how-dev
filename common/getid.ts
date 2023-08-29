import { customAlphabet } from "nanoid/non-secure";

const getid = customAlphabet(
  "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_",
  5
);

export default getid;
