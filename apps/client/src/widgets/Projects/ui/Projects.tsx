import cls from './projects.module.scss';
import {MdPreview} from 'react-icons/md';
import {BsCodeSlash} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ProjectTag from './ProjectTag';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface IProject {
    id:string;
    urlImg:string;
    title:string;
    desc:string;
    tag:string[];
    perviewUrl:string;
    gitUrl:string;
}

export const Projects = () => {
    const [tag,setTag] = useState<string>("all");
    const [t] = useTranslation(); 
    const projects:IProject[] = [
        {
            id: "4",
            urlImg: "https://i.postimg.cc/wTJ63zfv/images.png",
            title: "laptop",
            desc: "description project",
            tag: ["all","front"],
            gitUrl: '/',
            perviewUrl: '/'
        },
        {
            id: "6",
            urlImg: "https://i.postimg.cc/13zhZZq4/structure.png",
            title: "laptop",
            desc: "description project",
            tag: ["all","front"],
            gitUrl: '/',
            perviewUrl: '/'
        },
        {
            id: "5",
            urlImg: "https://i.postimg.cc/Y26Khvtb/html-tagst.jpg",
            title: "laptop",
            desc: "description project",
            tag: ["all","front"],
            gitUrl: '/',
            perviewUrl: '/'
        },
        {
            id: "1",
            urlImg: "https://i.postimg.cc/HLHWRdKh/home-bg.jpg",
            title: "laptop",
            desc: "description project",
            tag: ["all","front-end"],
            gitUrl: '/',
            perviewUrl: '/'
        },
        {
            id: "2",
            urlImg: "https://i.postimg.cc/KjCSZn5J/portfolio-img6.jpg",
            title: "laptop",
            desc: "description project",
            tag: ["all","front"],
            gitUrl: '/',
            perviewUrl: '/'
        },
        {
            id: "3",
            urlImg: "https://i.postimg.cc/cCZwDpW7/portfolio-img1.jpg",
            title: "laptop",
            desc: "description project",
            tag: ["all","front"],
            gitUrl: '/',
            perviewUrl: '/'
        },
    ];
    const handleTag = (newTag:string) => setTag(newTag);
    const filteredProjects = projects.filter((project:IProject) => {
        if(project.tag.includes(tag)) return project;
    });
  return (
    <section className={cls.projects} id='projects'>
        <div className="myContainer">
            <h3 className={cls.projects__title}>
                {t('menu_projects')}
            </h3>
            <div className={cls.projects__btns}>
                <ProjectTag 
                    onClick={handleTag}
                    name='all'
                    isSelected={tag === "all"}
                />
                <ProjectTag 
                    onClick={handleTag}
                    name='front-end'
                    isSelected={tag === "front-end"}
                />
                <ProjectTag 
                    onClick={handleTag}
                    name='full-stack'
                    isSelected={tag === "full-stack"}
                />
                {/* <button className={`${cls.projects__btns_btn} active pointer`}>all</button>
                <button className={`${cls.projects__btns_btn} pointer`}>front-end</button>
                <button className={`${cls.projects__btns_btn} pointer`}>full-stack</button> */}
            </div>
            <div className={`${cls.projects__items} row`}>
                {
                    filteredProjects.length ? filteredProjects.map((item:IProject) => {
                        return (
                            <div key={item.id} className={`${cls.projects__item} col-lg-4 col-md-6 col-sm-12`}>
                                <div className={cls.projects__item__content}>
                                    <div className={cls.projects__item__content__box}>
                                        <div className={cls.projects__item__content__box_img} style={{backgroundImage: `url(${item.urlImg})`}}></div>
                                        <div className={cls.projects__item__content__box_overlay}>
                                            <div className={cls.projects__item__content__box_overlay_icons}>
                                                <Link to={item.gitUrl}><BsCodeSlash className={cls.icon} /></Link>
                                                <Link to={item.perviewUrl}><MdPreview  className={cls.icon} /></Link>
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
