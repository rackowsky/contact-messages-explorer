import React from "react"
import "@fontsource/inria-sans"
import FormikComponent from "../components/formik"

import {
  CreateGlobalStyleElement,
  IndexWrapper,
  FormWrapper,
  FormHeader,
  FooterComponent,
  FooterSign,
  HeartSymbol,
} from "../styles/index.styles"

const Index = () => {
  return (
    <>
      <CreateGlobalStyleElement />
      <IndexWrapper>
        <FormWrapper>
          <FormHeader>Let's be in touch</FormHeader>
          <FormHeader isUnderHeader>Complete the form and wait up to 24 hours for a response.</FormHeader>
          <FormikComponent />
        </FormWrapper>
      </IndexWrapper>
      <FooterComponent>
        <FooterSign>made with</FooterSign><HeartSymbol /><FooterSign>by rackowsky</FooterSign>
      </FooterComponent>
    </>
  )
}

export default Index