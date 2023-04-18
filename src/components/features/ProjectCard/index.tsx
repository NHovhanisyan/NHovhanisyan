import React from 'react'
import { Box, Link, Typography } from '@mui/material'

import styles from './styles.module.scss'
import { SectionHeader } from '../../shared/SectionHeader'

type ProjectCardProps = {
  title: string
  date: string
  image_href: string
  project_url: string
  description: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  date,
  image_href,
  project_url,
  description,
}) => {
  return (
    <Link className={styles.projectLink} href={project_url} target="blank">
      <Box className={styles.projectCard}>
        <img className={styles.projectImg} src={image_href} alt="Project" />
        <Box className={styles.projectInfo}>
          <Box className={styles.header}>
            <Typography className={styles.title}>
              {title} &nbsp; - &nbsp;
            </Typography>
            <Typography className={styles.date}>{date}</Typography>
          </Box>
          <Typography className={styles.description}>{description}</Typography>
        </Box>
      </Box>
    </Link>
  )
}
