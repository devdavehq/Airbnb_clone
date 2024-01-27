import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// import { Link } from 'react-native'




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
        <View style={styles.container} >
          <View style={styles.actionRow} >
            <Link href={'/(modals)/bookings'} asChild>
              <TouchableOpacity style={styles.searchBtn} >
                <Ionicons name='search' size={15} />
              </TouchableOpacity>
            </Link>

            <TouchableOpacity style={styles.filterBtn}>
              <Ionicons name='options-outline' size={15} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 130,
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
    marginRight: 10
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
  categoryTextActive: {
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: '#000',
  },
  categoriesBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
  },
  categoriesBtnActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
});

export default ExploreHeader