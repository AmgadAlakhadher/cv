import cls from './projects.module.scss';
import {GrView} from 'react-icons/gr';
import {BsCodeSlash} from 'react-icons/bs';

export const Projects = () => {
    const projects = [
        {
            id: "4",
            urlImg: "https://i.postimg.cc/wTJ63zfv/images.png",
            title: "laptop",
            desc: "description project",
            tag: "tag"
        },
        {
            id: "6",
            urlImg: "https://i.postimg.cc/13zhZZq4/structure.png",
            title: "laptop",
            desc: "description project",
            tag: "tag"
        },
        {
            id: "5",
            urlImg: "https://i.postimg.cc/Y26Khvtb/html-tagst.jpg",
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
        <div className="myContainer">
            <h3 className={cls.projects__title}>
                projects
            </h3>
            <div className={`${cls.projects__items} row`}>
                {
                    projects.length ? projects.map((item:{id:string,urlImg:string,title:string,desc:string,tag:string}) => {
                        return (
                            <div key={item.id} className={`${cls.projects__item} col-lg-4 col-md-6 col-sm-12`}>
                                <div className={cls.projects__item__content}>
                                    <div className={cls.projects__item__content__box}>
                                        <div className={cls.projects__item__content__box_img} style={{backgroundImage: `url(${item.urlImg})`}}></div>
                                        <div className={cls.projects__item__content__box_overlay}>
                                            <div className={cls.projects__item__content__box_overlay_icons}>
                                                <BsCodeSlash className={cls.icon} />
                                                <GrView  className={cls.icon} style={{color: "#fff"}}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cls.projects__item__content__info}>
                                        <h2 className={cls.projects__item__content__info_title}>     {item.title}
                                        </h2>
                                        <p className={cls.projects__item__content__info__desc}>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <p>no projects</p>
                }
            </div>
        </div>
    </section>
  )
}
