import React, { useEffect } from 'react';

const Header = () => {
  const setHeader = _event => {
    const [title] = document.getElementsByClassName('Header_title');
    const [subTitle] = document.getElementsByClassName('Header_subtitle');
    if (window.pageYOffset > 10) {
      subTitle.classList.add('Header_subtitle-small');
      title.classList.add('Header_title-small')
    } else if (subTitle.classList.contains('Header_subtitle-small')) {
      subTitle.classList.remove('Header_subtitle-small');
      title.classList.remove('Header_title-small')
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setHeader);

    return () => { window.removeEventListener('scroll', setHeader) }
  }, []);

  return (
    <div className="Header_header">
      <h1 className="Header_title">
        AMPLYFI
          </h1>
      <p className="Header_subtitle">
        Code Challenge
      </p>
    </div>
  );
}

export default Header;