import { FC } from 'react'
import styled from 'styled-components'
import LazyLoadImage from 'src/components/LazyLoadImage/LazyLoadImage'
import dot from 'src/static/images/dot.png'

import { ICover } from '../types'

const Covers = styled.figure`
  position: relative;
  margin-bottom: 3.2rem;
  width: 100vw;
  height: 100vh;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(${dot});
    background-repeat: repeat;
    background-attachment: scroll;
    opacity: 0.5;
  }
`

interface Props {
  isSupportWebp: boolean
  covers: ICover[]
}

const Cover: FC<Props> = ({ isSupportWebp, covers }) => {
  return (
    <Covers>
      <LazyLoadImage
        isSupportWebp={isSupportWebp}
        imageUrl={covers[0]?.coverUrl}
        alt=""
      />
    </Covers>
  )
}

export default Cover
