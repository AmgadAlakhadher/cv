import{ memo, useRef } from 'react';
import {FaBars} from 'react-icons/fa'
import cls from './header.module.scss';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { ThemeIcon } from 'features/Theme';
import { Dropdown, Button, Space, message } from 'antd';  
import type { MenuProps } from 'antd';

const Header = () => {
  const navRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // const isClose = false;
  const barsIcon = () => {
    navRef.current?.classList.toggle(cls.active);
    overlayRef.current?.classList.toggle(cls.active);
  }
  
  const onChangeLanguage: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e.key);
  }

  const contentDropdown = {
    items: [
      {label: 'english',key:'english'},
      {label: 'russian',key: 'russian'}
    ],
    onClick: onChangeLanguage
  }

  return (
    
    <header className={cls.header}>
      <div className={cls.header__container}>
        <Link to="/" className={cls.header__container__logo}>developer</Link>
        <nav className={cls.header__container__nav } ref={navRef} onBlur={barsIcon}>
          <div className={cls.header__container__close_icon}><AiOutlineClose onClick={barsIcon} /></div>
          <a href="/" className={`${cls.header__container__nav__item} ${cls.active}`}>home</a>
          <a href="/" className={cls.header__container__nav__item}>about</a>
          <a href="/yes" className={cls.header__container__nav__item}>contact</a>
        </nav>
        <div className={cls.header__container__content}>
            <div className={cls.header__container__content__info}>
              <Dropdown menu={contentDropdown}>
                <Button>
                  <Space>
                    languages
                    <IoIosArrowDown />
                  </Space>
                </Button>
              </Dropdown>
              <ThemeIcon />
            </div>
          <div className={cls.header__container__content__bar_icon}><FaBars onClick={barsIcon}/></div>
          </div>
        <div className={cls.header__container__overlay} ref={overlayRef} onClick={barsIcon}></div>
      </div>
    </header>

  )
}

export default memo(Header)
