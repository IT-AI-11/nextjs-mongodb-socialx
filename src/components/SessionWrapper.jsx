

"use client"

// for Recoil (for atom global state management)

import { RecoilRoot } from 'recoil';

// for pop up window
// only for client side
// but will cover all the application, works as a wrapper for the entire application
// <RecoilRoot> goes to (other pages > layout.jsx)
export default function SessionWrapper({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}