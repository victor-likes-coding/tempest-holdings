import type { IUser } from './interfaces';

export class User implements IUser {
  id: number;
  email: string;
  fullName: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;

  constructor(data: IUser) {
    this.id = data.id;
    this.email = data.email;
    this.fullName = data.fullName;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.role = data.role;
  }
}
