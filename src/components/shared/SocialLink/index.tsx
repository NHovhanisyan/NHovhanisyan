import React, { ReactNode } from 'react'
import { Link } from '@mui/material'

import styles from './styles.module.scss'

type SocialLinkProps = {
  Icon: ReactNode
  linkHref: string
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  Icon,
  linkHref,
}) => {
  return (
    <Link className={styles.link} href={linkHref} target='blank'>
      {Icon}
    </Link>
  )
}
