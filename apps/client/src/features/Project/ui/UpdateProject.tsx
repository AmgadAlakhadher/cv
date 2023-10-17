// import { Input } from 'shared/ui/Input'
// import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
// import { 
//   formAddProduct,
//   getError,
//   getProductReq,
//   getSuccess,
//   updateProductReq,
// } from 'entites/Product';
// import { FormEvent, useCallback, useEffect } from 'react';
// import Button from 'shared/ui/Button';
// import { useAppDispatch } from 'shared/lib/hooks/AppDispatch/AppDispatch';
// import cls from './product.module.scss'
// import { getProduct, productActions } from 'entites/Product';
// import { Form } from 'shared/ui/Form';
// import { IFormInputs } from 'shared/types/types';
// import { useNavigate } from 'react-router';


// export const UpdateProduct = ({id}:{id:string}) => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const product = useAppSelector(getProduct);
//   const error = useAppSelector(getError);
//   const success = useAppSelector(getSuccess);
//   const formInputs:IFormInputs[] =  formAddProduct(product);
  
//   const onHandelChange = useCallback(
//     (value: string, param: string) => {
//       switch (param) {
//         case "name":
//           dispatch(productActions.setName(value));
//           break;
//         case "description":
//           dispatch(productActions.setDescription(value));
//           break;
//         case "barcode":
//           dispatch(productActions.setBarcode(value));
//           break;
//         case "size":
//           dispatch(productActions.setSize(value));
//           break;
//         case "color":
//           dispatch(productActions.setColor(value));
//           break;
//         default:
//       }
//   },[dispatch]);

//   const resetError = useCallback(() =>{
//     dispatch(productActions.resetError())
//   }, [dispatch]);

//   const onSubmit = useCallback(async (e:FormEvent) => {
//     e.preventDefault();
//     await dispatch(updateProductReq(id))
//     navigate(-1)
//   }, [dispatch, id]);

//   useEffect(()=>{
//     dispatch(getProductReq(id))
//   },[dispatch])
//   return (
//       <>
//         <Form 
//           onSubmit={onSubmit}
//           isShow={ true}
//           errorMessage={error}  
//           handleError={resetError}
//           onToggleForm={function (e: FormEvent<Element>): void {
//             throw new Error('Function not implemented.');
//           } } 
//           childern={
//             <>
//               {
//                 formInputs.map((input:IFormInputs,index) => {
//                   return (
//                     <Input 
//                       key={index}
//                       aria-label={`-${input.name}`} 
//                       autoComplete={input.autoComplete? "off": "on"} 
//                       type={input.type? input.type : "text"} 
//                       params={input.params? input.params: ""}
//                       name={input.name} 
//                       onChange={onHandelChange} 
//                       placeholder={input.placeholder} 
//                       value={input.value || ""}
//                       label={input.label}
//                       required={input.required? true : false}
//                       />
//                       )
//                     })
//                   }
//               <Button type="submit" theme='primary' fullWidth={true} className='btn' content='добавить товар' />
//               <Button theme='secondary' className='btn' fullWidth={true} content='назад' onClick={()=>navigate(-1)} />
//             </>
//           }
//         />
//       </>
//   )
// }


export { }