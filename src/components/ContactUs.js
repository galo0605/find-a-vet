import "../assets/stylesheets/ContactUs.css";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button, Modal } from "react-bootstrap";
import * as Yup from "yup";

class Apply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleSubmit(data, { resetForm }) {
        console.log(JSON.stringify(data, null, 2));
        this.setState({ show: true });
        resetForm();
    }
    closeModal() {
        this.setState({ show: false });
    }

    validationSchema() {
        return Yup.object().shape({
            fullname: Yup.string().required("Full Name is required"),
            mobilenumber: Yup.string()
                .required("Mobile number is required")
                .min(11, "Mobile number must be 11 numbers")
                .max(11, "Mobile number must be 11 numbers")
                .matches(
                    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                    "Mobile number must be numeric"
                ),
            email: Yup.string()
                .required("Email is required")
                .email("Email is invalid"),
            message: Yup.string().required("Message is required"),
        });
    }
    render() {
        const initialValues = {
            fullname: "",
            mobilenumber: "",
            email: "",
            message: "",
        };

        return (
            <div className="register-form">
                <Formik
                    initialValues={initialValues}
                    validationSchema={this.validationSchema}
                    onSubmit={this.handleSubmit}
                >
                    {({ resetForm }) => (
                        <Form>
                            <div className="form-group">
                                <label>Full Name *</label>
                                <Field
                                    name="fullname"
                                    type="text"
                                    className="form-control"
                                />
                                <ErrorMessage
                                    name="fullname"
                                    component="div"
                                    className="text-danger"
                                />
                            </div>

                            <div className="form-group">
                                <label>Mobile Number *</label>
                                <Field
                                    name="mobilenumber"
                                    type="text"
                                    className="form-control"
                                />
                                <ErrorMessage
                                    name="mobilenumber"
                                    component="div"
                                    className="text-danger"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <Field
                                    name="email"
                                    type="email"
                                    className="form-control"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-danger"
                                />
                            </div>

                            <div className="form-group">
                                <label>Message *</label>
                                <Field
                                    name="message"
                                    type="textarea"
                                    className="form-control"
                                />
                                <ErrorMessage
                                    name="message"
                                    component="div"
                                    className="text-danger"
                                />
                            </div>
                            <label>All fields marked with * are required</label>
                            <div className="form-button">
                                <Button variant="flat" type="submit" size="lg">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>

                <Modal show={this.state.show} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title id="modal-title">
                            Message received
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modal-body">
                        Thanks for sending a message to us. We will be in touch
                        within two working days.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Apply;
