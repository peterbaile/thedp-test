import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import s from 'styled-components'

import {
  AboutLinks,
  NewsLinks,
  SportsLinks,
  OpinionLinks,
  StreetLinks,
  UnderTheButtonLinks
} from '../utils/constants'
import { StyledLink, StyledAnchorTag } from '../components/shared'
import { ILink  } from '../utils/types'

const Wrapper = s.div`
  padding: 0 10em;
  font-size: 80%;
  margin-top: 4em;
  margin-bottom: 2em;
`

const LogoWrapper = s.div`
  width: 120px;
  margin: auto;
  padding: 20px 0;
`

const SNOImg = s.img`
  display: inline;
  width: 100px;
  margin: 0 5px;
`

interface IFooterLinkProps {
  idx: number,
  slug: string,
  section: string
}

const FooterLink: React.FC<IFooterLinkProps> = ({ slug, section, idx }) => {
  if (idx === 0) {
    if (slug.includes('https')) {
      return (
        <p><strong><StyledAnchorTag key={slug} href={slug}>{section}</StyledAnchorTag></strong></p>
      )
    }
    return (
      <p><strong><StyledLink key={slug} to={slug}>{section}</StyledLink></strong></p>
    )
  }
  if (slug.includes('https')) {
    return (
      <p><StyledAnchorTag key={slug} href={slug}>{section}</StyledAnchorTag></p>
    )
  }
  return (
    <p><StyledLink key={slug} to={slug}>{section}</StyledLink></p>
  )
}

interface IFooterLinksProps {
  linksArray: ILink[]
}

const FooterLinks: React.FC<IFooterLinksProps> = ({ linksArray }) => (
  <Col>
    {linksArray.map(({ slug, section }, idx) => <FooterLink key={slug} slug={slug} section={section} idx={idx} />)}
  </Col>
)

const Footer = (): React.ReactElement => (
  <Wrapper>
    <LogoWrapper>
      <Image fluid src="https://d1q35ni5859stt.cloudfront.net/df6846ed8e0d185eefc430ebf9a8941a/dist/img/logo.svg" />
    </LogoWrapper>
    <Row>
        <FooterLinks linksArray={AboutLinks}/>
        <FooterLinks linksArray={NewsLinks}/>
        <FooterLinks linksArray={SportsLinks}/>
        <FooterLinks linksArray={OpinionLinks}/>
        <FooterLinks linksArray={StreetLinks}/>
        <FooterLinks linksArray={UnderTheButtonLinks}/>
    </Row>
    <p style={{ textAlign: 'center', marginTop: '2em' }}> Copyright &copy; 2020 The Daily Pennsylvanian, Inc. All Rights Reserved.</p>
    <p style={{ textAlign: 'center' }}> Powered by <SNOImg src="https://d1q35ni5859stt.cloudfront.net/df6846ed8e0d185eefc430ebf9a8941a/dist/img/SNWorks.svg" /> Solutions by The State News. </p>
  </Wrapper>
)

export default Footer
