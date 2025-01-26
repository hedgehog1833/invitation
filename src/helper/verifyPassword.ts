import { Md5 } from "ts-md5";
export const verifyPassword = (password: string) => {
  return Md5.hashStr(password) === "3dce9b9e73a6e329102f92536883c96e";
};
