import cls from './about.module.scss';
import img from 'shared/assest/images/download.jpeg'
import { useTranslation } from 'react-i18next';
import {Image,Tabs} from 'antd';
import type { TabsProps } from 'antd';

export const About = () => {
  const [t] = useTranslation();

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];

  return (
    <section className={cls.about}>
      <div className={cls.container}>
        {/* <div className={cls.about__counter}>

        </div> */}
        <div className={cls.about__content}>
            <div className={cls.about__content__left}>
            <div className={cls.about__content__left__box}>
                <Image
                    className={cls.about__content__left__box_img}
                    preview={false}
                    src={img}
                    alt="image_"
                    />
            </div>
            </div>
            <div className={cls.about__content__right}>
                <h3 className={cls.about__content__right_title}>
                    {t('about_title')}
                </h3>
                <p className={cls.about__content__right_desc}>
                    {t('about_desc')}обо мне
                </p>
                <div className={cls.about__content__right}></div>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
        </div>
      </div>
    </section>
  )
}


