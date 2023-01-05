import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import React from 'react'

const Featured = () => {
  return (
    <div className='featured' >
        <div className="top">
            <h1 className="title">total revenue</h1>
            <MoreVertIcon fontSize='small' />
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
            </div>
            <p className="title">total sales made today</p>
            <p className="amount">2340</p>
            <p className="desc">Previous transactions processing. Last payments may not be included.</p>
            <div className="summary">
              <div className="item">
                <div className="itemTitle">target</div>
                <div className="itemResult negative">
                  <KeyboardArrowDownIcon fontSize='small' />
                  <div className="resultAmount">900</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTitle">last week</div>
                <div className="itemResult positive">
                  <KeyboardArrowUpIcon fontSize='small' />
                  <div className="resultAmount">1400</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTitle">last month</div>
                <div className="itemResult negative ">
                  <KeyboardArrowDownIcon fontSize='small' />
                  <div className="resultAmount">1345</div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Featured