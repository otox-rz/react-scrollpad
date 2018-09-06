import React from 'react';
import {render} from 'react-dom';

import ScrollPad from '../../src';
import './demo-styles.css';

const ScrollPadTitle = '<ScrollPad/>';

const App = () => (
  <div>

    {/* yes, center still works and I am lazy */}

    <center>
      <h1><strong>{ ScrollPadTitle }</strong> - get scrollbar with padding (when overflown)</h1>
      <p>If container is overflown, I will pad the scrollbar to make it nicer</p>
    </center>

    <div className="page">

      <div className="wrapper">
        <h2>I am normal overflown element with scroll, no { ScrollPadTitle }</h2>
          <div>
            <p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p>
            <p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p>
            <p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p>
          </div>
      </div>

      <div className="wrapper">
        <h2>I wrapped with { ScrollPadTitle } and have enough elements to scroll</h2>
        <ScrollPad>
          <div>
            <p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p>
            <p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p>
            <p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p>
          </div>
        </ScrollPad>
      </div>

      <div className="wrapper">
        <h2>I wrapped with { ScrollPadTitle } but have only one element, no scroll</h2>
        <ScrollPad>
          <div>
            <p>No Scroll</p>
          </div>
        </ScrollPad>
      </div>

      <div className="wrapper" dir="rtl">
        <h2>I am <strong><abbr title="right-to-left">RTL</abbr></strong> with scroll</h2>
        <ScrollPad rtl>
          <div>
            <p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p>
            <p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p>
            <p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p><p>Scroll</p>
          </div>
        </ScrollPad>
      </div>

    </div>
  </div>
);

render(<App/>, document.getElementById("root"));
