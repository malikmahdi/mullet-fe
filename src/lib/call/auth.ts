import API from "../api";

interface IRegisterBody {
  username: string;
  email: string;
  password: string;
}

export const RegisterApi = async (body: IRegisterBody) => {
  return await API.post("auth/signup", body);
};
