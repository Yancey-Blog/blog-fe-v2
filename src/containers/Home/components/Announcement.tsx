import React, { FC } from 'react'
import styled from 'styled-components'
import { SVG_SPRITE } from 'src/shared/constants'
import { flexMixin } from 'src/styled/mixins'
import { IAnnouncement } from '../types'
import svgIcons from '../../../../static/svg-sprite.svg'

interface Props {
  announcements: IAnnouncement[]
}

const AnnouncementWrapper = styled.section`
  ${flexMixin('flex-start')}
  padding: 1.8rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text.secondary};
  background: ${({ theme }) => theme.background.secondary};
  border: 1px dashed;
  border-color: ${({ theme }) => theme.border};
  border-radius: 0.8rem;
`

const SVG = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 1rem;
`

const Announcement: FC<Props> = ({ announcements }) => {
  return (
    <AnnouncementWrapper>
      <SVG>
        <use xlinkHref={`${svgIcons}${SVG_SPRITE.megaphone}`} />
      </SVG>
      {announcements[0]?.content}
    </AnnouncementWrapper>
  )
}

export default Announcement