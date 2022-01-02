import React from "react"
import "@fontsource/inria-sans"

import {
  IndexWrapper,
  FooterComponent,
  FooterSign,
  HeartSymbol,
} from "../styles/messages-list.styles"
import { CreateGlobalStyleElement } from "../styles/index.styles"

const Index = () => {
  return (
    <>
      <CreateGlobalStyleElement />
      <IndexWrapper>
        <p style={{color: 'white', fontSize: '50px', fontWeight: '900', fontStyle: '900'}}>coming soon</p>
      </IndexWrapper>
      <FooterComponent>
        <FooterSign>made with</FooterSign><HeartSymbol /><FooterSign>by rackowsky</FooterSign>
      </FooterComponent>
    </>
  )
}

export default Index