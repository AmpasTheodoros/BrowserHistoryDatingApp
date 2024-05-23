import React from 'react';
import TinderCard from 'react-tinder-card';

interface Profile {
  name: string;
  photoURL: string;
  bio: string;
  interests: string[];
}

const ProfileCard: React.FC<{ profile: Profile; onSwipe: (direction: string, profile: Profile) => void }> = ({
  profile,
  onSwipe,
}) => {
  const handleSwipe = (direction: string) => {
    onSwipe(direction, profile);
  };

  return (
    <TinderCard onSwipe={handleSwipe} preventSwipe={['up', 'down']}>
      <div className="card bg-white p-4 shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold">{profile.name}</h3>
        <img src={profile.photoURL} alt={profile.name} className="w-full h-48 object-cover rounded-lg" />
        <p className="text-gray-600">{profile.bio}</p>
      </div>
    </TinderCard>
  );
};

export default ProfileCard;
