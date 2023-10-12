import React from 'react'

export default function content(props) {
  return (
    <>
    <div className='col-md-9 content'>
    <h1>{props.data}</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/L589hdRyxzc?si=aUJHlh92AaBfVgZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   
    
        </div>
    </>
  )
}