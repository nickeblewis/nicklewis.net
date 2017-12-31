import React from "react";

import HeadlineWithFocus from "../components/HeadlineWithFocus";

const Index = props => {
  return (
    <div className="c-content-box">
      <h2>Nick Lewis</h2>
      <HeadlineWithFocus
        modifierClassNames={`
          c-headline-focus
          c-headline-focus--super-big
        `}
      >
        Freelance Web Developer
      </HeadlineWithFocus>
      <h2
        className={`
          js-action-button-anchor
          c-content-box__subheadline
          c-content-box__subheadline--with-button
        `}
      >
        Here's what I can do for you
      </h2>
    </div>
  );
};

export default Index;
