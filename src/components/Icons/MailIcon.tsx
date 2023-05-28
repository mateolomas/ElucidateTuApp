import {Icon, Box} from 'native-base';
import React from 'react';
import {G, Path, Svg} from 'react-native-svg';

interface IconProps extends React.ComponentProps<typeof Icon> {
  width?: string;
  height?:  string;
  color?: string;
}

const MailIcon = (props: IconProps) => {
  return (
    <Box
      bg={'#0D6EFD'}
      width={6}
      height={6}
      alignSelf={'center'}
      alignItems={'center'}
      p={5}
      justifyContent={'center'}
      borderRadius={100}>
      <Icon width="44" height="44" viewBox="0 0 24 24" {...props}>
        <Path
          d="M1.125 9.62671V20.8767C1.125 21.2745 1.28304 21.6561 1.56434 21.9374C1.84564 22.2187 2.22718 22.3767 2.625 22.3767H21.375C21.7728 22.3767 22.1544 22.2187 22.4357 21.9374C22.717 21.6561 22.875 21.2745 22.875 20.8767V9.62671"
          stroke="#FFF"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.4375 7.66504C3.92968 8.1255 2.482 8.76374 1.125 9.56629V9.56629L11.1487 16.4775C11.3991 16.6501 11.696 16.7425 12 16.7425C12.304 16.7425 12.6009 16.6501 12.8513 16.4775L22.875 9.56629C21.518 8.76374 20.0703 8.1255 18.5625 7.66504"
          stroke="#FFF"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.4375 12.5396V2.73706C5.4375 2.43869 5.55603 2.15254 5.767 1.94157C5.97798 1.73059 6.26413 1.61206 6.5625 1.61206H17.4375C17.7359 1.61206 18.022 1.73059 18.233 1.94157C18.444 2.15254 18.5625 2.43869 18.5625 2.73706V12.5358L12.8513 16.4771C12.6009 16.6496 12.304 16.742 12 16.742C11.696 16.742 11.3991 16.6496 11.1487 16.4771L5.44125 12.5396"
          stroke="#FFF"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.5625 4.94629H8.4375"
          stroke="#FFF"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 10.7252H8.4375"
          stroke="#FFF"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.5625 7.83728H8.4375"
          stroke="#FFF"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.44227 15.3077L1.60852 21.9827"
          stroke="#FFF"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.5389 15.3077L22.3952 21.9827"
          stroke="#FFF"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Icon>
    </Box>
  );
};

export default MailIcon;
