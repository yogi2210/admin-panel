import './new.scss'
import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({inputs, title}) => {


  const [file, setFile] = useState('')
  console.log(file)
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title} </h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDeQ0UC4TH-VQn1gDp7HjwAPQvHiQvYHezg&usqp=CAU"} alt="" />
          </div>
          <div className="right">
            <form >
            <div className="formInput">
               <label htmlFor="file" >image: <DriveFolderUploadIcon className='icon' /></label>
                <input onChange={e=>setFile(e.target.files[0])} type="file" id='file' style={{display:"none"}} />
              </div>
              {inputs.map((input)=>(

                <div className="formInput" key={input.id} >
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
               
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New