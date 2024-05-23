import React, { useState } from 'react';

const interests = ['Sports', 'Music', 'Movies', 'Tech', 'Travel', 'Books', 'Gaming'];

const Onboarding: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = () => {
    // Save selected interests to the user's profile in your database
    console.log('Selected interests:', selectedInterests);
  };

  return (
    <div>
      <h2>Select your interests</h2>
      <div className="interests">
        {interests.map((interest) => (
          <button
            key={interest}
            onClick={() => toggleInterest(interest)}
            className={selectedInterests.includes(interest) ? 'selected' : ''}
          >
            {interest}
          </button>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Onboarding;
