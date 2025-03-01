


// CLIENT-SIDE
'use client';


import { useUser } from '@clerk/nextjs'; // user data comes from Clerk
import { HiOutlinePhotograph } from 'react-icons/hi';
import { useState } from 'react';


// component Input.jsx
export default function Input() {

    
    const [text, setText] = useState('');
    const [postLoading, setPostLoading] = useState(false);
    const { user, isSignedIn, isLoaded } = useUser();// user data comes from Clerk
  
    if (!isSignedIn || !isLoaded) {
      return null;
    }

    const handleSubmit = async () => {

        setPostLoading(true);

        const response = await fetch('/api/post/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // sending information to the body
          body: JSON.stringify({
            userMongoId: user.publicMetadata.userMongoId,
            name: user.fullName,
            username: user.username,
            text,
            //text: user.text,
            profileImg: user.imageUrl,
            //image: imageFileUrl,
          }),
        });
        setPostLoading(false);
        setText('');
        //setSelectedFile(null);
        //setImageFileUrl(null);
        location.reload();
      };

    return (
      <div className='flex border-b border-gray-200 p-3 space-x-3 w-full'>
        <img
          // image from Clerk user
          src={user.imageUrl}
          alt='user-img'
          className='h-11 w-11 rounded-full cursor-pointer hover:brightness-95 object-cover'
        />
        <div className='w-full divide-y divide-gray-200'>
          <textarea
            className='w-full border-none outline-none tracking-wide min-h-[50px] text-gray-700 '
            placeholder='Whats happening'
            rows='2'


            value={text}//=====
            onChange={(e) => setText(e.target.value)}//====
          ></textarea>
          <div className='flex items-center justify-between pt-2.5'>
            
            <HiOutlinePhotograph className='h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 rounded-full cursor-pointer' />

            <button
              //disabled //====
              disabled={text.trim() === '' || postLoading}
              className='bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50'
              onClick={handleSubmit}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    );
  }