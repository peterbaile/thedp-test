import React from 'react'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'

interface IMostReadCardProps {
  idx: number
  content: string
}

const NumberCol = s(Col)`
  color: #AA1E22;
  font-size: 36px;
`

const Content = s.p`
  font-size: 80%;
`

// TODO: Redefine font-sizes in ems
export const MostReadCard = ({ idx, content }: IMostReadCardProps): React.ReactElement => (
    <Row>
      <NumberCol xs={3}>{ idx }</NumberCol>
      <Col>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </Col>
    </Row>
  )
