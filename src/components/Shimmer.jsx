import { Box, Skeleton } from '@mui/material'
import React from 'react'
import { Card } from 'semantic-ui-react'

const Shimmer = () => {
    return (
        <div className='flex flex-wrap gap-5 justify-center items-center max-w-[1000px] h-max'>

            {
                Array.from(new Array(9)).map((key, index) => {
                    return <Card>
                        <Skeleton variant="rounded" width={300} height={170} />
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton width="60%" />
                            <Skeleton width="50%" />
                            <Skeleton width="90%" />
                            <Skeleton width="85%" />

                        </Box></Card>
                })
            }

        </div>
    )
}

export default Shimmer