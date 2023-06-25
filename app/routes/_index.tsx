import type { V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Account } from 'models/Account';
import type { User } from 'models/User';
import { db } from '~/utils/db.server';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const loader = async () => {
  const accounts = await db.account.findMany();

  return { accounts };
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Come invest with me</h1>

      <h2>Investors</h2>
      <ul>
        {data.accounts && data.accounts.length > 0 ? (
          data?.accounts?.map((account) => {
            if (!account.userAccount || !account) return null;
            const acc = new Account(account);
            return (
              <li key={account.id}>
                <div>Wallet: {acc.publicId}</div>
                <div>Balance: ${acc.balance.toLocaleString()}</div>
                <div>Shares: {acc.shares.toLocaleString()}</div>
                <div>Return: {acc.getReturnRate()}%</div>
              </li>
            );
          })
        ) : (
          <li>No investors</li>
        )}
      </ul>
    </div>
  );
}
