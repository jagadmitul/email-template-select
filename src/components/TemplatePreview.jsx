import React, { useState } from 'react';

const TemplatePreview = ({ templateHtml, data }) => {
    const [renderedHtml, setRenderedHtml] = useState('');

    const renderTemplate = () => {
        const compiledTemplate = Mustache.render(templateHtml, data);
        setRenderedHtml(compiledTemplate);
    };

    return (
        <div className="template-preview">
            <button onClick={renderTemplate} className="bg-blue-500 text-white px-4 py-2 rounded">
                Preview Template
            </button>
            <div className="preview-container mt-4">
                <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />
            </div>
        </div>
    );
};

export default TemplatePreview;
