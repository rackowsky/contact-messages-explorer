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
            initialValues={{
                name: '',
                message: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                handleSubmit,
                values,
                isSubmiting,
                handleChange,
                handleBlur,
            }) => (
                <form onSubmit={ handleSubmit }>
                    <InputWrapper>
                        <SymbolForm />
                        <Input
                            type="name"
                            name="name"
                            placeholder="Your name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                    </InputWrapper>
                    <InputWrapper isMessage>
                        <SymbolForm isMessage/>
                        <Textarea
                            type="message"
                            name="message"
                            placeholder="Your message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
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