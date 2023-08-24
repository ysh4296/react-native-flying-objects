export interface AnimatedObject {
  fromValue?: number;
  toValue?: number;
  duration?: number;
  easing?: ((value: number) => number) | undefined;
  delay?: number;
}

export interface ObjectConfig {
  right?: AnimatedObject;
  top?: AnimatedObject;
  show?: AnimatedObject;
  hide?: AnimatedObject;
}
