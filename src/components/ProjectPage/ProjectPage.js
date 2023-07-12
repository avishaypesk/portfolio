import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const ProjectPage = ({ imageSrc, title, projectSummary, technologies, projectSite, projectBackground, staticPreviews }) => {
    return (
        <div>
            <div>
                <img src={imageSrc} alt={title} />
                <h1>{title}</h1>
                <p>{projectSummary}</p>
                <span>{technologies}</span>
                <Link to={projectSite}>
                    <Button text='visit website' />
                </Link>
            </div>

            <div>
                <h2>Project Background</h2>
                <p>{projectBackground}</p>
                <h3>Static Previews</h3>
                {staticPreviews.map((preview, index) => (
                    <img key={index} src={preview} alt={`Preview +${index + 1}`} />
                ))}

                {/* arrows that cycle projects */}
            </div>
        </div>
    );
};

export default ProjectPage;