import React from 'react'
import s from 'styled-components'

import Header from './Header'

interface ILayoutProps {
  children: React.ReactNode | React.ReactNodeArray
}

const Wrapper = s.div`
  padding: 0 0.1rem;
`

const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <>
    <Header />
    <Wrapper>
      {children}
    </Wrapper>
  </>
)

export default Layout
