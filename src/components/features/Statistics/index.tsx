import { Box } from '@mui/material'
import StatisticsCard from '../StatisticsCard'
import { StatisticsInfo } from '../../../utils/Statistics/constants'


import styles from './styles.module.scss'

const Statistics = () => {
  return (
    <Box className={styles.statistics}>
      {StatisticsInfo.map((statistics) => (
        <StatisticsCard
          key={statistics.title}
          {...statistics}
          icon={<statistics.icon sx={{color: 'white'}}/>}
        />
      ))}
    </Box>
  )
}

export default Statistics
