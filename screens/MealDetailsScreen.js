import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'

import MealDetails from '../components/MealDetails'
import Subtitle from '../components/mealDetail/Subtitle'
import List from '../components/mealDetail/List'
import { MEALS } from '../data/dummy-data'


function MealDetailsScreen({ route }){

	const { mealId } = route.params

	const selectedMeal = MEALS.find((meal) => meal.id === mealId)

	return(
		<ScrollView style={styles.rootContainer}>
			<Image 
				style={styles.image}
				source={{ uri: selectedMeal.imageUrl }} 
			/>
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetails 
				duration={selectedMeal.duration}
				complexity={selectedMeal.complexity}
				affordability={selectedMeal.affordability}
				textStyle={styles.detailText} // get cascading css like so
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={selectedMeal.ingredients} />
					<Subtitle>Steps</Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	)
}


export default MealDetailsScreen

const styles = StyleSheet.create({
	rootContainer:{
		marginBottom: 32
	},
	image:{
		width: '100%',
		height: 350
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		margin: 8,
		textAlign: 'center',
		color: 'white',
	},
	detailText:{
		color: 'white'
	},	
	listOuterContainer: {
		alignItems: 'center',
	},
	listContainer:{
		width: '80%',

	}
})
