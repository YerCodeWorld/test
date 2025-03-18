// packages/ui/src/components/common/UnderConstruction.tsx
import React from 'react';
import '../../styles/common/underConstruction.css';

interface UnderConstructionProps {
    title?: string;
    message?: string;
    iconName?: string;
    estimatedCompletion?: string;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({
                                                                 title = 'Coming Soon',
                                                                 message = 'This feature is currently under development and will be available soon.' +
                                                                 'If you want to know better over what it is about, share ideas or help with develpment, check the following link:',
                                                                 iconName = 'tools',
                                                                 estimatedCompletion
                                                             }) => {
    return (
        <div className="under-construction-container">
            <div className="under-construction-content">
                <div className="construction-icon">
                    <i className={`fas fa-${iconName}`}></i>
                </div>

                <h2 className="construction-title">{title}</h2>
                <p className="construction-message">{message}</p>
                <a href={"https://wikipedia.com"}>Wikipedia Article</a><br/>


                {/*
                Just in case we do not want to display a estimated completion date
                */}
                {estimatedCompletion && (
                    <p className="estimated-completion">
                        <span>Estimated completion:</span> {estimatedCompletion}
                    </p>
                )}
            </div>
        </div>
    );
};

export default UnderConstruction;
