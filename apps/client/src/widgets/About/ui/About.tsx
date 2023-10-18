import cls from './about.module.scss';
import img from 'shared/assest/images/download.jpeg'
import { useTranslation } from 'react-i18next';
import {Image,Tabs} from 'antd';
import type { TabsProps } from 'antd';
import { motion } from 'framer-motion';

export const About = () => {
  const [t] = useTranslation();
  const skills:string[] = ["HTML","CSS (BOOTSTRAP,SASS)","JavaScript","MYSQL",`PHP (${t('stepen_noop')})`,"React,Redux,Redux toolkit,TypeScript","Express","Nodejs",t('oop'),t('triks_coding')]

  const onChange = (key: string) => {
    // console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <p className={cls.tabs_title}>{t('about_skills')}</p>,
      children: <ul className={cls.about__list}>
        {
            skills.map((item:string,index)=> {
                return(
                    <li key={index} className={cls.about__list_item}>{item}</li>
                )
            })
        }
      </ul>,
    },
    {
      key: '2',
      label: <p className={cls.tabs_title}>{t('about_education')}</p>,
      children: <p className={cls.about_education_desc}>{t('about_education_desc')}</p>,
    },
    {
      key: '3',
      label: <p className={cls.tabs_title}>{t('languages')}</p>,
      children: <ul className={cls.about__list}>
            <li className={cls.about__list_item}>english</li>
            <li className={cls.about__list_item}>russian</li>
            <li className={cls.about__list_item}>arabic</li>
         </ul>,
    },
  ];

  return (
    <section className={cls.about} id='about'>
     <div className="myContainer">
      <div className="row">
        <motion.div className="col-lg-5 col-md-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
            <div className={cls.about__content__left__box}>
                <Image
                    className={cls.about__content__left__box_img}
                    preview={false}
                    src={img}
                    alt="image_"
                    />
            </div>
        </motion.div>
        <motion.div className="col-lg-7 col-md-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <div className={cls.about__content__right}>
                <h3 className={cls.about__content__right_title}>
                    {t('about_title')}
                </h3>
                <p className={cls.about__content__right_desc}>
                    {t('about_desc')}обо мне
                </p>
                <div className={cls.about__content__right}></div>
                <Tabs 
                  defaultActiveKey="1" 
                  items={items} 
                  onChange={onChange} 
                  className={cls.about__content__right_tabs}
                />
            </div>
        </motion.div>
        </div>
     </div>
    </section>
  )
}


