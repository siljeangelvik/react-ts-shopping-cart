import * as yup from 'yup';

export const validationSchema = yup.object({
    fullName: yup
        .string()
        .min(3, '* Your full name should be at least 3 characters.')
        .required('* Please enter your first name'),
    email: yup
        .string()
        .email('* Please enter a valid email')
        .required('* Please enter your email'),
    subject: yup
        .string()
        .min(3, '* Your subject title should be at least 3 characters.')
        .required('* Please enter your subject'),
    formBody: yup
        .string()
        .min(3, '* Your message should be at least 3 characters.')
        .required('* Please enter your subject'),
});

