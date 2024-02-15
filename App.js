import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailsScreen from './screens/MealDetailsScreen'
import MealsOverviewTest from './screens/mealsOverview/MealsOverviewTest'

const Stack = createNativeStackNavigator()


export default function App() {
  return (
	  <>
	  <StatusBar style='light'/>
	  <NavigationContainer> 
	  	<Stack.Navigator 
	  		screenOptions={{
		  		headerStyle:{
						backgroundColor: '#351401',
					},
					headerTintColor: 'white', // color text
					contentStyle: {backgroundColor: '#3f2f25'}
	  		}} // set it as default to all page, will be overwrite then
	  	> 
	  		<Stack.Screen 
	  			name="MealsCategories"
	  			component={ CategoriesScreen }
	  			options={{
		  			title:'All categories',
				}}
	  		/>
			<Stack.Screen 
	  			name="MealsOverview"
	  			component={ MealsOverviewScreen }
	  			// can be use to show title on top of page
	  			// options={({route, navigation}) => {
				// 	const title = route.params.categoryId
				// 	return {
				// 		title: title 
				// 	}
	  			// }}
	  		/>
			<Stack.Screen 
	  			name="MealDetails"
	  			component={ MealDetailsScreen }
	  		/>
	  		<Stack.Screen 
	  			name="MealsTest" 
	  			component={MealsOverviewTest} 
	  		/>
	  	</Stack.Navigator>
	  </NavigationContainer>
	  </>
  );
}

const styles = StyleSheet.create({
  container: {},
});



