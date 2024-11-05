import React, { useState, useEffect, useContext } from 'react';
import toast from 'react-hot-toast';

import Modal from '../../shared/components/UIElements/Modal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import { useHttpClient } from '../../shared/hooks/http-hook';


import './styling/AddResourceModal.css';

//Features to add on the AddResourceModal:
// 1. Connect to the backend to add a resource to the database when the submit button is clicked
// 2. Add validation to the form fields to ensure that the user has entered the required information
// 3. Add a loading spinner to the modal while the resource is being added to the database
// 4. Display a success message when the resource has been added successfully
// 5. Add error handling to display an error message if there is a problem adding the resource to the database

const AddResourceModal = props => {

    //Import the useHttpClient hook to send requests to the backend
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    

    //State variables to store the form data
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState('');

    //Function to handle the change event for the title input field
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    //Function to handle the change event for the description input field
    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }

    //Function to handle the change event for the link input field
    const linkChangeHandler = (event) => {
        setLink(event.target.value);
    }

    //Function to handle the change event for the image input field
    const imageChangeHandler = (event) => {
        setImage(event.target.value);
    }

    //Function to reset the form fields
    const resetForm = () => {
        setTitle('');
        setDescription('');
        setLink('');
        setImage('');
    }

    //Function to handle the form submission
    const resourceFormValidation = () => {
        if (title.trim() === '' || description.trim() === '' || link.trim() === '' || image.trim() === '') {
            //Display an error message if any of the fields are empty
            console.log('Please enter all the required information');
            toast.error('Please enter all the required information!');
            return;
        } else {
            toast.success('Resource added successfully!');
            props.onCancel();
        }
    }

    //Function to handle the form submission
    const submitHandler = (event) => {
        event.preventDefault();

        //Validate the form fields
        resourceFormValidation();

        //Add the resource to the database
        console.log('Adding resource to the database...');
        console.log('Title:', title);
        console.log('Description:', description);
        console.log('Link:', link);
        console.log('Image:', image);

        //Send a request to the backend to add the resource to the database
        // WORK IN PROGRESS
        const addResource = async () => {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/resource/resources', // Temporary URL to test the request
                    "POST",
                    JSON.stringify({
                        title: title,
                        description: description,
                        link: link,
                        audience: props.audience,
                       // creator: 
                        image: image
                    }),
                    {
                        'Content-Type': 'application/json'
                    }
                );

                console.log(responseData);
            } catch (err) {
                console.log(err);
                
                // Display an error message if there is a problem adding the resource to the database
                toast.error('An error occurred. Please try again.');
            }
        }

        addResource();

        //Reset the form fields
        resetForm();

    }

    return (

        <div className="add-resource-modal">

            <Modal
            className="add-resource-modal"
            onCancel={props.onCancel}
            show={props.show}
            header="Add a Resource"
            >
            
            {isLoading && <LoadingSpinner asOverlay />}

            <form className="resource-form">

                <label htmlFor="title">Title</label>

                <input type="text" id="title" name="title" onChange={titleChangeHandler} value={title} />

                <label htmlFor="description">Description </label>

                <textarea id="description" name="description" onChange={descriptionChangeHandler} value={description} />

                <label htmlFor="link">Link</label>

                <input type="text" id="link" name="link" onChange={linkChangeHandler} value={link} />

                <label htmlFor="image">Image</label>

                <input type="file" id="image" name="image" onChange={imageChangeHandler} value={image} />

                {error && <p className="error-message">{error}</p>}

                <div className= "button-container">

                    <button type="submit" className="submit-button" onClick={submitHandler}>Submit</button>

                    <button onClick={props.onCancel} className="cancel-button">Cancel</button>

                </div>

            </form>

            </Modal>

        </div>
    );
    }

export default AddResourceModal;