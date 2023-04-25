import { Box, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import { Button } from '../../shared/Button'
import { SocialLink } from '../../shared/SocialLink'

import styles from './styles.module.scss'

const FastContacts = () => {
  return (
    <Box className={styles.fastContacts}>
      <Box className={styles.contactContainer}>
        <Button className="fastContactBtn">
          <CallOutlinedIcon sx={{ color: 'white' }} />
        </Button>
        <Typography className={styles.contact}>+37477810019</Typography>
      </Box>
      <Box className={styles.contactContainer}>
        <Button className="fastContactBtn">
          <EmailOutlinedIcon sx={{ color: 'white' }} />
        </Button>
        <Typography className={styles.contact}>n.hovo2002@gmail.com</Typography>
      </Box>
      <Box className={styles.contactContainer}>
        <SocialLink
          Icon={
            <Button className="fastContactBtn">
              <FacebookOutlinedIcon sx={{ color: 'white' }} />
            </Button>
          }
          linkHref="https://www.facebook.com/narek.hovhannisyan.5245961/"
        />
        <SocialLink
          Icon={
            <Button className="fastContactBtn">
              <InstagramIcon sx={{ color: 'white' }} />
            </Button>
          }
          linkHref="https://www.instagram.com/narek55_//"
        />
        <SocialLink
          Icon={
            <Button className="fastContactBtn">
              <LinkedInIcon sx={{ color: 'white' }} />
            </Button>
          }
          linkHref="https://www.linkedin.com/in/narek-hovhannisyann/"
        />
      </Box>
    </Box>
  )
}

export default FastContacts
