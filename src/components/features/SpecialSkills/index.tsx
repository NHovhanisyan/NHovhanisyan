import React from 'react'
import { Box } from '@mui/material'
import CVButton from '../CvButton'
import { Skills } from '../../../utils/Skills/constants'
import { Services } from '../../../utils/My_Services/constants'
import { ServiceCard } from '../Service_Card/index'
import { SectionHeader } from '../../shared/SectionHeader'
import { SpecialSkillCard } from '../SpecialSkillCard'

import styles from './styles.module.scss'

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
