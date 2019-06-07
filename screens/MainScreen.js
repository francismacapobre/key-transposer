import React, { Component } from 'react';
import { 
    Image,
    View,
    Platform,
    Text 
} from 'react-native';
import icon from '../assets/icons/pure-icon.png'
import { STATUS_BAR_HEIGHT } from '../constants'

class MainScreen extends Component {
    static navigationOptions = () => ({
        title: 'Capo Keys',
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
            backgroundColor: '#2196F3'
        },
        headerTitleStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: 'white'
        },
        headerLeft: (
        <Image
            source={icon}
            style={styles.imageStyles}
        
        />
        )
    });

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ddd' }}>
                {/* Chord Modal */}

                {/* Content */}
            </View>
        );
    }
}

const styles = {
    imageStyles: {
        marginLeft: 10, 
        width: 40,
        height: 40
    }
}

export default MainScreen;