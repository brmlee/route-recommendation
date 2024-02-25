import React from 'react';
import { Animated, ScrollView, View, Text, StyleSheet } from 'react-native';


const SearchAndRecentSearches = () => {
    const scrollY = useRef(new Animated.Value(0)).current;

  const height = scrollY.interpolate({
    inputRange: [0, 100], // Adjust the range as needed
    outputRange: [100, 300], // Adjust the height as needed
    extrapolate: 'clamp',
    });
  return (
    <Animated.ScrollView
      contentContainerStyle={[styles.container, { height }]}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={16}
    >
      {/* Search bar */}
      <View style={styles.searchBar}>
        <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="#888"
        />
      </View>

      {/* Recent searches */}
      <View style={styles.recentSearches}>
        {/* Your recent searches component */}
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20, // Adjust as needed
  },
  searchBar: {
    // Your search bar styles
  },
  recentSearches: {
    // Your recent searches styles
  },
});

export default SearchAndRecentSearches;