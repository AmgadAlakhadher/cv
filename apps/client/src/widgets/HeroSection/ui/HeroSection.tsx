import { Button } from 'antd';
import cls from './heroSection.module.scss';
import img from 'shared/assest/images/[removal.ai]_bf9ce398-4529-4ba5-abfd-12d0d8326f17-bd771ed1a4f31322288c5d71b4439294.png'
import { TypeAnimation } from 'react-type-animation';
export const HeroSection = () => {
  return (
    <section className={cls.section}>
      <div className={cls.container}>
        <div className={cls.section__content}>
            <div className={cls.section__content__left}>
                <h1 className={cls.section__content__left__title}>
                  <span className={cls.span}>hello, i'm</span>{" "}
                  <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'amgad',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'web developer',
                        1000,
                        ]}
                        wrapper="span"
                        speed={10}
                        repeat={Infinity}
                    />
                </h1>
                <p className={cls.section__content__left__desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi excepturi odit eaque sequi nemo labore, iure a ab. Incidunt accusamus voluptas architecto quae doloribus eligendi rerum repudiandae aliquam dolores eveniet!
                </p>
                <div className="btns">
                    <button className={`${cls.section__content__left__btn} ${cls.hireMe}`}>hire me</button>
                    <button className={`${cls.section__content__left__btn} ${cls.download}`}>download&nbsp;<span style={{textTransform: "capitalize"}}>CV</span></button>
                </div>
            </div>
            <div className={cls.section__content__right}>
                <div className={cls.section__content__right__box}>
                    <img src={img} alt="image_" />
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}


