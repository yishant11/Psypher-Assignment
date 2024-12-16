import React from 'react'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { Typography, styled } from '@mui/material';

const ErrorHandle = styled(Typography)`
    color:red;
    font-size:13px;
`

const Error = () => {
  return (
    <div style={{display:"flex",alignItems:"center",gap:6}}>
      <ReportProblemIcon style={{height:20}}/>
      <ErrorHandle>Please Enter Correct Details</ErrorHandle>
    </div>
  )
}

export default Error;
