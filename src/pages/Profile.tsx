import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { AuthTabs } from '../components/AuthTabs';
import { User } from '@supabase/supabase-js';

export function Profile() {
  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (!user) {
    return (
      <div className="p-4 flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-6">Welcome</h1>
        <AuthTabs />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <p className="text-gray-600">Email: {user.email}</p>
      </div>
      <button
        onClick={handleSignOut}
        className="w-full bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
}