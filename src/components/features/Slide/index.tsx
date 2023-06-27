import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import SvgIcon from '@mui/material/SvgIcon'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

import styles from './styles.module.scss'

interface IProps {
  icon: typeof SvgIcon
  title: string
  services: string[]
}

const Slide: FC<IProps> = (props) => {
  return (
    <Box className={styles.slider}>
      <props.icon sx={{ color: 'white', width: 40, height: 40 }} />
      <Typography className={styles.title}>{props.title}</Typography>
      <Box className={styles.services}>
        {props.services.map((service) => (
          <Typography className={styles.service}>
            <KeyboardDoubleArrowRightIcon
              sx={{ width: 15, height: 15, marginRight: 1 }}
            />
            {service}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

export default Slide
