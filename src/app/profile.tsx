import React, { useEffect, useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { fetchUserProfile } from '@/providers/userProfile';

interface UserProfile {
  name: string;
  email: string;
  interests: string[];
}

const ProfilePage: React.FC = () => {
  const { userId } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (userId) {
        const userProfile = await fetchUserProfile(userId);
        setProfile(userProfile);
      }
    };

    fetchProfile();
  }, [userId]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">{profile.name}</h2>
        <p className="text-gray-600">Email: {profile.email}</p>
        <h3 className="text-lg font-semibold mt-4">Interests</h3>
        <ul className="list-disc list-inside">
          {profile.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
