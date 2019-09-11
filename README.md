## react-native-popin-button

Button for React Native that pops-in/shrinks when you press it

### Installation

```bash
$ npm i react-native-popin-button --save
```


### Demo

![](https://i.imgur.com/bB3BQk7l.gif)

### Example

```jsx
import React from 'react'
import { Text, View } from 'react-native'
import PopinButton from 'react-native-popin-button'

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 30,
    borderRadius: 20
  },
  text: {
    color: '#fff',
    fontSize: 24
  }
}
const App = () => {
  return (
    <View style={styles.container}>
      <PopinButton onPress={() => alert('woohoo')} shrinkTo={0.8} style={styles.button}>
        <Text style={styles.text}>Woohoo</Text>
      </PopinButton>
    </View>
  );
};
export default App;
```

#### Properties

| Prop           |     Default     |   Type   | Description                                                                                                 |
| :------------- | :-------------: | :------: | :---------------------------------------------------------------------------------------------------------- |
| onPress     |      N/A       |  `function`  | Function to call when pressing button   |
| shrinkTo           |      `0.9`       |  `number`  | Size the button will scale down to                                                            |
| style          |        N/A        | `object`/`array` | Style of the button                                                                              |
| useNativeDriver   |      true      |  `bool`  | Use Native Driver for animation                                                               |
| afterAnimate       |      true      |  `bool`  | `True` will trigger button after animation `False` will trigger function on press out                                                                       |

## License

[MIT](LICENSE)