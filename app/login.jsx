import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import BackButton from '../components/backButton'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import { hp, wp } from '../helpers/common'

const Login = () => {
	const router = useRouter();
	return (
		<ScreenWrapper>
			<StatusBar style="dark" />
			<View>
				<BackButton router={router} />

				{/* Welcome */}
				<View>
					<Text style={styles.welcomeText}>Hey,</Text>
					<Text style={styles.welcomeText}>Welcome Back</Text>
				</View>

				{/* Form */}
				<View style={styles.form}>
					<Text style={{fontSize: hp(1.5), color: theme.colors.text}}>
						Please login to continue
					</Text>
					<TextInput />
				</View>

			</View>

		</ScreenWrapper>
	)
}

export default Login

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 45,
		paddingHorizontal: wp(5),
	},
	welcomeText: {
		fontSize: hp(4),
		fontWeight: theme.fonts.bold,
		color: theme.colors.text,
	},
	form: {
		gap: 25,
	},

})