import React, { Component } from 'react'

export class StingerMouldSprawl extends Component {
  render() {
    const territoryClassName = 'territory-' + this.constructor.name;
    return (
      <div className={territoryClassName} >
        <h3 className="title">{this.constructor.name}</h3>
        <svg width="238px" height="191px" className={territoryClassName} data-track="escher" >
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-51" transform="translate(-999.000000, -27.000000)" fill="#FFFFFF">
                  <polygon id="Fill-45" points="1054.8135 217.1263 999.5165 163.2593 1005.4735 87.5403 1156.7655 27.8203 1236.1735 179.6783 1100.9075 179.6783 1065.4595 217.1263"></polygon>
              </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default StingerMouldSprawl