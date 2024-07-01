import API from "../api";

interface IRegisterBody {
  username: string;
  email: string;
  password: string;
}

interface ILoginBody {
  email: string;
  password: string;
}

export const RegisterApi = async (body: IRegisterBody) => {
  return await API.post("auth/signup", body);
};

export const LoginApi = async (body: ILoginBody) => {
  return await API.post("auth/signin", body);
};
