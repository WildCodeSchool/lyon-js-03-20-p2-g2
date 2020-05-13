import React from 'react';
import '../style/alerts.css';

const Alerts = ({ title, description, regions, severity, url }) => {
  return (
    <div className='div-alerts'>
      <h3><i className='fas fa-exclamation-triangle' /> {title}</h3>
      <p>{description}</p>
      <p>Regions: {regions.map((region, index) => {
        if (index === (regions.length - 1)) {
          return <i key={index}> {region}.</i>;
        } else {
          return <i key={index}> {region},</i>;
        }
      }
      )}
      </p>
      <span className='details-alerts'><a href={url} target="_blank" rel="noopener noreferrer">View details</a></span>
    </div>
  );
};

export default Alerts;
