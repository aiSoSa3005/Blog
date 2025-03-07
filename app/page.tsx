'use client'; // This is a Client Component

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {!session && (
        <>
          <p>You are not signed in.</p>
          <button onClick={() => signIn('github')}>Sign in with GitHub</button>
        </>
      )}
      {session && (
        <>
          <p>Welcome, {session.user?.name}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}