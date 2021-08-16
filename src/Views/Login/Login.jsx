import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { hideModal } from '../../store/redux/modalReducer'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../Login/login.css'

const loginSchema = Yup.object().shape({
    password: Yup.string()
        .min(5, "Password must be 5 characters long.")
        .max(50, "Password must be 50 characters short!")
        .required("Password is required"),
    email: Yup.string().email("Invalid email").required("Required")
});

const Login = ({ onSubmit }) => {
    const dispatch = useDispatch();

    return (
        <div className="login">

            <i title="Close"
                className="fas fa-window-close"
                onClick={() => dispatch(hideModal())}
            />

            <Formik className="login-data"
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={(values, { resetForm }) => {
                    setTimeout(() => {
                    console.log("Logging in", values);
                    alert(`Login is complete:  ${ values.email}`)
                    resetForm();
                    }, 500);
                    onSubmit(values)
                }}
            >
                {({ isSubmitting }) => {
                    return (
                        <>
                            <Form action="#" className="login__form">
                                <Field type="email" name="email"
                                    value="eve.holt@reqres.in"
                                    placeholder="E-mail" className="email" />
                                <ErrorMessage name="email" />

                                <Field type="password" name="password"
                                    value="cityslicka"
                                    placeholder="Password" className="password" />
                                <ErrorMessage name="password" className="error-mes" />

                                <button type="submit" disabled={isSubmitting}
                                    className="login-btn">
                                    LOG IN
                                </button>
                            </Form>

                            <div className="login__help">
                                <a href="#" className="help-a">HELP</a>
                            </div>
                        </>
                    );
                }}
            </Formik>
        </div>
    )
}

export const LoginScreen = memo(Login)
