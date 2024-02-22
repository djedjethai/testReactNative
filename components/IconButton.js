import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

function IconButton({icon, color, onPress}){
	return <Pressable 
			onPress={onPress}
			style={({pressed}) => pressed && styles.pressed}
		>
		<View style={styles.buttonContainer}>
		<Text style={{...styles.buttonText, color: color }}>compare</Text>
		<Ionicons
			name={icon}
			size={24}
			color={color}
		/>
		</View>
	</Pressable>
}

export default IconButton

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonText:{
		fontSize: 15,	
		marginRight: 5,
	},
	pressed: {
		opacity: 0.7,
	}	
})
