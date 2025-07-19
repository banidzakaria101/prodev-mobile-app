import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from '../styles/_joinstyle'
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constant";
import { useRouter } from 'expo-router';

export default function Singin() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Image source={HEROLOGOGREEN} />
            <View style={styles.titleTextGroup}>
                <Text style={styles.titleText}>Join Us</Text>
                <Text style={styles.subText}>Create your account</Text>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Email</Text>
                <TextInput style={styles.formControl} placeholder="email@exemple.com" />
                <Text style={styles.formLabel}>Password</Text>
                <TextInput style={styles.formPasswordControl}
                    placeholder="***********"
                    secureTextEntry />

                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.buttonText}>Join Now</Text>
                </TouchableOpacity>

                <View style={styles.dividerGroup}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.divider} />
                </View>

                <View style={styles.secondaryButtonGroup}>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Image source={GOOGLELOGO} />
                        <Text style={styles.secondaryButtonText}>Continue with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Image source={FACEBOOKLOGO} />
                        <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
                    </TouchableOpacity>
                </View>*

                <View style={styles.signupgroup}>
                    <Text style={styles.signupTitleText}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => router.push('/signin')}>
                        <Text style={styles.signupSubTitleText}> Sign In</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>


    )
}