import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import MealItem from './MealItem'



function MealsList({items}){

	const navigation = useNavigation() // if nested cpn without navigation access

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
				data={items}
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

export default MealsList

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

