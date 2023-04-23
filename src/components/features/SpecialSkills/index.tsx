import React from 'react'
import { Box } from '@mui/material'
import { ServiceCard } from '../Service_Card/index'
import { Services } from '../../../utils/My_Services/constants'

import styles from './styles.module.scss'
import { SectionHeader } from '../../shared/SectionHeader'
import { SpecialSkillCard } from '../SpecialSkillCard'
import { Skills } from '../../../utils/Skills/constants'
import CVButton from '../CvButton'

export const SpecialSkills = () => {
  return (
    <Box className={styles.SpecialSkills}>
      <Box>
        <SectionHeader
          title={'My Special Skill Field Here'}
          label={'Special Skills'}
        />
      </Box>
      <Box className={styles.skills}>
        {Skills.map((specialSkill) => (
          <SpecialSkillCard key={specialSkill.title} {...specialSkill} />
        ))}
      </Box>
    </Box>
  )
}
