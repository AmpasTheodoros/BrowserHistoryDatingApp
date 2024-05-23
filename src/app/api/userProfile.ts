import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId } = req.query;

  if (!userId || Array.isArray(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  // Fetch user profile from your database
  // Example:
  const userProfile = await getUserProfileFromDatabase(userId);

  res.status(200).json(userProfile);
};

// Mock function to simulate database call
const getUserProfileFromDatabase = async (userId: string) => {
  // Example user profile data
  return {
    name: 'John Doe',
    email: 'john.doe@example.com',
    interests: ['hiking', 'reading', 'tech'],
  };
};

export default handler;
