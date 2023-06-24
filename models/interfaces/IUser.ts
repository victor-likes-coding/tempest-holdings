export interface IUser {
  id: number;
  email: string;
  fullName: string;
  createdAt: Date;
  updatedAt: Date;
  accountId: number;
  password: string;
  role: string;
}
