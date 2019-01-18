import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>

        {props.tabs.map((h, k) => (
          
          <Tab 
          key = {k} 
          tab ={h} 
          selectTabHandler ={props.selectTabHandler} 
          selectedTab ={props.selectedTab} />
        ))}
        
      </div>
    </div>
  );
};

Tab.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.array,
  tab: PropTypes.array,
};

export default Tabs;
