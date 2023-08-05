import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import LoginModal from '../login/LoginModal';
import UserProfile from '../user/UserProfile';
import { useUser } from '../../hooks/useUser';
import logo from '../../../public/images/logo.png';

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const { data : user } = useUser();

  return (
    <header className='flex justify-between'>
      <h1 className='px-10 py-7 text-2xl inline-block'>
        <Link to='/'>
          <img src={logo} alt='logo' className='w-[80px] h-[30]' />
        </Link>
      </h1>
      <nav className='mx-12 flex items-center font-semibold'>
        {user ? (
          <div className='mr-3'>
            <Link to='/mypage' className='flex items-center'>
              <UserProfile />
            </Link>
          </div>
        ) : (
          <Button text={'로그인'} onClick={() => setOpenModal(true)} className='p-5' />
        )}
        {openModal && <LoginModal onCloseModal={() => setOpenModal(false)} />}
      </nav>
    </header>
  );
}
