import React from 'react'
import { Box, Typography } from '@mui/material'

import styles from './styles.module.scss'
import { Title } from '../../components/shared/Title'
import { ProjectsInfo } from '../../utils/Projects/constants'
import { ProjectCard } from '../../components/features/ProjectCard'

export const Projects = () => {
  return (
    <Box className={styles.projectsPage}>
      <Title title="Projects" />
      <Box className={styles.projects}>
        {ProjectsInfo.map((project) => (
          <ProjectCard key={project.description} {...project} />
        ))}
      </Box>
    </Box>
  )
}
