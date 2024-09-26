import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required ya chump!')
        .min(3, 'Username must be 3 or more characters long ya chump!'),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    password: yup
        .string()
        .trim()
        .required('password is required ya chump!')
        .min(6, 'password must be 6 or more characters long ya chump!'),
    agree: yup.boolean()
    
});

export default formSchema;