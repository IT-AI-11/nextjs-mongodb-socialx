


'use client';

import React from 'react';

import { HiOutlineChat, HiOutlineHeart, HiOutlineTrash } from 'react-icons/hi';
// import { modalAtomm } from '@/atom/modalAtom';
// import { useRecoilState } from 'recoil';

export default function Icons() {

    //const [open, setOpen] = useRecoilState(modalAtomm);

  return (
    <div className='ICONS-test flex justify-start gap-5 p-2 text-gray-500'>


      <HiOutlineChat className='h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100'
        //    onClick={() => {
        //     if (!user) {
        //       router.push('/sign-in');
        //     } else {
        //       setOpen(!open);
        //       setPostId(post._id);
        //     }
        //   }}
        //onClick={() => setOpen(!open)}
      />


      <HiOutlineHeart className='h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-red-500 hover:bg-red-100' />
      <HiOutlineTrash className='h-8 w-8 cursor-pointer rounded-full  transition duration-500 ease-in-out p-2 hover:text-red-500 hover:bg-red-100' />
    </div>
  );
}