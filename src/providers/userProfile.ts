interface UserProfile {
    name: string;
    email: string;
    interests: string[];
  }
  
  const fetchUserProfile = async (userId: string): Promise<UserProfile> => {
    // Fetch the user profile from your database
    // Example response from your database
    const response = await fetch(`/api/userProfile?userId=${userId}`);
    const userProfile = await response.json();
  
    return {
      name: userProfile.name,
      email: userProfile.email,
      interests: userProfile.interests,
    };
  };
  
  export { fetchUserProfile };
  