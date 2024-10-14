import React, { useState, useEffect } from "react";
import { Resource, resources } from "../components/Resource"; // Import Resource component and resources list
import "../components/styling/ResourceCard.css";


const ResourceCard = (props) => {
    const [resourcesState, setResourcesState] = useState([]); // State for resources
 
    useEffect(() => {  // Update resourcesState based on search or name prop
        if (props.search) {   
            setResourcesState(  // Filter resources based on search prop
                resources.filter(
                    (resource) => 
                        resource.search.filter((search) => search.includes(props.search)).length > 0 // Check if search prop is included in resource.search array
                )
            );
        } else if (props.name) {  // Filter resources based on name prop
            setResourcesState(resources.filter((resource) => resource.name === props.name)); // Check if name prop is equal to resource.name
        }
    }, [props.search, props.name]); 

    // Render each resource using the Resource component
    return (
        <React.Fragment>
            {resourcesState.length > 0 ? (
                resourcesState.map((resource) => (
                    <Resource
                        key={resource.name}
                        name={resource.name}
                        search={resource.search}
                        description={resource.description}
                        link={resource.link}
                        image={resource.image}
                    />
                ))
            ) : (
                <div>No resources found</div>
            )}
        </React.Fragment>
    );
};

export default ResourceCard;