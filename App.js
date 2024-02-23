import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailsScreen from './screens/MealDetailsScreen'
import MealsOverviewTest from './screens/mealsOverview/MealsOverviewTest'
import FavoritesScreen from './screens/FavoritesScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();


function BottomTabsNavigator(){
	return (
    		<Tab.Navigator
			screenOptions={{
		  		headerStyle:{
					backgroundColor: '#351401',
				},
				headerTintColor: 'white', // color text
				tabBarStyle: {
          				backgroundColor: '#3f2f25',
        			},
				tabBarActiveTintColor: '#351401',
				tabBarInactiveTintColor: 'white',
				tabBarActiveBackgroundColor: '#e4baa1',
	  		}}
		>
      			<Tab.Screen 
				name="Categories" 
				component={CategoriesScreen}
				options={{
					title: 'All categories',
					tabBarIcon: ({ color, size }) => (
						<Ionicons 
							name="list"
							color={color}
							size={size}
						/>
					)
				}}	
			/>
      			<Tab.Screen 
				name="Favorites" 
				component={FavoritesScreen} 
				options={{
					title: 'The Favorites',
					tabBarIcon: ({ color, size }) => (
						<Ionicons 
							name="star"
							color={color}
							size={size}
						/>
					)
				}}	
			/>
    		</Tab.Navigator>
  	);

}

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
	  		<Stack.Screen // nest the bottom screen navigator in this page
	  			name="BottomTabs"
	  			component={ BottomTabsNavigator }
	  			options={{
					headerShown: false, // let the bottomTabs take over
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



