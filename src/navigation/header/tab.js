import React, { Component } from 'react';
import _ from "lodash"

import "./tab.css"

class Tab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayedTabList: ["Home", "second", "testing"
            ],
            value: "second"
        }

    }
    potentialAdd = () => {
        let isContained = _.find(this.state.displayedTabList, (item) => {
            return (this.state.value === item)
        })
        if (isContained === undefined) {
            // if it isn't in the list add it
            let newDisplayedTabList = [...this.state.displayedTabList]
            newDisplayedTabList.push(this.state.value)
            this.setState({ displayedTabList: newDisplayedTabList })
        }
    }

    removeTab = (e) => {
        let newDisplayedTabList = [...this.state.displayedTabList]
        newDisplayedTabList = _.filter(newDisplayedTabList, toBeRemoved => {
            return (e !== toBeRemoved) //returns everything that isn't our tab
        })

        console.log(newDisplayedTabList)
        this.setState({ displayedTabList: newDisplayedTabList })
    }

    render() {
        return (
            <div className={"tab"}>
                {_.map(this.state.displayedTabList, (tab_item) =>
                    <div className={"tabLinks"} key={tab_item}>
                        <button >{tab_item}</button>
                        <button onClick={() => this.removeTab(tab_item)}>X</button>
                    </div>

                )
                }

                <input type="text" value={this.state.value} onChange={(event) => { this.setState({ value: event.target.value }) }} />
                <button onClick={() => this.potentialAdd()} >Add</button>
            </div>



        );
    }
}

export default Tab;