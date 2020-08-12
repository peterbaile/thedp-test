import React from 'react'
import s from 'styled-components'
import { Button, Nav, Row, Navbar, Image } from 'react-bootstrap'

import {
  WHITE,
  LIGHT_GRAY,
  GRAY,
  DP_RED,
  DP_DARK_RED
} from '../styles/colors'
import {
  FBIcon,
  TwitterIcon,
  InstagramIcon,
  SearchIcon,
  StyledLink,
} from './shared'
import { NavBarLinks } from '../utils/constants'
import SEO from './seo'

const TopRow = s.div`
  text-align: center;
  padding: 20px 0 10px;
  background: ${WHITE};
  justify-content: center;
`

const HeaderLogoText = s.p`
  width: 700px;
  align-items: center;
  margin: auto;
  font-family: "Heebo", sans-serif;
  font-weight: 400;
  height: 20px;
  margin-top: -10px;
  text-align: right;
`

const ButtonWrapper = s.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }

  @media only screen and (min-width: 1100px) {
    position: absolute;
    right: 40px;
    top: 20px;
    display: flex;
    flex-direction: column;
  }
`

const NewsButton = s(Button)`
  border-radius: 5px;
  font-family: "Heebo", sans-serif;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 14px !important;
  padding: 3px 12px !important;
  color: ${WHITE} !important;
  background-color: ${DP_RED} !important;
  border-color: ${DP_DARK_RED} !important;
`

const DonateButton = s(Button)`
  border-radius: 5px;
  font-family: "Heebo", sans-serif;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 14px !important;
  padding: 3px 12px !important;
  color: ${DP_RED} !important;
  background-color: ${WHITE} !important;
  border-color: ${DP_DARK_RED} !important;
  border-width: 2px !important;
`

const HeaderNavbar = s(Navbar)`
  border-top: 1px solid ${GRAY};
  border-bottom: 1px solid ${GRAY};
  padding: 0 !important;
  width: 100%;
`

const NavbarContainer = s.div`
  margin-left: 20px;
  margin-right: 20px;
  max-height: 48px;
`

const NavDate = s(Nav.Link)`
  border-right: 2px solid ${LIGHT_GRAY};
  padding-right: 10px;
  color: black !important;
  font-family: "Heebo", sans-serif;
`

const NavLink = s(Nav.Link)`
  color: black !important;
  font-family: "Heebo", sans-serif;
`

const SocialIcons = s.div`
  margin-left: auto;
  margin-right: 10px;
`

const IconWrapper = s.a`
  padding: 15px;
`

const LogoImage = s.img`
  width: 700px;
  display: initial;
  max-width: 100%;
  height: auto;
`

// TODO: Make mcModal trigger a modal
const Header = (): React.ReactElement => (
  <>
    <SEO />
    <TopRow className="hidden-xs">
      <div style={{ display: 'block' }}>
        <StyledLink to="/">
          <LogoImage src={'https://d1q35ni5859stt.cloudfront.net/40388fc9a13ea9253e1ca9ed785affde/dist/img/header-logo.svg'}/>
        </StyledLink>
        <HeaderLogoText>
          Founded in 1885
        </HeaderLogoText>
      </div>
      <ButtonWrapper>
        <NewsButton variant="primary" size="sm">
          NEWSLETTERS
        </NewsButton>
        <DonateButton variant="inverse" size="sm">
          DONATE
        </DonateButton>
      </ButtonWrapper>
    </TopRow>
    <HeaderNavbar expand="md">
      <IconWrapper>
        <SearchIcon style={{ width: '16px' }} />
      </IconWrapper>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav>
            <Navbar.Brand>
            </Navbar.Brand>
            <NavDate>
              February 8th, 2020
            </NavDate>
            {NavBarLinks.map(({ section, slug }) => (
              <NavLink href={slug}>
                {section}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      <SocialIcons>
        <IconWrapper>
          <FBIcon style={{ width: '20px' }} />
        </IconWrapper>
        <IconWrapper>
          <TwitterIcon style={{ width: '20px' }} />
        </IconWrapper>
        <IconWrapper>
          <InstagramIcon style={{ width: '20px' }} />
        </IconWrapper>
      </SocialIcons>
    </HeaderNavbar>
  </>
)


export default Header
