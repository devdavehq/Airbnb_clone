import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Link } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const categories = [
  {
    name: 'Tiny homes',
    icon: 'home',
  },
  {
    name: 'Cabins',
    icon: 'house-siding',
  },
  {
    name: 'Trending',
    icon: 'local-fire-department',
  },
  {
    name: 'Play',
    icon: 'videogame-asset',
  },
  {
    name: 'City',
    icon: 'apartment',
  },
  {
    name: 'Beachfront',
    icon: 'beach-access',
  },
  {
    name: 'Countryside',
    icon: 'nature-people',
  },
];

const ExploreHeader = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View>
        <View style={styles.container}>
          <View style={styles.actionRow}>
            
              <Link href={'/(modals)/bookings'} asChild>
                <TouchableOpacity style={styles.searchBtn}>
                  <Ionicons name='search' size={15} />
                  <View>
                    <Text style={{ fontFamily: 'mon-sb' }}>Where To?</Text>
                    <Text style={{ fontFamily: 'mon', color: Colors.grey }}>Anywhere . Any week</Text>
                  </View>
                </TouchableOpacity>
              </Link>
            

            <TouchableOpacity style={styles.filterBtn}>
              <Ionicons name='options-outline' size={15} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            paddingHorizontal: 16,
          }}
        >
          {categories.map((item, index) => (
            <TouchableOpacity key={index} style={styles.categoriesBtn}>
              <MaterialIcons name={item.icon as any} size={24} color="black" />
              <Text style={styles.categoryText}> {item.name} </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 160,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    paddingTop: 35,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  searchBtn: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 10,
    padding: 14,
    alignItems: 'center',
    width: 280,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c2c2c2',
    borderRadius: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    marginRight: 10,
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#A2A0A2',
    borderRadius: 24,
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: Colors.grey,
  },
  categoriesBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

export default ExploreHeader;
