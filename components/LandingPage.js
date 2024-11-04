// components/LandingPage.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function LandingPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top Row with Logo and Profile Picture */}
      <View style={styles.topRow}>
        <Text style={styles.logo}>MyApp Logo</Text>
        <Avatar
          rounded
          source={{ uri: 'https://example.com/profile-pic.png' }}
          size="medium"
          onPress={() => navigation.navigate('ProfilePage')}
          containerStyle={styles.profilePic}
        />
      </View>

      {/* Search Bar */}
      <Input placeholder="Search" containerStyle={styles.searchBar} />

      {/* Options for DJ and Photography */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate('DjPage')}
        >
          <Text style={styles.optionText}>DJ</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate('PhotographyPage')}
        >
          <Text style={styles.optionText}>Photography</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profilePic: {
    marginRight: 16,
  },
  searchBar: {
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  optionButton: {
    padding: 20,
    backgroundColor: '#007bff',
    borderRadius: 10,
  },
  optionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
