import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { TopicHeadline } from '../design-components/TopicHeadline'
import { TextContainer } from '../design-components/TextContainer.js';
import TextLineBreak from '../functional-components/TextLineBreak.js';

import { MenuItems } from '../navbar-with-dropdown/MenuItems';

export default function Service1() {

  let serviceNumber = 1;
  serviceNumber--; //get Index for Array
  useEffect(() => {
    window.scrollTo(0, 0)
  },
    [])


  return (
    <>
      <section id='service1'>
        <div className="belowNavbar"></div>

        <h4 className="breadcrumb">
          <Link to='/#service' className="breadcrumb" >
            Leistungen
            <svg class="w-3 h-3 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
          <span className="opacity-80">
            {MenuItems[serviceNumber].title}
          </span>
        </h4>

        <div className="card-bg-responsive">
          <div className="spacing-content service-container">
            <div className="service-img-container">
              <img className="service-img" src={MenuItems[serviceNumber].image}></img>
            </div>
            <div className="service-text-container">
              <TextContainer
                title={MenuItems[serviceNumber].title}
                content={
                  <TextLineBreak
                    text={MenuItems[serviceNumber].text} />
                }
              />
            </div>
          </div>
        </div>
      </section >
    </>
  );
}
