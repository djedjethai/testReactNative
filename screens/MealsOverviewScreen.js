import { useLayoutEffect } from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
// import { useNavigation, useRoute } from '@react-navigation/native'

import MealItem from '../components/MealItem'
import { MEALS, CATEGORIES } from '../data/dummy-data'

function MealsOverviewScreen({navigation, route}) { // got navigation as this screen is a Stack.screen
	// const navigation = useNavigation() // if nested cpn without navigation access
	// const route = useRoute()
	
	const catId = route.params.categoryId
	const displayedMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catId) >= 0
	})

	// set the title on the top of the page
	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(category) => category.id === catId
		).title

		navigation.setOptions({
			title: categoryTitle
		})

	}, [catId, navigation])


	function renderMealItem(itemData){
		const item = itemData.item

		// that works but we rediract from MealItem.js for the example
		// function pressHandler(){
		// 	navigation.navigate('MealDetails', {
		// 		mealId: item.id
		// 	})
		// }

		const mealItemProps = {
			id: item.id,
			title:item.title,
			imageUrl:item.imageUrl,
			duration:item.duration,
			complexity:item.complexity,
			affordability:item.affordability,	
		}

		return (
			<MealItem 
				{...mealItemProps} 
				// onPress={pressHandler} 
			/>
		)
	}
	
	navigateToAnotherPage = () => {
		navigation.navigate('MealsTest')
	}

	return (
		<View style={styles.container}>
			<FlatList 
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
				
			/>
			<TouchableOpacity 
				onPress={navigateToAnotherPage} 
				style={styles.button}
			>
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

