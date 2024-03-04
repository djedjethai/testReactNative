import { useLayoutEffect } from 'react'

import MealsList from '../components/mealsList/MealsList'
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


	return <MealsList items={displayedMeals} /> 
}

export default MealsOverviewScreen


