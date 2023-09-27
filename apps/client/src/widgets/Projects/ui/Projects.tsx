import cls from './projects.module.scss';
import img from 'shared/assest/images/download.jpeg';
import {Image} from 'antd';

export const Projects = () => {
    const projects = [
        {
            id: "4",
            urlImg: "https://i.postimg.cc/MK9HQygq/pexels-negative-space-169573.jpg",
            title: "laptop",
            desc: "description project",
            tag: "tag"
        },
        {
            id: "5",
            urlImg: "https://i.postimg.cc/Bn2KT1qR/hamburger.jpg",
            title: "laptop",
            desc: "description project",
            tag: "tag"
        },
        {
            id: "1",
            urlImg: "https://i.postimg.cc/HLHWRdKh/home-bg.jpg",
            title: "laptop",
            desc: "description project",
            tag: "tag"
        },
        {
            id: "2",
            urlImg: "https://i.postimg.cc/KjCSZn5J/portfolio-img6.jpg",
            title: "laptop",
            desc: "description project",
            tag: "tag"
        },
        {
            id: "3",
            urlImg: "https://i.postimg.cc/cCZwDpW7/portfolio-img1.jpg",
            title: "laptop",
            desc: "description project",
            tag: "tag"
        },
    ]
  return (
    <section className={cls.projects}>
        <div className="container">
            <h3 className={cls.projects__title}>
                projects
            </h3>
            <div className={`${cls.projects__items} row`}>
                {
                    projects.length && projects.map((item:{id:string,urlImg:string,title:string,desc:string,tag:string}) => {
                        return (
                            <div key={item.id} className={`${cls.projects__item} col-4 col-md-6 col-sm-12`}>
                                <div className={cls.projects__item__content}>
                                    <div className={cls.projects__item__content__box}>
                                        <Image
                                            className={cls.projects__item__content__box_img}
                                            preview={false}
                                            src={item.urlImg}
                                            alt="image_"
                                            />
                                    </div>
                                    <div className={cls.projects__item__content__info}>
                                        <h3 className={cls.projects__item__content__info_title}>     {item.title}
                                        </h3>
                                        <p className={cls.projects__item__content__info__desc}>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
