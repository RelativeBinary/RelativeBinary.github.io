import React from 'react';
import ProjectItem from './ProjectItem';
import ProjectData from '../data/ProjectData.json';
import BasicGrow from './animation/BasicGrow';

export default function Projects() {
  return (
    <>
    <BasicGrow delay={4000}>
      <div className="ProjectsHeader">
        <h3>Projects.</h3>
        These are my projects
      </div>
    </BasicGrow>
    
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
