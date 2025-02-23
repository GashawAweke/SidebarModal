import React from 'react';
import { useGlobalContext } from './src/Context';
import { FaBars } from 'react-icons/fa';

const Home = () => {
  const { isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal } =
    useGlobalContext();

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        open modal
      </button>
    </main>
  );
};

export default Home;
