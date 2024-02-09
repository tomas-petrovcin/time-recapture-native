import { Dimensions, Easing } from 'react-native';

import {
  type StackNavigationOptions,
  CardStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';

const { height } = Dimensions.get('window');

export const primaryScreenOptions: StackNavigationOptions = {
  headerShown: false,
  presentation: 'transparentModal',
  cardStyle: {
    backgroundColor: 'transparent',
  },
};

export const secondaryScreenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'black',
  },
};

// same as iOS default, but needs to be provided for android
export const stackTransition: StackNavigationOptions = {
  cardOverlayEnabled: true,
  cardStyle: { backgroundColor: 'black' },
  gestureEnabled: true,

  gestureDirection: 'horizontal', // TODO: IT MIGHT COLLIDE WITH ANDROID GESTURE
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export const bottomSheetTransition: StackNavigationOptions = {
  cardOverlayEnabled: true,
  cardShadowEnabled: true,
  gestureEnabled: true,
  gestureResponseDistance: height - 0,
  gestureVelocityImpact: 0.2,
  presentation: 'transparentModal',
  gestureDirection: 'vertical',
  cardStyle: {
    backgroundColor: 'transparent',
  },
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },

  cardStyleInterpolator: ({ current: { progress }, layouts }) => ({
    cardStyle: {
      transform: [
        {
          translateY: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.height, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.6],
        extrapolate: 'clamp',
      }),
    },
  }),
  // cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
};

export const fullscreenModalTransition: StackNavigationOptions = {
  cardOverlayEnabled: true,
  cardShadowEnabled: true,
  gestureEnabled: true,
  gestureResponseDistance: 0,
  gestureVelocityImpact: 0.2,
  presentation: 'transparentModal',
  cardStyle: {
    backgroundColor: 'black',
  },
  gestureDirection: 'vertical',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },

  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,

  // cardStyleInterpolator: ({ current: { progress }, layouts }) => ({
  //   cardStyle: {
  //     transform: [
  //       {
  //         translateY: progress.interpolate({
  //           inputRange: [0, 1],
  //           outputRange: [layouts.screen.height, 0],
  //           extrapolate: 'clamp',
  //         }),
  //       },
  //     ],
  //   },
  // }),
};

export const alertTransition: StackNavigationOptions = {
  cardOverlayEnabled: true,
  cardStyle: { backgroundColor: 'transparent' },
  presentation: 'transparentModal',
  gestureEnabled: false,
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: {
      animation: 'spring',
      config: {
        tension: 109,
        friction: 18,
        velocity: 2,
      },
    },
  },
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.6],
        extrapolate: 'clamp',
      }),
    },
  }),
};

export const instantOpenTransition: StackNavigationOptions = {
  presentation: 'modal',
  gestureEnabled: false,
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 0,
      },
    },
    close: TransitionSpecs.TransitionIOSSpec,
  },
};

export const replaceTransition: StackNavigationOptions = {
  animationTypeForReplace: 'pop',
  cardOverlayEnabled: true,
  presentation: 'modal',
  gestureEnabled: false,
  cardStyle: {
    backgroundColor: 'black',
  },
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        easing: Easing.inOut(Easing.ease),
      },
    },
    close: {
      animation: 'timing',
      config: {
        delay: 300,
        easing: Easing.inOut(Easing.ease),
      },
    },
  },
};
