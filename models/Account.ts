import type { IAccount } from './interfaces';
import { maxDistributions, maxShares } from 'app.config.json';

export class Account implements IAccount {
  id: number;
  balance: number;
  userId: number;
  publicId: string;
  shares: number;

  constructor(data: IAccount) {
    this.id = data.id;
    this.balance = data.balance;
    this.userId = data.userId;
    this.publicId = data.publicId;
    this.shares = data.shares;
  }

  getReturnRate(): string {
    return ((maxDistributions / maxShares) * this.shares * 100)
      .toFixed(7)
      .replace(/\.?0+$/, '');
  }
}
