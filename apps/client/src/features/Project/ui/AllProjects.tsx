// import { useCallback, useEffect, useState } from "react";
// import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
// import { useAppDispatch } from "shared/lib/hooks/AppDispatch/AppDispatch";
// import { ProjectType, getProjects, getProjectsReq } from "entites/Project";
// import Button from "shared/ui/Button"
// // import { Table } from "shared/ui/Table"
// import { ShowPage } from "shared/types/types";

// interface AllProjectsProps{
//   handlePages: (page: ShowPage) => void;
//   handleDeleteProjectForm: (id:string)=>void;
// }

// export const AllProjects = (props:AllProjectsProps) => {

//   const dispatch = useAppDispatch();
//   const {
//     handleDeleteProjectForm,
//     handlePages
//   } = props;

//   const projects:ProjectType[] = useAppSelector(getProjects);
  
//   // const handleRefresh = useCallback(()=>{
//   //   dispatch(getProjectsReq()); 
//   // },[dispatch]);

//   useEffect(()=>{
//     const interval = setInterval(() => {
//       dispatch(getProjectsReq()); 
//     },5000)
//     dispatch(getProjectsReq());
//     return () => clearInterval(interval);
//   },[])

//   return (
//     <>
//         {/* <Button content='обновить' theme='secondary' onClick={()=>handleRefresh()}/> */}
//         <Button theme='secondary' onClick={()=>handlePages(ShowPage.ADD)} content='добавить товар' />
//         {/* {<Table 
//             usedFor='projects' 
//             header={
//               <>
//                 <th>баркод</th>
//                 <th>товар</th>
//                 <th>заявлено</th>
//                 <th>размер</th>
//                 <th>цвет</th>
//                 <th>описание</th>
//                 <th>actions</th>
//               </>
//             } 
//             projects={projects} 
//             deleteFun={handleDeleteProjectForm}
//         />} */}
//     </>
//   )
// }


export {}