import React from "react";
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import Helmet from 'react-helmet';

import ServicesListContainer from '../containers/ServicesListContainer';

export default () => (
  <div className="c-content-box">
    <Helmet title="That's my front-end developer toolbox" />

    <HeadlineWithFocus><span>These are the</span> services I provide</HeadlineWithFocus>
    <ServicesListContainer />
  </div>
);
