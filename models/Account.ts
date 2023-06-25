import type { IAccount } from './interfaces';
import { maxDistributions, maxShares } from 'app.config.json';

export class Account implements IAccount {
  id: string;
  balance: number;
  userId: string;
  publicId: string;
  shares: number;
  userAccount: boolean;
  createdAt: string;
  updatedAt: string;

  constructor(data: IAccount) {
    this.id = data.id;
    this.balance = data.balance;
    this.userId = data.userId;
    this.publicId = data.publicId;
    this.shares = data.shares;
    this.userAccount = data.userAccount;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  getReturnRate(): string {
    return ((maxDistributions / maxShares) * 100 * this.shares).toFixed(7).replace(/\.?0+$/, '');
  }
}
