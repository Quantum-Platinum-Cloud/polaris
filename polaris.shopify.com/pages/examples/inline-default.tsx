import React from 'react';
import {Inline} from '@shopify/polaris';

import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function InlineExample() {
  return (
    <Inline>
      <Placeholder width="106px" height="36px" />
      <Placeholder width="106px" height="20px" />
      <Placeholder width="106px" height="20px" />
      <Placeholder width="106px" height="20px" />
      <Placeholder width="106px" height="20px" />
      <Placeholder width="106px" height="20px" />
    </Inline>
  );
}

const Placeholder = ({height = 'auto', width = 'auto'}) => {
  return (
    <div
      style={{
        background: '#7B47F1',
        height: height,
        width: width,
      }}
    />
  );
};

export default withPolarisExample(InlineExample);
