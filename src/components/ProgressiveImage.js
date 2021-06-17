import React from 'react';
import ProgressiveImage from 'react-progressive-image';

const placeHolder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVoAAADoCAYAAACuJCy8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAMvSURBVHhe7dQxAcAwDMCwdPypBkP7jII/6TEDn929A0Dm+wtAxGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtAAxowWIGS1AzGgBYkYLEDNagJjRAsSMFiBmtACpmQfzRwWWvErEDAAAAABJRU5ErkJggg==';

const ProgressiveImageComponent = ({ imageUrl, alt, class_Name = null, borderRadius='0px', width='100%' }) => {
    
      return (
            <>
            <style jsx>{`
            
            .cards__item__img {
                  position: absolute;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                  display: block;
                  width: 100%;
                  max-width: 100%;
                  height: 100%;
                  max-height: 100%;
                
                }
      
                .cards__item__img:hover {
                  // transform: scale(1.1);
                }
            `}

            </style>
            <ProgressiveImage src={imageUrl} placeholder={placeHolder}>
            {(src, loading) => {
              return <img src={src}   alt={alt || 'ssbu image'} className={`${class_Name ? class_Name: ''}`} style={{ opacity: loading ? 0.5 : 1, width:`${width?width:'100%'}` }} />;
            }}
           </ProgressiveImage>

           </>
      )
}

export default ProgressiveImageComponent;