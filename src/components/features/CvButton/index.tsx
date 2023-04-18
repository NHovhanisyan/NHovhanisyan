import { Link } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import CV from '../../../assets/PDF/cv.pdf'
import { Button } from '../../shared/Button'

import styles from './styles.module.scss'

const CVButton = () => {
  return (
    <Link className={styles.resume} href={CV} download>
      <Button>
        Get Resume
        <DownloadIcon
          color="action"
          sx={{ color: 'white', marginLeft: '10px' }}
        />
      </Button>
    </Link>
  )
}

export default CVButton
