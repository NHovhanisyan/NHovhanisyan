import React from 'react'
import { Box } from '@mui/material'
import { ServiceCard } from '../../components/features/Service_Card/index'
import { Services } from '../../utils/My_Services/constants'

import styles from './styles.module.scss'
import { SectionHeader } from '../../components/shared/SectionHeader'
import { SpecialSkillCard } from '../../components/features/SpecialSkillCard'
import { Skills } from '../../utils/Skills/constants'
import CVButton from '../../components/features/CvButton'

export const SpecialSkills = () => {
  return (
    <Box className={styles.SpecialSkills}>
      <Box>
        <SectionHeader
          title={'My Special Skill Field Here'}
          label={'Special Skills'}
        />
        <CVButton />
      </Box>
      <Box className={styles.skills}>
        {Skills.map((specialSkill) => (
          <SpecialSkillCard key={specialSkill.title} {...specialSkill} />
        ))}
      </Box>
    </Box>
  )
}
