import { Box } from '@mui/material'
import { Skills } from '../../../utils/Skills/constants'
import { SectionHeader } from '../../shared/SectionHeader'
import { SpecialSkillCard } from '../SpecialSkillCard'

import styles from './styles.module.scss'

export const SpecialSkills = () => {
  return (
    <Box className={styles.SpecialSkills}>
      <Box>
        <SectionHeader title={'My Special Skills'} label={'Special Skills'} />
      </Box>
      <Box className={styles.skills}>
        {Skills.map((specialSkill) => (
          <SpecialSkillCard key={specialSkill.title} {...specialSkill} />
        ))}
      </Box>
    </Box>
  )
}
