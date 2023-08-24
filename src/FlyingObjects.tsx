import React, { useRef, useState } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import { ObjectConfig } from './types';
interface FlyingObjectsProps {
  children: React.ReactNode;
  objectConfig: ObjectConfig;
}

const FlyingObjects = ({ children, objectConfig }: FlyingObjectsProps) => {
  const defaultConfig = {
    top: {
      fromValue: 100,
      toValue: 35,
      duration: 1200,
      easing: Easing.bezier(0.5, 1.0, 0.5, 1.0),
      delay: 0,
    },
    right: {
      fromValue: 0,
      toValue: 0,
      duration: 1200,
      easing: Easing.bezier(
        Math.floor(Math.random() * 10) / 10,
        Math.floor(Math.random() * 10) / 10 + 0.7,
        Math.floor(Math.random() * 10) / 10,
        Math.floor(Math.random() * 10) / 10 + 0.7,
      ),
      delay: 0,
    },
    show: {
      fromValue: 0,
      toValue: 1,
      duration: 500,
      delay: 0,
    },
    hide: {
      toValue: 0,
      duration: 500,
      delay: 0,
    },
  };

  const { top, right, show, hide } = objectConfig;

  const [animation, setAnimation] = useState<boolean>(true);
  const topValue = useRef(
    new Animated.Value(top?.fromValue ?? defaultConfig.top.fromValue),
  ).current;
  const rightValue = useRef(
    new Animated.Value(right?.fromValue ?? defaultConfig.right.fromValue),
  ).current;
  const opacityValue = useRef(
    new Animated.Value(show?.fromValue ?? defaultConfig.show.fromValue),
  ).current;

  if (animation) {
    Animated.timing(opacityValue, {
      toValue: show?.toValue ?? defaultConfig.show.toValue,
      duration: show?.duration ?? defaultConfig.show.duration,
      delay: show?.delay ?? defaultConfig.show.delay,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(opacityValue, {
        toValue: hide?.toValue ?? defaultConfig.hide.toValue,
        duration: hide?.duration,
        delay: hide?.delay ?? defaultConfig.hide.delay,
        useNativeDriver: false,
      }).start();
    });

    Animated.timing(topValue, {
      toValue: top?.toValue ?? defaultConfig.top.toValue,
      duration: top?.duration ?? defaultConfig.top.duration,
      easing: top?.easing ?? defaultConfig.top.easing,
      delay: top?.delay ?? defaultConfig.top.delay,
      useNativeDriver: false,
    }).start();

    Animated.timing(rightValue, {
      toValue: right?.toValue ?? defaultConfig.right.toValue,
      duration: right?.duration ?? defaultConfig.right.duration,
      easing: right?.easing ?? defaultConfig.right.easing,
      delay: right?.delay ?? defaultConfig.right.delay,
      useNativeDriver: false,
    }).start();

    setAnimation(false);
  }

  return (
    <Animated.View
      style={{ ...styles.object, top: topValue, right: rightValue, opacity: opacityValue }}
    >
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  object: {
    position: 'absolute',
  },
});

export default FlyingObjects;
