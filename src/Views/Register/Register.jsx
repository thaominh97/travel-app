import React, { memo} from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Register/Register.css'
import RegisterAPI from './RegisterAPI';
import { useHistory } from 'react-router-dom';

const registerSchema = Yup.object({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less'),
        //.required('Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less'),
        //.required('Required'),
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
    const history = useHistory()
    const handleFormSubmit = (token) => {
        localStorage.setItem('token', token )
        history.push("/")
    }
    const signUp = (infor) => {
        console.log(infor)
        const item = {
            email: '', 
            password: ''
        };
        RegisterAPI(item,(result) => {
            console.log(result.token)
            handleFormSubmit(result.token)
            window.location.reload();
        })
    }
    return (
        <div className="register">
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={signUp} 
                onClick={
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
                    <Field name="firstName"
                    value="Nguyen" 
                    type="text" 
                    placeholder=">> First Name" 
                    className="register__form-input" />
                    <ErrorMessage name="firstName" className="register__form-error" />

                    <label htmlFor="lastName">Last Name:</label>
                    <Field name="lastName"
                    value="Tibb" 
                    type="text" 
                    placeholder=">> Last Name" 
                    className="register__form-input" />
                    <ErrorMessage name="lastName" className="register__form-error" />

                    <label htmlFor="email">Email Address:</label>
                    <Field name="email"
                    value="eve.holt@reqres.in" 
                    type="email" 
                    placeholder=">> Email Address" 
                    className="register__form-input" />
                    <ErrorMessage name="email" className="register__form-error" />

                    <label htmlFor="password">Password:</label>
                    <Field name="password" 
                    value="pistol"
                    type="password" 
                    placeholder=">> Password" 
                    className="register__form-input" />
                    <ErrorMessage name="password" className="register__form-error" />

                    <button type="submit" className="register__btn">Register</button>
                </Form>
            </Formik>
        </div>

    )
}

export const RegisterScreen = memo(Register);
