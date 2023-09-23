import React from 'react'
import './style.scss'

const ErrorPage:React.FC = () => {
  return (
    <div className="errorPage">
        <h1 className="errorPage--code">404</h1>
        <p className="errorPage--desc capitalize">произошла непредвиденная ошибка</p>
    </div> 
  )
}

export {ErrorPage}
