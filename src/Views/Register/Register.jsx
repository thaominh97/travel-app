import React, { memo } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Register/Register.css'

const registerSchema = Yup.object({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(5, "Password must be 5 characters long.")
        .max(40, "Password must be 40 characters short!")
        .required("Password is required"),
})
const initialValues = { firstName: '', lastName: '', email: '', password: '' }
function Register() {
    return (
        <div className="register">
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={
                    (values, { resetForm, setErrors, setSubmitting }) => {
                        console.log(values);
                        setTimeout(() => {
                            if (values.email === "eve.holt@reqres.in") {
                                setErrors({ email: "That email is already taken" });
                            } else {
                                resetForm();
                            }
                            setSubmitting(false);
                        }, 1000);
                    }
                }
            >
                <Form className="register__form">
                    <label htmlFor="firstName">First Name:</label>
                    <Field name="firstName" type="text" placeholder=">> First Name" className="register__form-input" />
                    <ErrorMessage name="firstName" className="register__form-error" />

                    <label htmlFor="lastName">Last Name:</label>
                    <Field name="lastName" type="text" placeholder=">> Last Name" className="register__form-input" />
                    <ErrorMessage name="lastName" className="register__form-error" />

                    <label htmlFor="email">Email Address:</label>
                    <Field name="email" type="email" placeholder=">> Email Address" className="register__form-input" />
                    <ErrorMessage name="email" className="register__form-error" />

                    <label htmlFor="password">Password:</label>
                    <Field name="password" type="password" placeholder=">> Password" className="register__form-input" />
                    <ErrorMessage name="password" className="register__form-error" />

                    <button type="submit" className="register__btn">Register</button>
                </Form>
            </Formik>
        </div>

    )
}

export const RegisterScreen = memo(Register);
