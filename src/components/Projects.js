import React from 'react';
import ProjectItem from './ProjectItem';
import ProjectData from '../data/ProjectData.json';

export default function Projects() {
  return (
    <>
    <div className="ProjectsHeader">
      <h3>Projects.</h3>
      These are my projects
    </div>
      <div className='Projects'>
        {ProjectData.map((it) => (
          <ProjectItem
            name={it.name}
            body={it.body}
            image={it.image}
            link={it.link}
          />
        ))}
      </div>
    </>
  );
}
