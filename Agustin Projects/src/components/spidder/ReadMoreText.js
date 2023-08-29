import React, { useState } from 'react';
import './styleSpidder.css';


const ReadMore = ({ text, maxCharCount }) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const isTextLong = text.length > maxCharCount;

  const toggleExpansion = () => { //alternar expansión
    setIsExpanded(!isExpanded);
  };

  //decidimos si mostrar todo el texto o solo una parte
  const displayText = isExpanded ? text : text.slice(0, maxCharCount); // lo corta siempre a menos que se haya apretado "leer mas"

  return (
    <div className={`sp-rm-read-more ${isExpanded ? 'sp-rm-expanded' : ''}`}>
      <p className="sp-rm-post">{displayText}</p>

      {isTextLong &&
        ( //si no es texto largo, no agrega el "leer mas" (pero al texto lo corta siempre (o intenta cortarlo digamos, si es muy corto no hace nada))
          <div className="sp-rm-read-more-footer">
            <button className="sp-rm-read-more-button" onClick={toggleExpansion}>
              {isExpanded ? 'Leer menos' : 'Leer más'}
            </button>
          </div>
        )
      }
    </div>
  );
};

export default ReadMore;