export interface IUser {
  id?: number;
  username: string;
  email: string;
  profile?: IProfile;
}

export interface IProfile {
  id?: number;
  name?: string;
  gender?: Gender;
  avatar?: string;
  user: IUser;
}

enum Gender {
  laki,
  perempuan,
}
