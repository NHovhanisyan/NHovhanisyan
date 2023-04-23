import { Box } from '@mui/material'

import styles from './styles.module.scss'
import { StatisticsInfo } from '../../../utils/Statistics/constants'
import StatisticsCard from '../StatisticsCard'

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
