


import User from '../models/user.model';
import { connect } from '../mongodb/mongoose';



export const createOrUpdateUser = async (
  // it comes from Clerk > Configure > Webhooks > Event Catalog > user.created/user.updated/user.deleted  
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
) => {
  try {
    // connect MongoDB
    await connect();
    // from Schema/model 'User'
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        // $set: if User is not created => creates
        // $set: if User created => updates
        $set: {
          firstName: first_name,
          lastName: last_name,
          avatar: image_url,
          email: email_addresses[0].email_address,
          username,
        },
      },
      { new: true, upsert: true }
    );
    return user;
  } catch (error) {
    console.log('Error creating or updating user:', error);
  }
};

export const deleteUser = async (id) => {
  try {
    await connect();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log('Error deleting user:', error);
  }
};