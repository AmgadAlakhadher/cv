import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import cls from './contact.module.scss';

export const Contact = () => (
    <section className={`${cls.contact}`} id='contact'>
        <div className="myContainer">
            <div className={`${cls.contact__content} row `}>
                <div className={`${cls.contact__content__left} col-lg-6 col-sm-12 `}>
                    <h3 className={`${cls.contact__content__left_title} `}>
                        let's connect
                    </h3>
                    <p className={`${cls.contact__content__left_desc} `}>
                        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className={`${cls.contact__content__left__icons} `}>
                        <Link to={''}><AiFillGithub className={`${cls.contact__content__left__icons_icon}`} /></Link>
                        <Link to={''}>
                            <BsLinkedin className={`${cls.contact__content__left__icons_icon}`} /></Link>
                    </div>
                </div>
                <form className={`${cls.contact__content__right} col-lg-6 col-sm-12`} id="contact">
                    <label htmlFor="email">your email</label>
                    <input type="email" name="" id="email" placeholder='example@gmail.com' />
                    <label htmlFor="subject">subject</label>
                    <input type="text" name="" id="subject" placeholder='just saying hi' />
                    <label htmlFor="meassage">meassage</label>
                    <textarea name="postContent" rows={4} cols={50} placeholder='write your message'/>
                    {/* <textarea type="text" name="" id="meassage" placeholder=""></textarea> */}
                    <button className={`${cls.contact__content__right_btn}`}>send</button>
                </form>
            </div>
        </div>
    </section>
)

