import './datatable.scss'
import React, { useState } from 'react'

import { DataGrid } from '@mui/x-data-grid';
import { userCols, userRows } from '../../datatableSource';
import { Link } from 'react-router-dom';



const Datatable = () => {

  const [data, setData] = useState(userRows)

  const handleDelete = (id)=>{
    setData(data.filter(item => item.id !== id))
  }

    const actionColumn = [
        { field:"action", headerName: "Action", width:200, 
            renderCell:(params)=>{
                return(
                    <div className="cellAction">
                      <Link to='/users/test' style={{textDecoration:"none"}} >
                        <div className="viewButton">View</div>
                      </Link>
                        <div onClick={()=>handleDelete(params.row.id)} className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]

  return (
    <div className='datatable'>
      <div className="datatableTitle">
        add new user
        <Link to='/users/new' style={{textDecoration:"none"}} className='link' >
          + add new
        </Link>
      </div>
        <DataGrid
        className='datagrid'
        rows={data}
        columns={userCols.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable