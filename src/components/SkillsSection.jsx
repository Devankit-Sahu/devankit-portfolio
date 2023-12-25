import React from 'react'
import CircularProgress from "@mui/material/CircularProgress";

const SkillsSection = () => {
  return (
    <div className='h-screen py-[1rem]' id='skills'>
        <h2>Skills I have</h2>
        <div className="grid grid-cols-2 gap-x-10">
          <div></div>
          <div>
            {/* <CircularProgress /> */}
          </div>
        </div>
    </div>
  )
}

export default SkillsSection