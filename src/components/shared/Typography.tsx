import { Link } from 'gatsby'
import s from 'styled-components'

import { DP_RED } from '../../styles/colors'

const HEEBO_REGULAR : string = `
  font-family: 'Heebo', sans-serif;
  font-weight: 400;
`

const HEEBO_BOLD : string = `
  font-family: 'Heebo', sans-serif;
  font-weight: 700;
`

const HEEBO_EXTRABOLD : string = `
  font-family: 'Heebo', sans-serif;
  font-weight: 800;
`

const PT_SERIF_REGULAR : string = `font-family: 'PT Serif', serif;`

export const SectionHeader = s.h3`
  color: #aa1e22;
  font-size: 30px;
  line-height: 1.0;
  margin: 0.5em 0;
  ${HEEBO_EXTRABOLD}
`

export const StyledLink = s(Link)`
  color: #000000 !important;
  text-decoration: none !important;
`

export const StyledAnchorTag = s.a`
  color: #000000 !important;
  text-decoration: none !important;
`

interface IHeadlineTextProps {
  fontSize?: string
}

export const HeadlineText = s.div<IHeadlineTextProps>`
  font-size: ${({ fontSize = '100%' }) => fontSize};
  margin-top: 1rem;
  ${HEEBO_BOLD}
`

export const AbstractText = s.p`
  margin-top: 1rem;
  font-size: 80%;
  ${PT_SERIF_REGULAR}
`

export const AbstractText_HEEBO = s.p`
  margin-top: 1rem;
  font-size: 90%;
  ${HEEBO_REGULAR}
` 

export const ArticleHeader = s.h1`
  font-family: neuzeit-grotesk, sans-serif;
  font-size: 36px;
  font-weight: 700;
`

export const CaptionText = s.p`
  font-size: 15px;
  font-style: italic;
  color: #555;
  line-height: 1.5;
`

export const ArticleContent = s.p`
  ${PT_SERIF_REGULAR}
  font-size: 18px;
  line-height: 175%;

  a {
    color: ${DP_RED} !important;
    text-decoration: none !important;
  }

  img {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`