import FlyingView from './FlyingView';

export { FlyingView };

interface AnimatedPosition {
  fromValue?: number;
  toValue?: number;
  duration?: number;
  easing?: ((value: number) => number) | undefined;
  delay?: number;
}

interface AnimatedOpacity {
  duration?: number;
  easing?: ((value: number) => number) | undefined;
  delay?: number;
}

export interface ObjectConfig {
  object: React.ReactNode;
  right?: AnimatedPosition;
  top?: AnimatedPosition;
  show?: AnimatedOpacity;
  hide?: AnimatedOpacity;
}
