# react-native-flying-objects

flying objects package for react native

## INSTALLATION

`npm install --save react-native-flying-objects`

## HOW TO USE

import react-native-flying-objects.

```js
import FlyingView from 'react-native-flying-objects';
```

add properties for modify FlyingView.

- manage state for flying objects

  ```js
  const [object, setObject] = useState<ObjectConfig[]>([]);
  // manage every rendering objects
  ```

- when you want to add object just add more state

  ```js
  setObject((prev) => [...prev, newObject]);
  // the new object added
  ```

- add FlyingView where you want to use.

  ```js
  return (
    <FlyingView
      object={object}
      containerProps={{ style: { borderWidth: 2, borderColor: 'black' } }}
    >
      <Text>hello</Text>
    </FlyingView>
  );
  // text "hello" will be the object that flying
  ```

- result

![demoVedio](/demo/testCodeDemo.gif)

## PROPERTIES

### FlyIngView

| Property       | required | Type                   | Description                                         | DefaultValue                                            |
| -------------- | -------- | ---------------------- | --------------------------------------------------- | ------------------------------------------------------- |
| chlidren       | true     | React.ReactNode        | A template for creating a flying object.            | none                                                    |  |
| object         | true     | ObjectConfig           | list of objects managed by container.               | undefined                                               |  |
| containerProps | false    | React-native.ViewProps | Props for the container in which the object floats. | `{pointerEvents:"none",style={{width:50,height:120}}} ` |  |

### ObjectConfig

| Property | required | Type           | Description                                              | DefaultValue                                                                                                                                                                                                                             |
| -------- | -------- | -------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| right    | false    | AnimatedObject | animated value for position right of object on container | `{fromValue: 0,toValue: 0,duration: 1200,easing: Easing.bezier(Math.floor(Math.random() * 10) / 10,Math.floor(Math.random() * 10) / 10 + 0.7,Math.floor(Math.random() * 10) / 10,Math.floor(Math.random() * 10) / 10 + 0.7,),delay: 0,}` |
| top      | false    | AnimatedObject | animated value for position top of object on container   | `{fromValue: 100,toValue: 35,duration: 1200,easing: Easing.bezier(0.5, 1.0, 0.5, 1.0),delay: 0,}`                                                                                                                                        |
| show     | false    | AnimatedObject | animated opacity value when object appears               | `{fromValue: 0,toValue: 1,duration: 500,delay: 0,}`                                                                                                                                                                                      |
| hide     | false    | AnimatedObject | animated opacity value when object disappears            | `hide: {toValue: 0,duration: 500,delay: 0,}`                                                                                                                                                                                             |

## TYPES

types for use FlyingView

```js
interface AnimatedObject {
  fromValue?: number; // starting Value
  toValue?: number; // finish value
  duration?: number; // animate time
  easing?: ((value: number) => number) | undefined; // Type of Animated.View.easing
  delay?: number; // waiting time
}

interface ObjectConfig {
  right?: AnimatedObject;
  top?: AnimatedObject;
  show?: AnimatedObject;
  hide?: AnimatedObject;
}
```
