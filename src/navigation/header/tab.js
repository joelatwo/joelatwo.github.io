import React, { Component } from "react";
import _ from "lodash";

import "./tab.css";

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedTabList: ["Home"]
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      if (this.props.openTab !== prevProps.openTab) {
        let isContained = _.find(this.state.displayedTabList, tab => {
          return this.props.openTab === tab;
        });

        if (isContained === undefined) {
          // if it isn't in the list add it
          let newDisplayedTabList = [...this.state.displayedTabList];
          newDisplayedTabList.push(this.props.openTab);
          this.setState({ displayedTabList: newDisplayedTabList });
          this.props.updateopenTab(this.props.openTab);
        }
      }
    }

    // if (this.props.openTab !== nextProps.openTab) {
    //   this.potentialAdd(nextProps.openTab);
    // }
  }

  removeTab = e => {
    let newDisplayedTabList = [...this.state.displayedTabList];
    newDisplayedTabList = _.filter(newDisplayedTabList, toBeRemoved => {
      return e !== toBeRemoved; //returns everything that isn't our tab
    });
    this.setState({ displayedTabList: newDisplayedTabList });
    this.props.updateopenTab(newDisplayedTabList[0]);
  };

  render() {
    return (
      <div className={"tab"}>
        {_.map(this.state.displayedTabList, tab_item => (
          <div className={"tabLinks"} key={tab_item}>
            <button
              className={"align-center tab-button-title text_only_button"}
            >
              {tab_item}
            </button>
            <button
              className={"align-right tab-button-close text_only_button"}
              onClick={() => this.removeTab(tab_item)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Tab;
