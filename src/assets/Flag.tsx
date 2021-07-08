import * as React from 'react';
import Svg, { FillProps, Path } from 'react-native-svg';

export default ({ fill }: FillProps) => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 2.9C3 2.40294 3.40294 2 3.9 2H11.4C11.6393 2 11.8688 2.09531 12.0376 2.26485L13.6488 3.88235H18.9C19.3971 3.88235 19.8 4.2853 19.8 4.78235V15.1353C19.8 15.6323 19.3971 16.0353 18.9 16.0353H13.275C13.0357 16.0353 12.8062 15.94 12.6374 15.7704L11.0262 14.1529H4.8V18.9C4.8 19.3971 4.39706 19.8 3.9 19.8C3.40294 19.8 3 19.3971 3 18.9V2.9ZM4.8 12.3529H11.4C11.6393 12.3529 11.8688 12.4482 12.0376 12.6178L13.6488 14.2353H18V5.68235H13.275C13.0357 5.68235 12.8062 5.58705 12.6374 5.4175L11.0262 3.8H4.8V12.3529Z"
      fill={fill}
    />
  </Svg>
);
