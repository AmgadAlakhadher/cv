import cls from './heroSection.module.scss';
import img from 'shared/assest/images/photo_2023-10-06_11-50-27.jpg'
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';
import {Image} from 'antd';
import { motion } from 'framer-motion';
export const HeroSection = () => {

  const [t] = useTranslation();

  return (
    <section className={cls.section} id='home'>
      <div className="myContainer">
        <div className={`${cls.section__content} row`}>
          <motion.div 
            className={`${cls.section__content__left} col-lg-8 col-md-12`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <h1 className={cls.section__content__left__title}>
              <span className={cls.span}>{t('hero_section_title_span')}</span>{" "}
              <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    t('hero_section_title_name'),
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    t('hero_section_title'),
                    1000,
                    t('hero_section_title_fullstack'),
                    1000,
                    ]}
                    wrapper="span"
                    speed={10}
                    repeat={Infinity}
                />
            </h1>
            <p className={cls.section__content__left__desc}>
              {t('hero_section_desc')}
            </p>
            <div className={cls.section__content__left__btns}>
                <button className={`${cls.section__content__left__btn} ${cls.hireMe}`}>{t('hero_section_btn_hireme')}</button>
                <button className={`${cls.section__content__left__btn} ${cls.download}`}>{t('hero_section_btn_download')}&nbsp;<span style={{textTransform: "capitalize"}}>{t('hero_section_btn_download_cv')}</span></button>
            </div>
          </motion.div>
          <motion.div 
            className={`${cls.section__content__right} col-lg-4 col-md-12`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            >
              <div className={cls.section__content__right__box}>
                <Image
                  className={cls.section__content__right__box_img}
                  preview={false}
                  src={img}
                  alt="image_"
                />
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


