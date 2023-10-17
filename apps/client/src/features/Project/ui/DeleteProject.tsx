// import { useCallback } from 'react';
// import Button from 'shared/ui/Button'
// import { deleteProductReq } from 'entites/Product';
// import { useAppDispatch } from 'shared/lib/hooks/AppDispatch/AppDispatch';
// import cls from './product.module.scss'
// import { ShowPage } from 'shared/types/types';

// interface AddProductProps{
//   handlePages: (page: ShowPage) => void;
// }
// export const DeleteProduct = ({handlePages}:AddProductProps) => {
//   const dispatch = useAppDispatch();

//   const onDetected = useCallback(async ()=>{
//     await dispatch(deleteProductReq());
//     handlePages(ShowPage.ALL);
//   },[dispatch]);
  
//   return (
//     <>
//       <div className={cls.formProduct}>
//         <p className='capitalize'>are you sure,do you want to delete this product?</p>
//         <Button id="okBtn" theme='dangers' onClick={onDetected} content='yes' />
//         <Button id="cancelBtn" theme='green' content='cansel' onClick={()=>handlePages(ShowPage.ALL)}/>
//       </div>
//       <div className='overlay' onClick={()=>handlePages(ShowPage.ALL)}></div>
//     </>
//   )
  
// }

export { }