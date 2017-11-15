import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import LoginScreen from './LoginScreen';
import Drawer from 'react-native-drawer';
import HamburgerMenu from './Common/HamburgerMenu';
import Hamburger from './Common/Hamburger';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => {
        const params = navigation.state.params || {};
        return {
            headerLeft:  params.headerLeft,
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            password: '',
            session_key: '',
            active: false
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.logout = this.logout.bind(this);
        this._getSessionKey = this._getSessionKey.bind(this);
        this._doNothing = this._doNothing.bind(this);
        this.provider = this.provider.bind(this);
        this.requester = this.requester.bind(this);
        this._setNavigationParams = this._setNavigationParams.bind(this);
    }
    logout() {
        this.setState({session_key: ''});
        this.props.navigation.navigate('Login');
    }
    _getSessionKey() {
        console.log("test");
        //TODO: get key from storage somehow
        if (this.props.navigation.state.params) {
            this.setState({session_key: this.props.navigation.state.params.session_key});
        }
        else {
            console.log("empty")
        }
    }
    toggleDrawer = () => {
        if (!this._drawer._open) {
            this._drawer.open();
        }
        else {
            this._drawer.close();
        }
        //this.props.navigation.state.params.headerLeft.type._animate();
    };
    _doNothing() {
        //put here so react can stop bitching
    }
    provider() {
        //TODO: load nearby requests screen
    }
    requester() {
        this.props.navigation.navigate('MakeRequest')
    }

    _setNavigationParams() {
        let headerLeft = 
        <Hamburger
            type='arrow'
            
            //style={styles.button}
            onPress={()=>{this.toggleDrawer()}}
        />;
        this.props.navigation.setParams({ 
          headerLeft,
        });
    }

    componentWillMount() {
        this._setNavigationParams();
      }

    render() {
        const drawerStyles = {
            drawer: { backgroundColor: '#000000',
                shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
            main: {paddingLeft: 3},
        }
        const { navigate } = this.props.navigation;
        //TODO: either create a splash screen to navigate
        //to the loginscreen/homescreen or navigate from homescreen
        //to loginscreen (prefer splash screen)

        // !this.state.session_key && this._getSessionKey();
        // if (!this.state.session_key) {
        //     navigate('LoginScreen');
        // }
        return (
                <Drawer type='overlay'
                    content={<HamburgerMenu 
                        logout={() => {
                            this.logout();
                        }}
                        />}
                    ref={(ref) => this._drawer = ref}
                    openDrawerOffset={0.6}
                    style={drawerStyles}
                    tapToClose={true}
                    acceptPan={true}
                    panCloseMask={0.6}
                    panOpenMask={0}>
                    <View style={styles.container}>
                        <Text>I am a...</Text>
                        <Button onPress={this.provider}
                            title='Provider' />
                        <Button onPress={this.requester}
                            title='Requester' />
                    </View>
                </Drawer>
        );
    
    }
}

const styles = StyleSheet.create({
    title: {
      fontSize: 40,
      color: 'red'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        alignItems: 'flex-start',
    }
  });