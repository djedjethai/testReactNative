import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import { useNavigation, useRoute } from '@react-navigation/native'

import { MEALS } from '../data/dummy-data'

function MealsOverviewScreen({navigation, route}) { // got navigation as this screen is a Stack.screen
	// const navigation = useNavigation() // if nested cpn without navigation access
	// const route = useRoute()
	
	const catId = route.params.categoryId
	
	navigateToAnotherPage = () => {
		navigation.navigate('MealsTest')
	}

	return (
		<View style={styles.container}>
			<Text>MEALS overviews - {catId}</Text>
			<TouchableOpacity 
				onPress={navigateToAnotherPage} 
				style={styles.button}
			>
        			<Text style={styles.buttonText}>Go to Another Page</Text>
      			</TouchableOpacity>
		</View>
	)
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16
	},
	button: {
    		marginTop: 20,
    		backgroundColor: 'blue',
    		padding: 10,
    		borderRadius: 5,
  	},
  	buttonText: {
    		color: 'white',
    		fontWeight: 'bold',
  	},
})

