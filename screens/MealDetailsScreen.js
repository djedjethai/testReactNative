import { useLayoutEffect } from 'react'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import MealDetails from '../components/MealDetails'
import IconButton from '../components/IconButton'
import Subtitle from '../components/mealDetail/Subtitle'
import List from '../components/mealDetail/List'
import { MEALS } from '../data/dummy-data'
import { addFavorite, removeFavorite } from '../store/redux/favorites'


function MealDetailsScreen({ route, navigation }){

	// get data from the redux store
	const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
	const dispatch = useDispatch()

	const { mealId } = route.params
	const selectedMeal = MEALS.find((meal) => meal.id === mealId)

	// check if mealId is present in the redux store
	const mealIsFavorite = favoriteMealIds.includes(mealId)

	function changeFavoriteStatusHandler() {
		if(mealIsFavorite){
			console.log("is favorite")
			dispatch(removeFavorite({id: mealId}))
		} else {
			console.log("is not favorite")
			dispatch(addFavorite({id: mealId}))
		}
	}

	// function headerButtonPressHandler(){
	// 	console.log("presssed !!!")
	// }

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return <IconButton 
						title='Tap me!'
						// onPress={headerButtonPressHandler}
						onPress={changeFavoriteStatusHandler}
						icon={mealIsFavorite ? 'star' : 'star-outline'}
						color='white'
					/>
			} 
		})
	}, [navigation, changeFavoriteStatusHandler])
	// }, [navigation, headerButtonPressHandler])

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
