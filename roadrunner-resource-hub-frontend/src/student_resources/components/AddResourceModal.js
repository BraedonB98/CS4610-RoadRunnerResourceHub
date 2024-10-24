import React from "react";
import Modal from '../../shared/components/UIElements/Modal';

import './styling/AddResourceModal.css';

const AddResourceModal = props => {
    return (
        <Modal
        className="add-resource-modal"
        onCancel={props.onCancel}
        show={props.show}
        header="Add a Resource"
        footer={
            <button onClick={props.onCancel} className="cancel-button">Cancel</button>
        }
        >
        <form className="resource-form">

            <label htmlFor="title">Title</label>

            <input type="text" id="title" name="title" />

            <label htmlFor="description">Description</label>

            <textarea id="description" name="description" />

            <label htmlFor="link">Link</label>

            <input type="text" id="link" name="link" />

            <label htmlFor="image">Image</label>

            <input type="file" id="image" name="image" />

            <button type="submit">Submit</button>

        </form>

        </Modal>
    );
    }

export default AddResourceModal;