import type { V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { db } from '~/utils/db.server';
import { Account } from 'models/Account';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export const loader = async () => {
  return json({
    investors: await db.user.findMany({ include: { account: true } }),
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Come invest with me</h1>

      <h2>Investors</h2>
      <ul>
        {data.investors.length > 0 ? (
          data.investors.map((investor) => {
            if (investor.account === null) return null;
            const account = new Account(investor.account);
            return (
              <li key={investor.id}>
                <div>Wallet: {account.publicId}</div>
                <div>Balance: {account.balance}</div>
                <div>Shares: {account.shares}</div>
                <div>Return: {account.getReturnRate()}%</div>
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
