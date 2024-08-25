import React, { useState } from 'react';
import { View, Text, TextInput, Image, Switch, StyleSheet, ScrollView, ImageBackground, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const { height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const UserScreen = () => <View><Text>User Screen</Text></View>;
const ControlScreen = () => <View><Text>Control Screen</Text></View>;
const AutomationScreen = () => <View><Text>Automation Screen</Text></View>;
const OwnersScreen = () => <View><Text>Owners Screen</Text></View>;

const HomeAutomationControl = () => {
  const [isAirConditionOn, setAirConditionOn] = useState(true);
  const [isLightOn, setLightOn] = useState(false);
  const [isAirPurifierOn, setAirPurifierOn] = useState(false);
  const [isDryerOn, setDryerOn] = useState(true);
  const [activeTab, setActiveTab] = useState(null);
  
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  };

  const handlePress = (tabName) => {
    setActiveTab(tabName);
  };

  const handleAddDevicePress = () => {
  navigation.navigate('ControlAddDevice');
};

  const date = new Date();

  return (
    <>
      <ScrollView style={styles.container}>
        <ImageBackground 
          source={{ uri: 'https://cdn.glitch.global/e95dc807-4f61-453c-a5e3-93f2903db206/small%20BG%20(1).png?v=1724121352528' }} 
          style={styles.backgroundImage}
        >
          <View style={[styles.header,{ top: 30 }]}>
            <View style={styles.headerItem}>
              <Image 
                source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/sun%201.png?v=1723971975457' }} 
                style={styles.headerIcon} 
              />
              <Text style={styles.headerText}></Text>
            </View>
            
            <View style={styles.headerItem}>
              <Image 
                source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/humidity%201.png?v=1723971957461' }} 
                style={styles.headerIcon} 
              />
              <Text style={styles.headerText}></Text>
            </View>
            
            <View style={styles.headerItem}>
              <Image
                source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/calendar%201.png?v=1723971861159' }}
                style={styles.headerIcon}
              />
              <Text style={styles.headerText}>{formatDate(date)}</Text>
            </View>
          </View>
          
          <View style={[styles.greetingContainer,{ top: 30 }]}>
            <Text style={styles.greetingText}>Control</Text>
          </View>

          <View style={[styles.searchContainer,{ top: 35 }]}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
            />
          </View>
          
          <Text style={[styles.welcomeText,{ top: 40 }]}>Welcome to "Smart Living"! Take control as you begin your seamless journey of home automation</Text>
          
          <TouchableOpacity style={[styles.addButton,{top:20}]} onPress={handleAddDevicePress}>
            <Image 
              source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/Icon.png?v=1724122137830' }} 
              style={styles.addButtonIcon} 
            />
            <Text style={styles.addButtonText}>Add device</Text>
          </TouchableOpacity>

        </ImageBackground>

        <View style={[styles.tabContainer,{ top: 30 }]}>
          <TouchableOpacity 
            style={styles.tabItem} 
            activeOpacity={0.7} 
            onPress={() => handlePress('My home')}
          >
            <Text style={[styles.tabText, activeTab === 'My home' && styles.activeTabText]}>My home</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.tabItem} 
            activeOpacity={0.7} 
            onPress={() => handlePress('Kitchen')}
          >
            <Text style={[styles.tabText, activeTab === 'Kitchen' && styles.activeTabText]}>Kitchen</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.tabItem} 
            activeOpacity={0.7} 
            onPress={() => handlePress('Bathroom')}
          >
            <Text style={[styles.tabText, activeTab === 'Bathroom' && styles.activeTabText]}>Bathroom</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.tabItem} 
            activeOpacity={0.7} 
            onPress={() => handlePress('Living room')}
          >
            <Text style={[styles.tabText, activeTab === 'Living room' && styles.activeTabText]}>Living room</Text>
          </TouchableOpacity>
        </View>
        
        <View style={[styles.deviceContainer,{ top: 40 }]}>
          <View style={styles.deviceCard}>
            <Image source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/Group.png?v=1724123021439' }} style={styles.deviceImage} />
            <Text style={styles.deviceText}>Air condition</Text>
            <Text style={styles.roomText}>A Bedroom</Text>
            <Switch
              value={isAirConditionOn}
              onValueChange={setAirConditionOn}
            />
          </View>

          <View style={styles.deviceCard}>
            <Image source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/light.png?v=1724123146398' }} style={styles.deviceImage} />
            <Text style={styles.deviceText}>Light</Text>
            <Text style={styles.roomText}>1 devices</Text>
            <Switch
              value={isLightOn}
              onValueChange={setLightOn}
            />
          </View>

          <View style={styles.deviceCard}>
            <Image source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/Group%20(1).png?v=1724123170527' }} style={styles.deviceImage} />
            <Text style={styles.deviceText}>Air purifier</Text>
            <Text style={styles.roomText}>4 devices</Text>
            <Switch
              value={isAirPurifierOn}
              onValueChange={setAirPurifierOn}
            />
          </View>

          <View style={styles.deviceCard}>
            <Image source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/Group%20(2).png?v=1724123172651' }} style={styles.deviceImage} />
            <Text style={styles.deviceText}>Dryer</Text>
            <Text style={styles.roomText}>C Bedroom</Text>
            <Switch
              value={isDryerOn}
              onValueChange={setDryerOn}
            />
          </View>
        </View>
      </ScrollView>
      <NavigationContainer>
        <View style={styles.navigationContainer}>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: { backgroundColor: 'white', borderTopWidth: 1, borderColor: '#ccc' },
              tabBarLabelStyle: { fontSize: 12 },
            }}
          >
            <Tab.Screen
              name=""
              component={UserScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Image
                    source={{ uri: 'https://cdn.glitch.global/e95dc807-4f61-453c-a5e3-93f2903db206/user.png?v=1724104042351' }}
                    style={{ width: size, height: size, tintColor: color }}
                  />
                ),
                tabBarLabel: 'Home',
              }}
            />
            <Tab.Screen
              name="."
              component={ControlScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Image
                    source={{ uri: 'https://cdn.glitch.global/e95dc807-4f61-453c-a5e3-93f2903db206/3.png?v=1724104097169' }}
                    style={{ width: size, height: size, tintColor: color }}
                  />
                ),
                tabBarLabel: 'Control',
              }}
            />
            <Tab.Screen
              name=".."
              component={AutomationScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Image
                    source={{ uri: 'https://cdn.glitch.global/e95dc807-4f61-453c-a5e3-93f2903db206/horizontal.png?v=1724104103128' }}
                    style={{ width: size, height: size, tintColor: color }}
                  />
                ),
                tabBarLabel: 'Automation',
              }}
            />
            <Tab.Screen
              name="..."
              component={OwnersScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Image
                    source={{ uri: 'https://cdn.glitch.global/e95dc807-4f61-453c-a5e3-93f2903db206/user.png?v=1724104042351' }}
                    style={{ width: size, height: size, tintColor: color }}
                  />
                ),
                tabBarLabel: 'Owners',
              }}
            />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  backgroundImage: {
    height: height / 3,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  headerText: {
    fontSize: 16,
    color: '#fff', // Ensure text is readable on the background
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greetingContainer: {
    marginVertical: 10,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchContainer: {
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  welcomeText: {
    marginBottom: 10,
    fontSize: 14,
    color: '#fff', // Ensure text is readable on the background
  },
  addButton: {
    backgroundColor: '#fefcfa',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',  // Arrange icon and text in a row
    alignItems: 'center',  // Center align the icon and text vertically
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 100,
    marginTop: 40,
    width: 120,
    height: 35 
  },
  addButtonIcon: {
    width: 15,  // Adjust size as needed
    height: 15, // Adjust size as needed
    marginRight: 5, // Space between the icon and text
  },
  addButtonText: {
    color: 'black',  // Corrected the color property
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabItem: {
    backgroundColor: '#fefcfa',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  tabText: {
    fontSize: 16,
    color: 'black', // Default color when not pressed
  },
  activeTabText: {
    color: '#007bff', // Color when tab is pressed
  },
  deviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  deviceCard: {
    backgroundColor: '#ffffff',
    width: '45%',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  deviceImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  deviceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  navigationContainer: {
    height: 80,
    justifyContent: 'flex-end',
  },
  roomText: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 10,
  },
});

export default HomeAutomationControl;
