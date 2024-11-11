import React, { useState, useEffect } from "react";
import { Resource, resources } from "../components/Resource"; // Import Resource component and resources list
import "../components/styling/ResourceCard.css";

const ResourceCard = (props) => {
    const [resourcesState, setResourcesState] = useState([]); // State for resources

    useEffect(() => {
        // If props contain resource data from the backend, use that data directly
        if (props.resources) {
            setResourcesState(props.resources);
        } else if (props.search || props.name) {
            // If no backend resources, filter hardcoded resources by search or name prop
            if (props.search) {
                setResourcesState(
                    resources.filter(
                        (resource) =>
                            resource.search.filter((search) =>
                                search.includes(props.search)
                            ).length > 0
                    )
                );
            } else if (props.name) {
                setResourcesState(resources.filter((resource) => resource.name === props.name));
            }
        }
    }, [props.resources, props.search, props.name, props.description, props.link, props.image]);

    // Render each resource using the Resource component
    return (
        <React.Fragment>
            {resourcesState.length > 0 ? (
                resourcesState.map((resource) => (
                    <Resource
                        key={resource._id || resource.name} // Use _id for backend resources, otherwise name
                        name={resource.name || resource.title}
                        search={resource.search}
                        description={resource.description}
                        link={resource.link}
                        image={resource.image}
                    />
                ))
            ) : (
                <div></div>
            )}
        </React.Fragment>
    );
};

export default ResourceCard;
