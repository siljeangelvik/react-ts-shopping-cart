import {Button} from "react-bootstrap";
import {FormikValues, useFormik} from "formik";
import {validationSchema} from './forms/contact/schema'
import ContactSuccess from "./ContactSuccess";
import {useState} from "react";

export function ContactForm() {
    const [displaySuccess, setDisplaySuccess] = useState(false);

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            subject: '',
            formBody: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values: FormikValues) => {
            console.log(values);
            ContactSuccess();
            setDisplaySuccess(true);
        },
    });

    return (
        <div style={{minWidth: "320px", maxWidth: "600px"}}>
            {displaySuccess ? <ContactSuccess/> :
                <form
                    onSubmit={formik.handleSubmit}
                    noValidate autoComplete="off"
                    style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <div className={"d-flex flex-column align-items-center justify-content-center"}>
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullName}
                        />
                        {formik.touched.fullName && formik.errors.fullName ? (
                            <p style={{color: "red"}}>{formik.errors.fullName}</p>
                        ) : null}
                    </div>

                    <div className={"d-flex flex-column align-items-center justify-content-center"}>
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <p style={{color: "red"}}>{formik.errors.email}</p>
                        ) : null}
                    </div>

                    <div className={"d-flex flex-column align-items-center justify-content-center"}>
                        <label htmlFor="subject">Subject</label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.subject}
                        />
                        {formik.touched.subject && formik.errors.subject ? (
                            <p style={{color: "red"}}>{formik.errors.subject}</p>
                        ) : null}
                    </div>

                    <div className={"d-flex flex-column align-items-center justify-content-center"}>
                        <label htmlFor="formBody">Message</label>
                        <textarea
                            id="formBody"
                            name="formBody"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.formBody}
                        />
                        {formik.touched.formBody && formik.errors.formBody ? (
                            <p style={{color: "red"}}>{formik.errors.formBody}</p>
                        ) : null}
                    </div>
                    <Button type="submit"
                            size="sm"
                            style={{margin: "20px"}}
                    >
                        Submit
                    </Button>
                </form>
            }
        </div>
    )
}