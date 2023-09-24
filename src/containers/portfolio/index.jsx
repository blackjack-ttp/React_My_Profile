/* eslint-disable no-unused-vars */
import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '@Components/pageHeaderContent';
import './styles.scss';

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="portfolio">
        <PageHeaderContent
          headerText="My Portfolio"
          icon={<BsInfoCircleFill size={40} />}
        />
      </section>
    </>
  );
};

export default Portfolio;
