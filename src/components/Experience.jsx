import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';

const ProjectCard = ({ index, description, name, tags, linklogo, image, source_code_link }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: 'black', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      iconStyle={{ background: '#383E56' }}
    >
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-contain rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, '_blank')} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={linklogo} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary mt-2 text-[24px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <VerticalTimeline>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </VerticalTimeline>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
