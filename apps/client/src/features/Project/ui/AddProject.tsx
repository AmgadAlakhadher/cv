// import { useCallback, FormEvent } from 'react';
// import { useAppDispatch } from 'shared/lib/hooks/AppDispatch/AppDispatch';
// import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
// import Button from 'shared/ui/Button';
// import { Input } from 'shared/ui/Input';
// import { 
//   getProject,
//   ProjectActions,
//   addProjectReq,
//   getError,
//   getSuccess,
//   formAddProject,
// } from 'entities/Projects';

// import { IFormInputs, ShowPage } from 'shared/types/types';
// import { Form } from 'shared/ui/Form';

// interface AddProjectProps{
//     handlePages: (page: ShowPage) => void;
// }
// export const AddProject = ({handlePages}:AddProjectProps) => {
//     const dispatch = useAppDispatch();
//     const Project = useAppSelector(getProject);
//     const error = useAppSelector(getError);
//     const success = useAppSelector(getSuccess);
//     const formInputs:IFormInputs[] =  formAddProject(Project);

//     const onHandelChange = useCallback(
//       (value: string, param: string) => {
//         switch (param) {
//           case "name":
//             dispatch(ProjectActions.setName(value));
//             break;
//           case "description":
//             dispatch(ProjectActions.setDescription(value));
//             break;
//           case "barcode":
//             dispatch(ProjectActions.setBarcode(value));
//             break;
//           case "size":
//             dispatch(ProjectActions.setSize(value));
//             break;
//           case "color":
//             dispatch(ProjectActions.setColor(value));
//             break;
//           default:
//         }
//     },[dispatch]);

//     const resetError = useCallback(() =>{
//       dispatch(ProjectActions.resetError())
//     }, [dispatch]);

//       const onSubmit = useCallback((e: FormEvent)=>{
//         e.preventDefault();
//         dispatch(addProjectReq());
//         // dispatch(ProjectActions.setCleanProject());
//         if(!error) {
//           setTimeout(() => {
//             dispatch(ProjectActions.setSuccess());
//           }, 5000) 
//         }
//       },[dispatch, error]);

//   return (
//     <>
//       <Form 
//         onSubmit={onSubmit}
//         isShow={ true}
//         errorMessage={error}  
//         handleError={resetError}
//         onToggleForm={function (e: FormEvent<Element>): void {
//           throw new Error('Function not implemented.');
//         } } 
//         childern={
//           <>
//             {
//               formInputs.map((input:IFormInputs,index) => {
//                 return (
//                   <Input 
//                     key={index}
//                     aria-label={`-${input.name}`} 
//                     autoComplete={input.autoComplete? "off": "on"} 
//                     type={input.type? input.type : "text"} 
//                     params={input.params? input.params: ""}
//                     name={input.name} 
//                     onChange={onHandelChange} 
//                     placeholder={input.placeholder} 
//                     value={input.value || ""}
//                     label={input.label}
//                     required={input.required? true : false}
//                     />
//                     )
//                   })
//                 }
//             <Button type="submit" theme='primary' fullWidth={true} className='btn' content='добавить товар' />
//             <Button theme='secondary' className='btn' fullWidth={true} content='назад' onClick={()=>handlePages(ShowPage.ALL)} />
//           </>
//         }
//       />
//     </>
//     )
// }


export { }
