import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Define the `AddRoomScreen` component
function AddRoomScreen() {
  const [roomName, setRoomName] = useState('');
  const [deviceCount, setDeviceCount] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(`Room Name: ${roomName}, Device Count: ${deviceCount}`);
    // Optionally, navigate back to the previous screen or clear the form
  };

  return (
    <View style={[styles.container, { top: -200 }]}>
      <Text style={styles.title}>Add Room</Text>
      <TextInput
        placeholder="Tên Phòng"
        style={styles.input}
        value={roomName}
        onChangeText={setRoomName}
      />
      <TextInput
        placeholder="Số Thiết bị"
        style={styles.input}
        value={deviceCount}
        onChangeText={setDeviceCount}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

// Define the `AddDeviceScreen` component
function AddDeviceScreen() {
  const navigation = useNavigation();

  const rooms = [
    {
      name: 'Kitchen',
      devices: '10 devices',
      image: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/room.png?v=1724136661231',
      color: 'rgba(0, 173, 239, 0.5)',
    },
    {
      name: 'Living room',
      devices: '8 devices',
      image: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/room1.png?v=1724136663307',
      color: 'rgba(0, 128, 0, 0.5)',
    },
    {
      name: 'A Bedroom',
      devices: '5 devices',
      image: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/room2.png?v=1724136667996',
      color: 'rgba(255, 105, 180, 0.5)',
    },
    {
      name: 'Bathroom',
      devices: '2 devices',
      image: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/room3.png?v=1724136671589',
      color: 'rgba(139, 69, 19, 0.5)',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, { top: 10 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Add room</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddRoom')}
          style={styles.addIcon}
        >
          <Image 
            source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/add.png?v=1724135686526' }}
            style={styles.addIconImage}
          />
        </TouchableOpacity>
      </View>
      
      {rooms.map((room, index) => (
        <View key={index} style={[styles.card, { top: 15 }]}>
          <ImageBackground source={{ uri: room.image }} style={styles.image} imageStyle={styles.imageStyle}>
            <View style={styles.overlay}>
              <Text style={styles.roomName}>{room.name}</Text>
              <Text style={styles.deviceCount}>{room.devices}</Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('DeviceForm')}
              >
                <Image 
                  source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/add.png?v=1724135686526' }}
                  style={styles.addButtonImage}
                />
                <Text style={styles.addButtonText}>Add device</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      ))}
    </ScrollView>
  );
}

// Define the `DeviceFormScreen` component
function DeviceFormScreen() {
  return (
    <View style={[styles.container, { top: -200 }]}>
      <Text style={styles.title}>Add Device Form</Text>
      <TextInput placeholder="Device Name" style={styles.input} />
      <TextInput placeholder="Device Details" style={styles.input} multiline />
      <Button title="Submit" onPress={() => { /* Handle form submission */ }} />
    </View>
  );
}

// Define the main `App` component with navigation setup
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddDevice">
        <Stack.Screen 
          name="AddDevice" 
          component={AddDeviceScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="DeviceForm" 
          component={DeviceFormScreen} 
          options={{ title: 'Add Device' }} // Optional: Customize header
        />
        <Stack.Screen 
          name="AddRoom" 
          component={AddRoomScreen} 
          options={{ title: 'Add Room' }} // Optional: Customize header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Define the styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  backButton: {
    paddingRight: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  addIcon: {
    paddingLeft: 10,
  },
  addIconImage: {
    width: 24,
    height: 24,
  },
  card: {
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    height: 150,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 15,
  },
  overlay: {
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 15,
  },
  roomName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  deviceCount: {
    fontSize: 14,
    color: '#fff',
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  addButtonImage: {
    width: 20,
    height: 20,
    marginBottom: 3,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
