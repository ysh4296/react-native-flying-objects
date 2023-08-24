import React from 'react';
import { View, ViewProps } from 'react-native';
import FlyingObjects from './FlyingObjects';

interface FlyingViewProps {
  children: React.ReactNode;
  object: ObjectConfig[];
  containerProps?: ViewProps;
}

export const FlyingView = ({ children, object, containerProps }: FlyingViewProps) => {
  return (
    <View
      pointerEvents="none"
      {...containerProps}
      style={[{ width: 50, height: 120 }, containerProps?.style]}
    >
      {object.map((object, index) => (
        <FlyingObjects key={index} objectConfig={object}>
          {children}
        </FlyingObjects>
      ))}
    </View>
  );
};
