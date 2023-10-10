import { memo } from 'react';
import cls from './projects.module.scss';

interface IProjectTag {
  name:string;
  onClick: (tag:string)=> void
  isSelected: boolean
}
const ProjectTag = ({name,onClick,isSelected}:IProjectTag) => {
  return (
    <button 
      className={`${cls.projects__btns_btn} ${isSelected && cls.projects__btns_btn_active} pointer`}
      onClick={()=>onClick(name)}
      >
      {name}
    </button>
  )
}

export default memo(ProjectTag);