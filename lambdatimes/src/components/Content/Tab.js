import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
 

      let kelli = '';

      if(props.tab === props.selectedTab) {
        kelli = 'tab active-tab';
      } else {
        kelli = "tab";
      };



  return (
    
    <div
      className={kelli}
      onClick={() => {

        const tab = props.tab;

        props.selectTabHandler(tab);
       
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};


Tab.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.array,
  tab: PropTypes.array,
}

export default Tab;
