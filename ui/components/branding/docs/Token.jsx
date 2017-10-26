// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';
import style from './Token.scss';

class Token extends Component {
  render() {
    let tokenValue;
    let { token, tokenSet = 'salesforce-skin' } = this.props;
    let tokenPath = require(`../../../../design-tokens/dist/${tokenSet}.json`);
    let set = JSON.stringify(tokenPath);
    JSON.parse(set, (key, value) => {
      if (key === token) {
        tokenValue = value;
      }
    });

    return (
      <div className="doc-token slds-media slds-media_center">
        <div className="slds-media__figure">
          <div className="doc-token__image">
            <div style={{ backgroundColor: tokenValue }} />
          </div>
        </div>
        <div className="slds-media__body">
          <p>
            <strong>Name:</strong>
            <span>{token}</span>
          </p>
          <p>
            <strong>Value:</strong>
            <span>{tokenValue}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Token;