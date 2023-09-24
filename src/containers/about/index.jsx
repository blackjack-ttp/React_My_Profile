/* eslint-disable no-unused-vars */
import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import PageHeaderContent from '@Components/pageHeaderContent';
import {
  DiGithubBadge,
  DiDatabase,
  DiNodejs,
  DiReact,
  DiMongodb,
} from 'react-icons/di';
import { FaDev, FaNodeJs } from 'react-icons/fa';
import './styles.scss';

const personalDetail = [
  {
    lable: 'Name',
    value: 'TRAN THANH PHONG',
  },
  {
    lable: 'Age',
    value: '25',
  },
  {
    lable: 'Address',
    value: 'Vietnam',
  },
  {
    lable: 'Email',
    value: 'phongtt120298@outlook.com',
  },
  {
    lable: 'Contact No',
    value: '+84 392769597',
  },
];

const jobSummary =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <PageHeaderContent
          headerText="About Me"
          icon={<BsInfoCircleFill size={40} />}
        />
        <div className="about__content">
          <div className="about__content__personalWarpper">
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{ transform: 'translateX(-900px)' }}
              end={{ transform: 'translateX(0px)' }}
            >
              <h3 className="personalInformationHeaderText">
                Front End Developer
              </h3>
              <p>{jobSummary}</p>
            </Animate>
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{ transform: 'translateX(-900px)' }}
              end={{ transform: 'translateX(0px)' }}
            >
              <h3 className="personalInformationHeaderText">
                Back End Developer
              </h3>
              <p>{jobSummary}</p>
            </Animate>
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{ transform: 'translateX(500px)' }}
              end={{ transform: 'translateX(0px)' }}
            >
              <h3 className="personalInformationHeaderText">
                Presonal Information
              </h3>
              <ul>
                {personalDetail.map((item, index) => (
                  <li key={index}>
                    <span className="title">{item.lable}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </Animate>
          </div>
          <div className="about__content__servicesWarpper">
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{ transform: 'translateX(600px)' }}
              end={{ transform: 'translateX(0px)' }}
            >
              <div className="about__content__servicesWarpper__innerContent">
                <div>
                  <FaDev size={60} color="var(--yellow-theme-main-color)" />
                </div>
                <div>
                  <DiReact size={60} color="var(--yellow-theme-main-color)" />
                </div>
                <div>
                  <DiDatabase
                    size={60}
                    color="var(--yellow-theme-main-color)"
                  />
                </div>
                <div>
                  <FaNodeJs size={60} color="var(--yellow-theme-main-color)" />
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
