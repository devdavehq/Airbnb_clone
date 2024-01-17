import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser'
import { defaultStyles } from '@/constants/styles'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Ionicons } from '@expo/vector-icons';
import { useOAuth } from '@clerk/clerk-expo'

enum Strategy {
  Google = 'oauth_google',
  Facebook = 'oauth_facebook',
  Apple = 'oauth_apple',
}

const Page = () => {
  useWarmUpBrowser()

    const { startOAuthFlow: google } = useOAuth({ strategy: 'oauth_google' })
    const { startOAuthFlow: facebook } = useOAuth({ strategy: 'oauth_facebook' })
    const { startOAuthFlow: apple } = useOAuth({ strategy: 'oauth_apple' })

    const onSelectAuth = async ( strategy: Strategy) => {
        const selectedAuth = {
          [Strategy.Google]: google,
          [Strategy.Facebook]: facebook,
           [Strategy.Apple]: apple,
        }[strategy];

       
    }

  return (
    <View style={styles.container}>
      <TextInput autoCapitalize='none' placeholder='Email' style={defaultStyles.inputField} />
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.separatorView}>
        <View style={{
          flex: 1,
          borderColor: '#000',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}>
        </View>
        <Text style={styles.separator}>Or</Text>
        <View style={{
          flex: 1,
          borderColor: '#000',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}>
        </View>
      </View>


      <View style={{
        gap: 20,
      }}>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name='call-outline' style={defaultStyles.btnIcon} size={24} />
          <Text style={styles.btnOutlineText}>Continue With Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategy.Apple)}>
          <Ionicons name='md-logo-apple' style={defaultStyles.btnIcon} size={24} />
          <Text style={styles.btnOutlineText}>Continue With Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategy.Google)}>
          <Ionicons name='md-logo-google' style={defaultStyles.btnIcon} size={24} />
          <Text style={styles.btnOutlineText}>Continue With Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline} onPress={() => onSelectAuth(Strategy.Facebook)}>
          <Ionicons name='md-logo-facebook' style={defaultStyles.btnIcon} size={24} />
          <Text style={styles.btnOutlineText}>Continue With Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 26,
  },
  separatorView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVerticaL: 30,
    marginTop: 30,
    marginBottom: 30,
  },
  separator: {
    fontFamily: 'mon-sb',
    color: Colors.grey
  },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
})
export default Page