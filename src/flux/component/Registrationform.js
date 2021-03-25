import React from 'react';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';





const RegistrationForm = ({ errors, touched, isSubmitting }) => ( 
    
 
    <div>
    <h1> Registration form </h1> 
    <Form>
        
        <div>
            <label>Email Id:</label>
            <Field type="email" id="email" name="email"/>
        </div>
        <br></br>
        <div>
            <label>Password:</label>
            <Field type="password" id="pwd" name="pwd"/>
        </div>
        <br></br>
        <div>
            <label>First name:</label>
            <Field type="text" id="fname" name="fname"/>
        </div>
        <br></br>
        <div>
            <label>Last name:</label>
            <Field type="text" id="lname" name="lname"/>
        </div>
        <div>
             <label >Mobile Number:</label>
             <Field type="tel" id="phone" name="phone" /> 
        </div>
    
        <br></br>
    
                    <button type = "submit"
                    disabled = { isSubmitting } > Submit </button> 
                    </Form>
                    </div>
                
                      )

                const FormikRegistrationForm = withFormik({
                    mapPropsToValues({ EmailId, Password, Firstname, Lastname,Mobilenumber}) {
                        return {
                            
                            EmailId: EmailId || '',
                            Password: Password || '',
                            Firstname: Firstname || '',
                            Lastname: Lastname || '',
                            Mobilenumber: Mobilenumber || ''

                        }

                    },
                    // validationSchema: Yup.object().shape({
                    //     name: Yup.string().min(3, 'Description must be at least 3 characters in length').required('Description is required'),
                        
                    // }),
                    handleSubmit(values, { resetForm, setSubmitting, setErrors, props }) {
                        console.log(values);
                        var users = {};
                        setTimeout(() => {
                            if (values.Firstname === 'God') {
                                setErrors({ Firstname: 'You cannot add God as an issue' })
                            } else {
                                resetForm()
                                users.EmailId = values.EmailId;
                                users.Password = values.Password;
                                users.Firstname = values.Firstname;
                                users.Lastname = values.Lastname;
                                users.Mobilenumber = values.Mobilenumber;

                                debugger;
                                props.onSave(users)

                            }
                            setSubmitting(false);
                        }, 2000);
                    }
                })(RegistrationForm)

                export default FormikRegistrationForm