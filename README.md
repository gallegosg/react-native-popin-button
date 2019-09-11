## react-native-popin-button

### Installation

```bash
$ npm i react-native-popin-button --save
```


### Example


```jsx
import React, { Component } from 'react'
import { Text, View } from 'react-native'

import PopinButton from 'react-native-popin-button'

export default class App extends Component {
	handlePress = () => {
		alert('woohoo')
	}

  render() {
    return (
      <View>
	      <PopinButton onPress={this.handlePress} shrinkTo={0.8} style={backgroundColor: 'red'}]}>
			<Text  style={{ color: '#fff' }]}>BEGIN</Text>
		  </PopinButton>
      </View>
    )
  }
}
```

#### Properties

| Prop           |     Default     |   Type   | Description                                                                                                 |
| :------------- | :-------------: | :------: | :---------------------------------------------------------------------------------------------------------- |
| onPress     |      N/A       |  `function`  | Function to call when pressing button   |
| shrinkTo           |      `0.9`       |  `number`  | Size the button will scale down to                                                            |
| style          |        N/A        | `object`/`array` | Style of the button                                                                              |
| useNativeDriver   |      true      |  `bool`  | Use Native Driver for animation                                                               |
| afterAnimate       |      true      |  `bool`  | `True` will trigger button after animation `False` will trigger function on press out                                                                       |
