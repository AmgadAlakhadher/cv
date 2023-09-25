import{ memo, useRef } from 'react';
import {FaBars} from 'react-icons/fa'
import cls from './header.module.scss';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { ThemeIcon } from 'features/Theme';

const Header = () => {
  const navRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  // const isClose = false;
  const barsIcon = () => {
    navRef.current?.classList.toggle(cls.active);
    overlayRef.current?.classList.toggle(cls.active);
  }

  return (
    
    <header className={cls.header}>
    <div className={cls.header__container}>
      <Link to="#" className={cls.header__container__logo}>logo</Link>
      <nav className={cls.header__container__nav } ref={navRef} onBlur={barsIcon}>
        <div className={cls.header__container__close_icon}><AiOutlineClose onClick={barsIcon} /></div>
        <NavLink to="/" className={cls.header__container__nav__item}>home</NavLink>
        <NavLink to="/#">about</NavLink>
        <NavLink to="/yes">contact</NavLink>
      </nav>
      <div className={cls.header__container__content}>
        <div className={cls.header__container__bar_icon}><FaBars onClick={barsIcon}/></div>
        <ThemeIcon />
      </div>
    <div className={cls.header__container__overlay} ref={overlayRef} onClick={barsIcon}></div>
  </div>
</header>

  )
}

export default memo(Header)
