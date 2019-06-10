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
          this.props.UpdateOpenTab(this.props.openTab);
        }
      }
    }

    // if (this.props.openTab !== nextProps.openTab) {
    // this.potentialAdd(nextProps.openTab);
    // }
  }

  removeTab = e => {
    let newDisplayedTabList = [...this.state.displayedTabList];
    newDisplayedTabList = _.filter(newDisplayedTabList, toBeRemoved => {
      return e !== toBeRemoved; //returns everything that isn't our tab
    });
    this.setState({ displayedTabList: newDisplayedTabList });
    this.props.UpdateOpenTab(newDisplayedTabList[0]);
  };

  displayTab = tab_name => {
    if (this.props.openTab !== tab_name) {
      this.props.UpdateOpenTab(tab_name);
    }
  };

  render() {
    return (
      <div className={"tabContainer"}>
        {_.map(this.state.displayedTabList, tab_item => {
          if (tab_item === this.props.openTab) {
            return (
              <div className={"tab openTab"} key={tab_item}>
                <button
                  onClick={() => this.displayTab(tab_item)}
                  className={"tabText text_only_button"}
                >
                  {tab_item}
                </button>
                <button
                  className={"tabCloseButton text_only_button"}
                  onClick={() => this.removeTab(tab_item)}
                >
                  X
                </button>
              </div>
            );
          } else {
            return (
              <div className={"tab"} key={tab_item}>
                <button
                  onClick={() => this.displayTab(tab_item)}
                  className={"tabText text_only_button"}
                >
                  {tab_item}
                </button>
                <button
                  className={"tabCloseButton text_only_button"}
                  onClick={() => this.removeTab(tab_item)}
                >
                  X
                </button>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Tab;
