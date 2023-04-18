import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import CVPdf from '../../assets/PDF/cv.pdf'

import styles from './styles.module.scss'
import { Button } from '../../components/shared/Button';

export const Home = () => {
  return (
    <Box className={styles.home}>
      <Box className={styles.intro}>
        <Typography className={styles.fullName}>Narek Hovhannisyan</Typography>
        <Typography className={styles.position}>Software Engineer</Typography>
        <Button>
          <Link className={styles.resume} href={CVPdf} download>
            Get Resume
          </Link>
          <DownloadIcon color='action'/>
        </Button>
      </Box>
    </Box>
  )
}
