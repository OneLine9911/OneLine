import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

const NewPost = () => {
	const { user } = useAuth();
	const bodyRef = useRef('');
	const editorRef = useRef(null);
	const router = useRouter();

	const [loading, setLoading] = useState(false);

	return (
		<View style={styles.container}>
			{/* Background colored boxes */}
			<View style={styles.background}>
				{[...Array(20).keys()].map(i => (
					<View
						key={`box-${i}`}
						style={[
							styles.box,
							i % 2 === 1 ? styles.boxOdd : styles.boxEven,
						]}
					/>
				))}
			</View>

			{/* Blur overlay */}
			<BlurView intensity={80} tint="light" style={StyleSheet.absoluteFillObject} />

			{/* Centered glass card */}
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}
				style={styles.centerContent}
			>
				<View style={styles.glassCard}>
					<Text style={styles.title}>Che stai a pensà?</Text>
					<TextInput
						ref={editorRef}
						multiline
						numberOfLines={4}
						placeholder="Scrivi qui il tuo post..."
						placeholderTextColor="#666"
						style={styles.input}
						onChangeText={text => (bodyRef.current = text)}
					/>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
};

export default NewPost;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	background: {
		...StyleSheet.absoluteFillObject,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	box: {
		width: '25%',
		height: '100%',
	},
	boxEven: {
		backgroundColor: 'orangered',
	},
	boxOdd: {
		backgroundColor: 'gold',
	},
	centerContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	glassCard: {
		width: '90%',
		borderRadius: 20,
		padding: 20,
		alignItems: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0.25)', // vetro traslucido
		borderWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.3)',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.25,
		shadowRadius: 20,
		elevation: 10,
		overflow: 'hidden',
	},
	title: {
		fontSize: 20,
		fontWeight: '600',
		color: '#222',
		marginBottom: 12,
	},
	input: {
		width: '100%',
		minHeight: 100,
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		borderRadius: 12,
		padding: 15,
		fontSize: 16,
		color: '#222',
		textAlignVertical: 'top',
	},
});
