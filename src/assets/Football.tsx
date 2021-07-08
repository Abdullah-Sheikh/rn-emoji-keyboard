import * as React from 'react';
import Svg, { FillProps, Path } from 'react-native-svg';

export default ({ fill }: FillProps) => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <Path
      d="M20.1618 5.23139C20.0401 4.45077 19.6743 3.72876 19.1168 3.16889C18.557 2.61145 17.8349 2.24563 17.0543 2.12389C15.0295 1.84483 12.9676 2.03813 11.03 2.68866C9.09235 3.3392 7.33154 4.42932 5.88537 5.87371C4.43921 7.3181 3.34692 9.07757 2.694 11.0144C2.04109 12.9513 1.84525 15.0129 2.12183 17.0381C2.24357 17.8187 2.60939 18.5407 3.16683 19.1006C3.7267 19.658 4.44871 20.0238 5.22933 20.1456C5.85974 20.248 6.49731 20.3002 7.136 20.3014C10.62 20.2766 13.9523 18.8725 16.4035 16.3964C17.8619 14.9607 18.962 13.2019 19.6149 11.2623C20.2678 9.32276 20.4551 7.25678 20.1618 5.23139ZM4.001 16.9739C3.97417 16.9023 3.95273 16.8287 3.93683 16.7539C3.68521 15.0138 3.84704 13.239 4.40922 11.5731C4.97141 9.90729 5.91813 8.39731 7.17266 7.16556C9.28273 5.03546 12.1495 3.82615 15.1477 3.80139C15.6881 3.79854 16.2278 3.84147 16.761 3.92972C16.8358 3.94562 16.9094 3.96707 16.981 3.99389L12.4618 8.52222L11.7927 7.85306C11.7074 7.76714 11.6061 7.69894 11.4944 7.65241C11.3827 7.60587 11.2628 7.58191 11.1418 7.58191C11.0208 7.58191 10.901 7.60587 10.7893 7.65241C10.6776 7.69894 10.5762 7.76714 10.491 7.85306C10.3203 8.02481 10.2244 8.25714 10.2244 8.49931C10.2244 8.74148 10.3203 8.97381 10.491 9.14556L11.1602 9.81472L9.82183 11.1347L9.15266 10.4656C8.98091 10.2948 8.74858 10.199 8.50641 10.199C8.26424 10.199 8.03191 10.2948 7.86016 10.4656C7.77425 10.5508 7.70605 10.6522 7.65951 10.7639C7.61298 10.8756 7.58902 10.9954 7.58902 11.1164C7.58902 11.2374 7.61298 11.3572 7.65951 11.4689C7.70605 11.5806 7.77425 11.682 7.86016 11.7672L8.52933 12.4364L4.001 16.9739ZM15.111 15.1406C13.8745 16.3868 12.3628 17.3254 10.6975 17.881C9.03219 18.4367 7.25974 18.5938 5.52266 18.3397C5.44784 18.3238 5.3743 18.3024 5.30266 18.2756L9.82183 13.7472L10.491 14.4164C10.5759 14.5019 10.6767 14.5698 10.7878 14.6163C10.899 14.6627 11.0181 14.6869 11.1386 14.6873C11.259 14.6877 11.3784 14.6644 11.4898 14.6187C11.6013 14.573 11.7026 14.5058 11.7881 14.421C11.8735 14.3361 11.9415 14.2352 11.988 14.1241C12.0344 14.013 12.0586 13.8938 12.059 13.7734C12.0594 13.6529 12.0361 13.5336 11.9904 13.4221C11.9447 13.3107 11.8775 13.2094 11.7927 13.1239L11.1418 12.4547L12.4618 11.1347L13.131 11.8039C13.2167 11.8888 13.3182 11.9561 13.4299 12.0017C13.5416 12.0473 13.6612 12.0704 13.7818 12.0697C13.9631 12.069 14.1401 12.0145 14.2904 11.9131C14.4408 11.8118 14.5576 11.6681 14.6263 11.5003C14.695 11.3326 14.7124 11.1482 14.6763 10.9705C14.6402 10.7929 14.5522 10.6299 14.4235 10.5022L13.7543 9.83306L18.2827 5.31389C18.3095 5.38553 18.3309 5.45906 18.3468 5.53389C18.5955 7.27105 18.4321 9.04233 17.87 10.7047C17.308 12.3671 16.3628 13.8741 15.111 15.1039V15.1406Z"
      fill={fill}
    />
  </Svg>
);
