/* eslint-disable no-unused-vars */
import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '@Components/pageHeaderContent';
import './styles.scss';

const Resume = () => {
  return (
    <>
      <section id="resume" className="resume">
        <PageHeaderContent
          headerText="My Resume"
          icon={<BsInfoCircleFill size={40} />}
        />
      </section>
    </>
  );
};

export default Resume;
