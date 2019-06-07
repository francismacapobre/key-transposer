import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';

class KeysButtons extends Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: 1
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }

    render() {
        const buttons = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        const { selectedIndex } = this.state

        return (
            <View
                style={{ 
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text h3>
                    Key
                </Text>
                <Text h1 style={{ marginBottom: 2 }}>
                    C
                </Text>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 40}}
                    selectedTextStyle={{ color: 'orange', fontWeight: '900'}}
                    
                />
                
    

            </View>
        );
    }
}

export default KeysButtons;