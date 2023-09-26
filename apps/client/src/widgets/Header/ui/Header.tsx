import{ memo, useEffect, useRef } from 'react';
import {FaBars} from 'react-icons/fa'
import cls from './header.module.scss';
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { ThemeIcon } from 'features/Theme';
import { Dropdown, Button, Space, message } from 'antd';  
import {useTranslation} from 'react-i18next';
import type { MenuProps } from 'antd';

const Header = () => {
  const navRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [t,i18n] = useTranslation();
  const barsIcon = () => {
    navRef.current?.classList.toggle(cls.active);
    overlayRef.current?.classList.toggle(cls.active);
  }
  
  const onChangeLanguage: MenuProps['onClick'] = (e) => {
    if(i18n.language !== e.key){
      i18n.changeLanguage(e.key);
      message.success(t('message_change_language'));
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }

  const contentDropdown = {
    items: [
      {label: t('english'),key:'en'},
      {label: t('russian'),key: 'ru'}
    ],
    onClick: onChangeLanguage
  }



  return (
    <header className={cls.header}>
      <div className={cls.header__container}>
        <Link to="/" className={cls.header__container__logo}>{t('logo')}</Link>
        <nav className={cls.header__container__nav } ref={navRef} onBlur={barsIcon}>
          <div className={cls.header__container__close_icon}><AiOutlineClose onClick={barsIcon} /></div>
          <a href="/" className={`${cls.header__container__nav__item} ${cls.active}`}>{t('menu_home')}</a>
          <a href="/" className={cls.header__container__nav__item}>{t('menu_about')}</a>
          <a href="/yes" className={cls.header__container__nav__item}>{t('menu_contact')}</a>
        </nav>
        <div className={cls.header__container__content}>
            <div className={cls.header__container__content__info}>
              <Dropdown menu={contentDropdown}>
                <Button>
                  <Space>
                    {t('languages')}
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
