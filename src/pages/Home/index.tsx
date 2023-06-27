import { Box, Typography } from '@mui/material'
import CVButton from '../../components/features/CvButton'
import Statistics from '../../components/features/Statistics'
import ServicePackets from '../../components/features/ServicePackets'
import { SpecialSkills } from '../../components/features/SpecialSkills'

import styles from './styles.module.scss'

export const Home = () => {
  return (
    <Box className={styles.home}>
      <Box className={styles.intro}>
        <Typography className={styles.fullName}>Narek Hovhannisyan</Typography>
        <Typography className={styles.position}>Software Engineer</Typography>
        <CVButton />
      </Box>
      <ServicePackets />
      <SpecialSkills />
      <Statistics />
    </Box>
  )
}
