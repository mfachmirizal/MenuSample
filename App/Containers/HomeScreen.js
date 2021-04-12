import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, View, Left, Right, Body, Icon, Text } from 'native-base';
import { MenuProvider, Menu, MenuOption, MenuOptions, MenuTrigger, renderers } from 'react-native-popup-menu'
import { Metrics } from '../Themes'

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        {/* MenuProvider bisa di taruh juga di RootContainer.js, ini hanya contoh */}
        <MenuProvider>
          <Header noLeft>
            <Left />
            <Body>
              <Title>Header</Title>
            </Body>
            <Right>
              <Menu
                onSelect={value => {
                  alert(value)
                }}
                renderer={renderers.Popover}
              >
                <MenuTrigger>
                  <View>
                    <Icon style={{ color: 'white'}} type="MaterialIcons" name="more-vert" />
                  </View>
                </MenuTrigger>
                <MenuOptions style={{width : Metrics.screenWidth / 3, paddingHorizontal : Metrics.screenWidth / 100,}}> 
                  <MenuOption value={'Ini Menu 1'} style={{flexDirection:'row'}}> 
                    <Text style={{fontSize: 11}}>Menu 1</Text>
                  </MenuOption> 
                  <MenuOption value={'Ini Menu 2'} style={{flexDirection:'row'}}> 
                    <Text style={{fontSize: 11}}>Menu 2</Text>
                  </MenuOption> 
                  <MenuOption value={'Ini Menu 3'} style={{flexDirection:'row'}}> 
                    <Text style={{fontSize: 11}}>Menu 3</Text>
                  </MenuOption> 
                  <MenuOption value={'Ini Menu 4'} style={{flexDirection:'row'}}> 
                    <Icon style={{ color: 'gray', fontSize: 19}} name="md-logo-github" />
                  </MenuOption> 
                  <MenuOption value={'Ini Menu 5'}  style={{flexDirection:'row', alignItems: 'center'}}> 
                    <Icon style={{ color: 'red', marginRight: 5, fontSize: 19}} name="ios-git-commit" />
                    <Text style={{ fontSize: 11 }}>Menu 5 dgn icon</Text>
                  </MenuOption> 
                </MenuOptions>
              </Menu>
            </Right>
          </Header>
          <Content>
            <Text>
            This is Content Section
            </Text>
          </Content>
          {/* <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer> */}
        </MenuProvider>
      </Container>
      
    );
  }
}