import React from 'react';
import { View, ViewProps } from 'react-native';
import FlyingObjects from './FlyingObjects';

interface FlyingViewProps {
  children: React.ReactNode;
  object: AnimatedObject[];
  objectConfig: ObjectConfig;
  containerProps?: ViewProps;
}

const FlyingView = ({ children, object, objectConfig, containerProps }: FlyingViewProps) => {
  return (
    <View
      pointerEvents="none"
      {...containerProps}
      style={[{ width: 50, height: 120 }, containerProps?.style]}
    >
      {object.map((item, index) => (
        <FlyingObjects key={index} objectConfig={objectConfig}>
          {children}
        </FlyingObjects>
      ))}
    </View>
  );
};

export default FlyingView;
