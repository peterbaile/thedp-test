import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import s from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/Footer'
import RightCol from '../components/home/RightCol'
import Article from '../components/Article'
import { IArticle, IMostReadArticle } from '../utils/types'
import { generateSlug, IMAGE_URL } from '../utils/helperFunctions'
import { StyledLink, StyledAnchorTag, Filler, HeadlineText, SectionHeader } from '../components/shared'

const Line = s(Row)`
  margin-right: 1em;
  border-bottom: 1px solid #EBEBEB;
`

const StyledRow = s.div`
  border-bottom: 1px solid #EBEBEB;
  padding-bottom: 1em;
  margin-bottom: 1em;
  margin-right: 0.5em;
`

interface IHomeProps {
  pageContext: {
    centerpiece: IArticle
    topArticles: IArticle[]
    mostReadDP: IMostReadArticle[]
    mostRead34: IMostReadArticle[]
    mostReadUTB: IMostReadArticle[]
  }
}

const Home = ({
  pageContext: {
    centerpiece,
    topArticles,
    mostReadDP,
    mostRead34,
    mostReadUTB
  }
}: IHomeProps): React.ReactElement => (
    <Layout>
      <SEO title="Home" />
      <Container style={{ marginTop: '1.5em' }}>
        <Row style={{ borderBottom: '1px solid #A9A9A9', paddingBottom: '1em' }}>
          <Col xs={9}>
            <SectionHeader > NEWS </SectionHeader >
            <Row style={{ marginBottom: '1em', borderBottom: '1px solid #EBEBEB', padding: '1em 0', marginRight: '1em' }}>
              <Col xs={4} style={{ borderRight: '1px solid #EBEBEB' }}>
                {topArticles.map((article, idx) => (
                  <StyledRow>
                    <Article article={article} includeAbstract={idx === 0 ? true : false} />
                  </StyledRow>
                ))}
              </Col>
              <Col>
                <Article article={centerpiece} includeAbstract isCenter/>
              </Col>
            </Row>
            <SectionHeader > TRENDING </SectionHeader >
            <Filler color="#DFF3DB"/>
            <Line />

            <SectionHeader > NEWS </SectionHeader >

            <Line />

            <SectionHeader> VISUAL STORIES </SectionHeader >

            <SectionHeader> FROM 34TH STREET </SectionHeader >
            <p style={{ fontStyle: 'italic' }}> The DP&#39;s arts and culture magazine </p>
            <div style={{ borderBottom: '1px solid #EBEBEB', padding: '1em 0', marginRight: '1em' }}>
              <StyledAnchorTag href={`https://www.34st.com${mostRead34[0].path}`}> 
                <div style={{ textAlign: 'center', padding: '0 5em' }}>
                  <img style={{ height: '300px' }} src={mostRead34[0].image} />
                  <p> <strong dangerouslySetInnerHTML={{ __html: mostRead34[0].ogTitle }} /> </p>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
              </StyledAnchorTag>
            </div>
            <Row style={{ marginTop: '1em', borderBottom: '1px solid #A9A9A9', paddingBottom: '1em', marginRight: '1em' }}>
              <Col xs={6} style={{ fontSize: '90%', padding: '0 2em', borderRight: '1px solid #EBEBEB' }}>
              <StyledAnchorTag href={`https://www.34st.com${mostRead34[1].path}`}> 
                <p> <strong dangerouslySetInnerHTML={{ __html: mostRead34[1].ogTitle }} /> </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </StyledAnchorTag>
              </Col>
              <Col style={{ fontSize: '90%', padding: '0 2em' }}>
              <StyledAnchorTag href={`https://www.34st.com${mostRead34[2].path}`}> 
                <p> <strong dangerouslySetInnerHTML={{ __html: mostRead34[2].ogTitle }} /> </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </StyledAnchorTag>
              </Col>
            </Row>
            <SectionHeader > FROM UNDER THE BUTTON </SectionHeader >
            <p style={{ fontStyle: 'italic' }}> Penn&#39;s only intentionally satirical publication </p>
            <div style={{ borderBottom: '1px solid #EBEBEB', padding: '1em 0', marginRight: '1em' }}>
              {console.log(mostReadUTB[0])}
            <StyledAnchorTag href={`https://www.underthebutton.com${mostReadUTB[0].path}`}> 
              <div style={{ textAlign: 'center', padding: '0 5em' }}>
                <img style={{ height: '300px' }} src={mostReadUTB[0].image} />
                <p> <strong dangerouslySetInnerHTML={{ __html: mostReadUTB[0].ogTitle }} /> </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>
            </StyledAnchorTag>
            </div>
            <Row style={{ marginTop: '1em' }}>
              <Col xs={6} style={{ fontSize: '90%', padding: '0 2em', borderRight: '1px solid #EBEBEB' }}>
              <StyledAnchorTag href={`https://www.underthebutton.com${mostReadUTB[1].path}`}> 
                <p> <strong dangerouslySetInnerHTML={{ __html: mostReadUTB[1].ogTitle }} /> </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </StyledAnchorTag>
              </Col>
              <Col style={{ fontSize: '90%', padding: '0 2em' }}>
              <StyledAnchorTag href={`https://www.underthebutton.com${mostReadUTB[2].path}`}> 
                <p> <strong dangerouslySetInnerHTML={{ __html: mostReadUTB[2].ogTitle }} /> </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </StyledAnchorTag>
              </Col>
            </Row>
          </Col>
          <RightCol mostReadDP={mostReadDP} />
        </Row>
      </Container>
      <Footer />
    </Layout>
)

export default Home
