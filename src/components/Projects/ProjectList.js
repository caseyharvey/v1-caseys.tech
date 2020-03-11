import React from 'react';
import { projectArray } from './projectArray';
import Project from './Project';
import './project-list.sass';

class ProjectList extends React.Component {
  render() {
    return (
      <div className='page-container'>
        {projectArray.map(project => (
          <Project
            id={project.id}
            key={project.id}
            name={project.name}
            type={project.type}
            url={project.url}
            github={project.github}
            about={project.about}
          />
        ))}
      </div>
    );
  }
}
export default ProjectList;
