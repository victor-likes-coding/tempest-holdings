import { Outlet } from "@remix-run/react";

export default function InvestRoute() {
  return (
    <div>
      <h1>Investment Center</h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}