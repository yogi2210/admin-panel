import './datatable.scss'
import React from 'react'

import { DataGrid } from '@mui/x-data-grid';
import { userCols, userRows } from '../../datatableSource';



const Datatable = () => {

    const actionColumn = [
        { field:"action", headerName: "Action", width:200, 
            renderCell:()=>{
                return(
                    <div className="cellAction">
                        <div className="viewButton">View</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]

  return (
    <div className='datatable'>
        <DataGrid
        rows={userRows}
        columns={userCols.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable