import React from 'react'
import './ContentTitle.scss'

function ContentTitle({title, link}) {
  return (
    <div className="content-title">
      <a href={link}>
        <h4>{title}</h4>
      </a>
    </div>
  );
}

export default ContentTitle
