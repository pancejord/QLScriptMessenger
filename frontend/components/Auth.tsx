'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { NextPage,NextPageContext } from 'next';


// Import statements

const Auth: NextPage = () => {
    const { data: session, status } = useSession();
  
    const handleSignIn = () => {
      signIn('google');
    };
  
    const handleSignOut = () => {
      signOut();
    };
  
    if (status === 'loading') {
      // Loading state: Render a loading indicator or nothing
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        {session?.user ? (
          <div>
            <p>Welcome, {session.user.name}!</p>
            <button onClick={handleSignOut}>Sign out</button>
          </div>
        ) : (
          <button onClick={handleSignIn}>Sign in with Google</button>
        )}
      </div>
    );
  };
  
  export default Auth;
  
  
