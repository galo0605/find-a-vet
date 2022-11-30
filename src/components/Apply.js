import "../assets/stylesheets/Apply.css";
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
            link: Yup.string().required("Link to CV/resume is required"),
            acceptTerms: Yup.bool().oneOf([true], "Please accept the terms"),
        });
    }
    render() {
        const initialValues = {
            fullname: "",
            mobilenumber: "",
            email: "",
            link: "",
            acceptTerms: false,
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
                            <label id="form-title">
                                Apply As An FV Veterinarian
                            </label>

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
                                <label>Link to CV or Resume *</label>
                                <Field
                                    name="link"
                                    type="text"
                                    className="form-control"
                                />
                                <ErrorMessage
                                    name="link"
                                    component="div"
                                    className="text-danger"
                                />
                            </div>

                            <div className="form-group form-check">
                                <Field
                                    name="acceptTerms"
                                    type="checkbox"
                                    className="form-check-input"
                                />
                                <label
                                    htmlFor="acceptTerms"
                                    className="form-check-label"
                                >
                                    I hereby authorize Find A Vet to collect and
                                    process my personal data for purposes of
                                    processing and administering my application.
                                </label>
                                <ErrorMessage
                                    name="acceptTerms"
                                    component="div"
                                    className="text-danger"
                                />
                            </div>

                            <div className="form-button">
                                <Button variant="flat" type="submit" size="lg">
                                    Send
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>

                <Modal show={this.state.show} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title id="modal-title">
                            Application received
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modal-body">
                        Thanks for registering your interest to join us as a
                        Find A Vet Veterinarian. We will be in touch within two
                        working days.
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
