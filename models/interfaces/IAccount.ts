import type { IUser } from './IUser';

export interface IAccount {
  id: number;
  balance: number;
  userId: number;
  publicId: string;
  shares: number;
}
