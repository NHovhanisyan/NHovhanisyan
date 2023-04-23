import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'

import styles from './styles.module.scss'

type LinearProgressWithLabelProps = { value: number }

export const LinearProgressWithLabel: React.FC<
  LinearProgressWithLabelProps
> = ({ value }) => {
  const [progress, setProgress] = useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= value ? prevProgress : prevProgress + 1
      )
    }, 10)

    return () => {
      clearInterval(timer)
    }
  }, [])
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          className={styles.indicator}
          value={progress}
        />
      </Box>
      <Box>
        <Typography
          sx={{ minWidth: 35, color: 'white' }}
          variant="body2"
          color="text.secondary"
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  )
}
