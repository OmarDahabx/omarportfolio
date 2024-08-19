import React, { useEffect } from 'react';

function Seco() {
  useEffect(() => {
    const dark = document.getElementById('dark');
    const body = document.getElementById('body');
    const daroh2 = document.getElementById('daroh2');

    const handleDarkMode = () => {
      body.classList.toggle('dark');
      daroh2.classList.toggle('dark');
    };

    dark.addEventListener('click', handleDarkMode);

    return () => {
      dark.removeEventListener('click', handleDarkMode);
    };
  }, []);

  return (
    <div>
    </div>
  );
}

export default Seco;