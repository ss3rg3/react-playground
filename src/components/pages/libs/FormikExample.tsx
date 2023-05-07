import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined, WarningFilled, CheckCircleFilled} from '@ant-design/icons';
import {Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import {useState} from "react";

interface LoginFormValues {
    email: string;
    password: string;
}

const initialValues: LoginFormValues = {
    email: '',
    password: '',
};

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
});

export default function FormikExample() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [submitAttempted, setSubmitAttempted] = useState(false);

    const handleSubmit = (
        values: LoginFormValues,
        formikHelpers: FormikHelpers<LoginFormValues>
    ) => {
        console.log('Form sent', values);
        formikHelpers.setSubmitting(false);
        setIsSubmitted(true)
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  isValid,
              }) => {
                // Put logic in here
                let infoIcon = <></>
                if (!isValid) {
                    infoIcon = <WarningFilled className={"text-red-700 text-2xl"}/>
                } else if (isSubmitted) {
                    infoIcon = <CheckCircleFilled className={"text-green-600 text-2xl"}/>
                }

                return (
                    <Form onFinish={handleSubmit} layout="vertical">
                        <Form.Item
                            label="Email"
                            name="email"
                            help={touched.email && errors.email ? errors.email : ''}
                            validateStatus={touched.email && errors.email ? 'error' : undefined}>
                            <Input
                                prefix={<UserOutlined/>}
                                placeholder="Email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            help={touched.password && errors.password ? errors.password : ''}
                            validateStatus={touched.password && errors.password ? 'error' : undefined}>
                            <Input.Password
                                prefix={<LockOutlined/>}
                                placeholder="Password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={isSubmitting}
                                className={"bg-amber-400"}
                                disabled={!isValid}>
                                Log in
                            </Button>{infoIcon}
                        </Form.Item>
                    </Form>
                )
            }}
        </Formik>
    );
}
