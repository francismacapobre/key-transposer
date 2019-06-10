import React, { Component } from 'react';
import { 
    Image,
    View,
    Platform,
} from 'react-native';
import { Divider } from 'react-native-elements'
import KeysButtons from '../components/KeysButtons'
import CapoButtons from '../components/CapoButtons'
import CapoKey from '../components/CapoKey';
import ViewChordsButton from '../components/ViewChordsButton';
import icon from '../assets/icons/pure-icon.png'
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../constants'

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
        const { containerStyle, dividerStyle, buttonContainerStyle } = styles;

        return (
            <View style={{ flex: 1, backgroundColor: '#ddd' }}>
                {/* ChordModal */}
                
                <View style={containerStyle}>
                    <KeysButtons />
                    <Divider style={dividerStyle} />
                    <CapoButtons />
                    <Divider style={dividerStyle} />
                    <CapoKey />
                </View>

                <ViewChordsButton style={buttonContainerStyle}/>

                {/* ButtomBannerAd */}

            </View>
        );
    }
}

const styles = {
    imageStyles: {
        marginLeft: 10, 
        width: 40,
        height: 40
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    dividerStyle: {
        width: SCREEN_WIDTH * 0.9,
        backgroundColor: '#2196F3'
    },
    buttonContainerStyle: {
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    }
};

export default MainScreen;