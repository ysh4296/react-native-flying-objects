export interface AnimatedOpacity {
  duration?: number;
  easing?: ((value: number) => number) | undefined;
  delay?: number;
}

export interface AnimatedPosition {
  fromValue?: number;
  toValue?: number;
  duration?: number;
  easing?: ((value: number) => number) | undefined;
  delay?: number;
}

export interface ObjectConfig {
  right?: AnimatedPosition;
  top?: AnimatedPosition;
  show?: AnimatedOpacity;
  hide?: AnimatedOpacity;
}
