import React from 'react'
import { imageURL } from '../../constants/data'
import { Grid, styled } from '@mui/material'


const Component = styled(Grid)`
    margin-top:10px;
    cursor:pointer;
`

const MidSelection = () => {
    return (
        <Component lg={12} sm={12} md={12} xs={12} container>
            {
                imageURL.map(image => {
                    return (
                        <Grid lg={4} sm={12} md={4} xs={12}>
                        <img src={image} alt="banner" style={{width:"100%"}} /> {/*You can return no. of components.*/}
                        </Grid>
                    )
                })
            }
        </Component>
    )
}

export default MidSelection
