import cls from './footer.module.scss';

export const Footer = () => {
  return (
    <section className={cls.footer}>
      <div className={cls.footer__content}>
        <p className={cls.footer__content_logo}>logo</p>
        <p className={`${cls.footer__content_copyright} capitalize`}>all rights reserved.</p>
      </div>
    </section>
  )
}

