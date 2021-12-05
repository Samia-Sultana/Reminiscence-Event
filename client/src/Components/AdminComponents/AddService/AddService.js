import React from 'react';
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../CreateAdmin/CreateAdmin.css';
import './AddService.css'
const Input = ({ label, register, required }) => (
    <>
        <label>{label}</label>
        <input {...register(label, { required })} />
    </>
);
const AddService = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('name',data.serviceName);
        formData.append('price',data.servicePrice);
        formData.append('description',data.serviceDescription);
        formData.append('photo',data.serviceImage[0]);
        
        fetch('http://localhost:4200/addService',{
            method:'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => console.log(data))
        
    }
    return (
        <div className="createAdmin">
            <div className="pageHeading">
                <h3 className="createHeading">Add Service</h3>
            </div>
            <div className="adminFormPart">
                <Form onSubmit={handleSubmit(onSubmit)} className="">
                    <Row className="g-2">
                        <Form.Group as={Col} className="mb-3" controlId="serviceName">
                            <Form.Label>Service Name</Form.Label>
                            <Form.Control type="text" {...register("serviceName")} placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="servicePrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" {...register("servicePrice")} placeholder="Enter price" />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3 oneRow " controlId="serviceDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" type="text" {...register("serviceDescription")} placeholder="Description" style={{ height: '100px', width: '500px' }} />
                    </Form.Group>

                    <Form.Group className="mb-3 " id="imageUpload" controlId="serviceImage">
                        <Form.Label>Upload image</Form.Label>
                        <Form.Control type="file" {...register("serviceImage")} />
                    </Form.Group>

                    <div className="oneRow" >
                        <Button variant="success" type="submit" >Send</Button>
                    </div>
                
                </Form>

            </div>
        </div>
    );
};

export default AddService;