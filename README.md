# react-native-flying-objects

## DESCRIPTION

- Preview

  ![previewVedio](/demo/preview.gif)

  [preview "reaction button" code from my expo base project](https://github.com/CCC-org/keewe-app/blob/main/src/components/emoticons/ReactIconButton.tsx)

flying objects package for react native

## INSTALLATION

`npm install --save react-native-flying-objects`

## HOW TO USE

import react-native-flying-objects.

```js
import { FlyingView } from 'react-native-flying-objects';
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

  ![demoVedio](/demo/demo.gif)

  [Demo code in my github](https://github.com/ysh4296/react-native-flying-objects/blob/main/dev/App.tsx)

## PROPERTIES

### FlyIngView

| Property       | required | Type                                                              | Description                                         | DefaultValue                                            |
| -------------- | -------- | ----------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------- |
| chlidren       | true     | React.ReactNode                                                   | A template for creating a flying object.            | none                                                    |
| object         | true     | [ObjectConfig](#TYPES)                                            | list of objects managed by container.               | undefined                                               |
| containerProps | false    | [React-native.ViewProps](https://reactnative.dev/docs/view#props) | Props for the container in which the object floats. | `{pointerEvents:"none",style={{width:50,height:120}}} ` |

### ObjectConfig

| Property | required | Type                       | Description                                              | DefaultValue                                                                                      |
| -------- | -------- | -------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| right    | false    | [AnimatedPosition](#TYPES) | animated value for position right of object on container | `{fromValue: 0,toValue: 0,duration: 1200, delay: 0,}`                                             |
| top      | false    | [AnimatedPosition](#TYPES) | animated value for position top of object on container   | `{fromValue: 100,toValue: 35,duration: 1200,easing: Easing.bezier(0.5, 1.0, 0.5, 1.0),delay: 0,}` |
| show     | false    | [AnimatedOpacity](#TYPES)  | animated opacity value when object appears               | `{duration: 500,delay: 0,}`                                                                       |
| hide     | false    | [AnimatedOpacity](#TYPES)  | animated opacity value when object disappears            | `{duration: 500,delay: 0,}`                                                                       |

## TYPES

types for use FlyingView

```js
interface AnimatedOpacity {
  duration?: number;
  easing?: ((value: number) => number) | undefined;
  delay?: number;
}

interface AnimatedPosition {
  fromValue?: number;
  toValue?: number;
  duration?: number;
  easing?: ((value: number) => number) | undefined;
  delay?: number;
}

interface ObjectConfig {
  right?: AnimatedPosition;
  top?: AnimatedPosition;
  show?: AnimatedOpacity;
  hide?: AnimatedOpacity;
}

// easing from react-native
```

### REFERENCE DOCUMENTS

- [Easing](https://reactnative.dev/docs/easing)
