import cls from './projects.module.scss';
import {MdPreview} from 'react-icons/md';
import {BsCodeSlash} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ProjectTag from './ProjectTag';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch/AppDispatch';
import { IProject, getProjects, getProjectsReq } from '../../../entities/Projects';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { motion, useInView } from 'framer-motion';
export const Projects = () => {
    const dispatch = useAppDispatch();
    const [tag,setTag] = useState<string>("all");
    const [t] = useTranslation(); 
    const projects:IProject[] = useAppSelector(getProjects);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});
    const handleTag = (newTag:string) => setTag(newTag);
    const projectVariants = {
        initial: {
            y: 50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
        },
    }
    const filteredProjects = projects.filter((project:IProject) => {
        if(project.tags && project.tags.includes(tag)) return project;
    });

    useEffect(()=> {
        dispatch(getProjectsReq());
    },[])
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
            </div>
            <div className={`${cls.projects__items} row`} ref={ref}>
                {
                    filteredProjects.length ? filteredProjects.map((item:IProject, index) => {
                        return (
                            <motion.div 
                                key={item.id} className={`${cls.projects__item} col-lg-4 col-md-6 col-sm-12`}
                                variants={projectVariants}
                                initial="initial"
                                animate={isInView ? "animate" : "initial"}
                                transition={{ duration: .3, delay: index * .4}}
                                >
                                <div className={cls.projects__item__content}>
                                    <div className={cls.projects__item__content__box}>
                                        <div className={cls.projects__item__content__box_img} style={{backgroundImage: `url(${item.urlImg})`}}></div>
                                        <div className={cls.projects__item__content__box_overlay}>
                                            <div className={cls.projects__item__content__box_overlay_icons}>
                                                <Link to={item.gitUrl} target='_blank'><BsCodeSlash className={cls.icon} /></Link>
                                                <Link to={item.previewUrl} target='_blank'><MdPreview  className={cls.icon} /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cls.projects__item__content__info}>
                                        <h2 className={cls.projects__item__content__info_title}>     {item.title}
                                        </h2>
                                        <p className={cls.projects__item__content__info__desc}>{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    }) : <p>no projects</p>
                }
            </div>
        </div>
    </section>
  )
}
