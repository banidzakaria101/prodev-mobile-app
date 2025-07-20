import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { styles as mainStyles } from "../styles/_mainstyle";
import { useRouter } from "expo-router";
import { BACKGROUNIMAGE, HEROLOGO } from "@/constants";

export default function Index() {
  const router = useRouter();
  return (
    <ImageBackground
      source={BACKGROUNIMAGE}
      style={mainStyles.backgroundImageContainer}
      resizeMode="cover"
    >
      <View style={mainStyles.container}>
        <View style={mainStyles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>
      </View>

      <View style={mainStyles.titleContainer}>
        <Text style={mainStyles.titleText}>Welcome</Text>
        <View style={mainStyles.titleSubTextContainer}>
          <Text style={mainStyles.titleSubText}>
            Get started with our app
          </Text>
        </View>
      </View>

      <View style={mainStyles.buttonGroup}>
        <TouchableOpacity
          style={mainStyles.buttonPrimary}
          onPress={() => router.push("/join")}
        >
          <Text style={mainStyles.buttonPrimaryText}>Join</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={mainStyles.buttonSecondary}
          onPress={() => router.push("/signin")}
        >
          <Text style={mainStyles.buttonSecondaryText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={mainStyles.buttonPrimary} // reuse style or make a new one
          onPress={() => router.push("/(home)/profile")}
        >
          <Text style={mainStyles.buttonPrimaryText}>Go to Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={mainStyles.buttonGroupSubText}>
        <Text style={mainStyles.titleSubText}>Already have an account?</Text>
      </View>
    </ImageBackground>
  );
}
