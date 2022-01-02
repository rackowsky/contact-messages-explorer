import React from "react"
import { Formik } from "formik"
import {
    SymbolForm,
    Input,
    Textarea,
    InputWrapper,
    Button,
    SendSymbol,
    P,
} from "../styles/formik.styles"

const FormikComponent = () => {
    return(
        <Formik

        >
            {({
                handleSubmit,
                isSubmiting,
            }) => (
                <form onSubmit={ handleSubmit }>
                    <InputWrapper>
                        <SymbolForm />
                        <Input
                            type="name"
                            name="name"
                            placeholder="Your name"
                        />
                    </InputWrapper>
                    <InputWrapper isMessage>
                        <SymbolForm isMessage/>
                        <Textarea
                            type="message"
                            name="message"
                            placeholder="Your message"
                        />
                    </InputWrapper>
                    <Button
                        type="submit"
                        disabled={ isSubmiting }
                    >
                        <SendSymbol />
                        <P>Send</P>
                    </Button>
                </form>
            )}
        </Formik>
    )
}

export default FormikComponent