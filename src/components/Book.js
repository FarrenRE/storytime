import React, { useState } from 'react';
import '../styles/Book.scss';
import '../styles/Page.scss';
import FlipPage from 'react-flip-page';

import {front as page1Front} from './pages/1.js';
import {back as page1Back} from './pages/1.js';
import {front as page2Front} from './pages/2.js';
import {back as page2Back} from './pages/2.js';
import {front as page3Front} from './pages/3.js';
import {back as page3Back} from './pages/3.js';

export default function Book() {
  // const pages = [
  //   {
  //     left: page1Front,
  //     right: page1Back
  //   }
  // ];
  return (
    <div className="Book">
        <FlipPage
          orientation="horizontal"
          uncutPages="true"
          responsive="true"
          perspective="300em"
        >
          <div className="spread">
            <div className="leaf leaf--left">
              {page1Front()}
              <span className="page-number">1</span>
            </div>
            <div className="leaf leaf--right">
              {page1Back()}
              <span className="page-number">2</span>
            </div>
          </div>
          <div className="spread">
            <div className="leaf leaf--left">
              {page2Front()}
              <span className="page-number">3</span>
            </div>
            <div className="leaf leaf--right">
              {page2Back()}
              <span className="page-number">4</span>
            </div>
          </div>
          <div className="spread">
            <div className="leaf leaf--left">
              {page3Front()}
              <span className="page-number">5</span>
            </div>
            <div className="leaf leaf--right">
              {page3Back()}
              <span className="page-number">6</span>
            </div>
          </div>
        </FlipPage>
    </div>
  );
}
