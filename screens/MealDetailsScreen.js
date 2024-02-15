import { Text, View } from 'react-native'
// import MealDetails from '../components/MealDetails'


function MealDetailsScreen({ route }){

	const { mealId } = route.params

	return(
		<View>
			<Text>See the mealId.....{mealId}</Text>
		</View>
	)
}


export default MealDetailsScreen
