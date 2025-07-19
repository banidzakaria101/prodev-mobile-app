import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { styles as mainStyles } from '../styles/_mainstyle';

import { useRouter } from 'expo-router';
import { BACKGROUNIMAGE, HEROLOGO } from "@/constant";

export default function Index() {
  const router = useRouter();
  return (
    <ImageBackground
      source={BACKGROUNIMAGE}
      style={mainStyles.backgroundImageContainer}
      resizeMode="cover">

        <View style={mainStyles.container}>
          <View style={mainStyles.logoContainer}>
            <Image source={HEROLOGO} />
          </View>
        </View>

        <View style={mainStyles.titleContainer}>
          <Text style={mainStyles.titleText}>Welcom</Text>
          <View style={mainStyles.titleSubTextContainer}>
            <Text style={mainStyles.titleSubText}>
              Get started with our app
            </Text>
          </View>
        </View>

        <View style={mainStyles.buttonGroup}>
          <TouchableOpacity 
          style={mainStyles.buttonPrimary}
          onPress={() => router.push('/signin')}>
            <Text style={mainStyles.buttonPrimaryText}>Join</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={mainStyles.buttonSecondary}
          onPress={() => router.push('/signin')}>
            <Text style={mainStyles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={mainStyles.buttonGroupSubText}>
          <Text style={mainStyles.titleSubText}>Already have an account</Text>
        </View>
    </ImageBackground>
  )
}