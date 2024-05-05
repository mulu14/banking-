import React from 'react'

// interface HeaderBoxProps{
//     type: string; 
//     title: string; 
//     subtext: string; 
//     user: string
// }

const HeaderBox = ({type, title, subtext, user}: PageHeaderProps) => {
  return (
    <div className="header-box">
      <h1 className='header-box-title'>
        {title}
       {type === 'Greeting' && (<span className="text-bankGradient"> &nbsp; {user}</span>)}
      </h1>
      <p className='header-box-subtext'>{subtext}</p>
    </div>
  )
}

export default HeaderBox