import React from 'react';
import { View, ViewProps } from 'react-native';
import FlyingObjects from './FlyingObjects';
import { ObjectConfig } from './index';

interface FlyingViewProps {
  object: ObjectConfig[];
  containerProps?: ViewProps;
}

const FlyingView = ({ object, containerProps }: FlyingViewProps) => {
  let id = 1;
  return (
    <View
      pointerEvents="none"
      {...containerProps}
      style={[{ width: 50, height: 120 }, containerProps?.style]}
    >
      {object.map((object) => (
        <FlyingObjects key={id++} objectConfig={object} />
      ))}
    </View>
  );
};

export default FlyingView;
