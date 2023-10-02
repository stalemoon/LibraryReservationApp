import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'deprecated-react-native-prop-types';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack';
import IconM from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';



function ReservationDetailsScreen() {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const imageSize = Math.min(screenWidth, screenHeight) * 0.9;

  // Handle the back button press
  const handleBackPress = () => {
    navigation.goBack();
  };

  const InformationBlock = () => {
    return (
      <View style={styles.OverviewContainer}>
        <View style={styles.ClockContainer}>
          <Icon name="clock-o" size={24} color="orange" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Time:</Text>
          <Text style={styles.value}>2 hours</Text>
        </View>
      </View>
    );
  };

  const RatingBlock = () => {
    return (
      <View style={styles.OverviewContainer}>
        <View style={styles.ClockContainer}>
          <Icon name="star" size={24} color="orange" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Rating:</Text>
          <Text style={styles.value}>4.9/5</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Image
          source={require('./picture/floor1.jpg')}
          style={[styles.image, { width: screenWidth * 0.9, height: screenHeight * 0.5 }]}
        />
        <View style={styles.overlay}>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <View style={styles.iconContainer}>
              <IconM name="keyboard-arrow-left" size={40} color="orange" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <View style={styles.hearticonContainer}>
              <Icon name="heart" size={20} color="orange" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.informationRow}>
        <View style={styles.informationColumn}>
          <Text style={styles.headerText}>Overview</Text>
          <InformationBlock label="Time" />
        </View>
        <View style={[styles.informationColumn, { paddingHorizontal: screenWidth * 0.05 }]}>
          <Text style={styles.headerText}>Review</Text>
          <RatingBlock label="Review" />
        </View>
      </View>
      <Text style={styles.DateTimeText}>Date/Time</Text>
      <Text style={styles.DateTimeTextDescription}>24 SUNDAY 12:30 - 14:20</Text>
      <Text style={styles.RoomService}>Services</Text>
      <Text style={styles.RoomServiceDescription}>KM Rooms for tutoring and the discussion.</Text>
      <Text style={styles.RoomServiceDescription}>KM Stands for tutoring in open space.</Text>

      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonReserve}>
          <Text style={styles.buttonReserveText}>Reserve</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const paddingHorizontal = screenWidth * 0.05;
const paddingTop = screenHeight * 0.05;

const iconContainerLeft = screenWidth * 0.08;
const iconContainerTop = screenWidth * 0.08;

const styles = StyleSheet.create({
  buttonReserve: {
    backgroundColor: 'black',    // Button background color
    height: screenHeight * 0.07,         // Vertical padding
    width: screenWidth * 0.9,
    borderRadius: 15,            // Border radius for rounded corners
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  buttonReserveText: {
    color: 'white',             // Text color
    fontSize: 18,               // Font size
    fontWeight: 'bold',         // Bold font weight
    justifyContent: 'center',
    alignItems: 'center',
  },
  RoomService: {
    fontSize: screenWidth * 0.02, // Adjust font size as needed
    fontWeight: 'bold', // Bold font for label
    color: 'gray',
    marginLeft: screenWidth * 0.05,
    marginTop: screenHeight * 0.01,
  },
  RoomServiceDescription: {
    fontSize: screenWidth * 0.02, // Adjust font size as needed
    fontWeight: 'bold', // Bold font for label
    color: 'gray',
    marginLeft: screenWidth * 0.05,
  },
  DateTimeText: {
    fontSize: screenWidth * 0.04,
    fontWeight: 'bold',
    alignItems: 'center',
    color: 'orange',
    marginLeft: screenWidth * 0.05,
    marginTop: screenHeight * 0.02,
  },
  DateTimeTextDescription: {
    fontSize: screenWidth * 0.02, // Adjust font size as needed
    fontWeight: 'bold', // Bold font for label
    color: 'black',
    marginLeft: screenWidth * 0.05,
    marginTop: screenHeight * 0.01,
  },
  OverviewContainer: {
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center', // Center items vertically
    backgroundColor: '', // Background color of the block
    padding: 10, // Padding around the block
    borderRadius: 15, // Rounded corners
    borderWidth: 1, // Border width
    borderColor: '#ccc', // Border color
    width: screenWidth * 0.25,
    height: screenHeight * 0.06,
    top: screenHeight * 0.01,
  },
  ClockContainer: {
    marginRight: 10, // Margin to separate the icon from text
  },
  textContainer: {
    flex: 1, // Take up remaining horizontal space
  },
  label: {
    fontSize: screenWidth * 0.02, // Adjust font size as needed
    fontWeight: 'bold', // Bold font for label
  },
  value: {
    fontSize: screenWidth * 0.02, // Adjust font size as needed
  },
  informationRow: {
    flexDirection: 'row', // Arrange blocks horizontall
    paddingHorizontal: screenWidth * 0.05, // Add horizontal spacing
  },
  informationColumn: {
    flexDirection: 'column', // Arrange boxes horizontally
    marginBottom: 0, // Add vertical spacing between rows
  },
  container: {
    flex: 0.1,
    alignItems: '',
    paddingHorizontal: '5%', // Apply calculated horizontal padding
    paddingTop: '5%', // Apply calculated top padding
    // Add shadow properties here
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    borderRadius: 15,
    marginTop: 0,

  },
  backButtonText: {
    color: 'white', // Customize the button text color
    fontWeight: 'bold',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', // Position the icon container absolutely
    top: iconContainerTop, // Adjust the top position to center it vertically
    left: iconContainerLeft, // Adjust the left position to center it horizontally
    zIndex: 1, // Ensure the icon is displayed above the image
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (horizontal and vertical)
    shadowOpacity: 0.8, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 4, // Android drop shadow
  },
  hearticonContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', // Position the icon container absolutely
    top: iconContainerTop, // Adjust the top position to center it vertically
    right: iconContainerLeft, // Adjust the left position to center it horizontally
    zIndex: 1, // Ensure the icon is displayed above the image
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (horizontal and vertical)
    shadowOpacity: 0.8, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 4, // Android drop shadow
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Position the overlay to cover the entire image
  },
  headerText: {
    fontSize: screenWidth * 0.04,
    fontWeight: 'bold',
    alignItems: 'center',
    color: 'orange',
  },

});

export default ReservationDetailsScreen;