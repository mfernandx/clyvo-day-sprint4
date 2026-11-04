import React from 'react';
import {createBottomTabNavigator,} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TutorStackParamList, TutorTabParamList } from './navigationTypes';
import { TutorHomeScreen } from '../screen/tutor/TutorHomeScreen';
import { CommunityScreen } from '../screen/community/CommunityScreen';
import { JourneyScreen } from '../screen/tutor/JourneyScreen';
import { TutorProfileScreen } from '../screen/tutor/TutorProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PetsScreen } from '../screen/tutor/PetsScreen';
import {DailyPetLogCreateScreen,} from '../screen/tutor/DailyPetLogCreateScreen';
import { CommunityPostCreateScreen } from '../screen/community/CommunityPostCreateScreen';
import { PetMonitoringCreateScreen } from '../screen/tutor/PetMonitoringCreateScreen';
import { AchievementsScreen } from '../screen/tutor/AchievementsScreen';
import { CareEventCreateScreen } from '../screen/tutor/CareEventCreateScreen';
import { NotificationSettingsScreen } from '../screen/tutor/NotificationSettingsScreen';

const Tab = createBottomTabNavigator<TutorTabParamList>();
const Stack = createNativeStackNavigator<TutorStackParamList>();

function TutorTabs() {
    return (
        
        <Tab.Navigator initialRouteName="TutorHome" screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#2877E6',
            tabBarInactiveTintColor: '#8DA4B6',
            tabBarStyle: {
                height: 68,
                paddingTop: 7,
                paddingBottom: 8,
                borderTopWidth: 0,
                backgroundColor: '#FFFFFF',
                elevation: 10,
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '600',
            },

            tabBarIcon: ({color,size,focused}) => {
                let iconName:
                    | 'home'
                    | 'home-outline'
                    | 'paw'
                    | 'paw-outline'
                    | 'book'
                    | 'book-outline'
                    | 'person'
                    | 'person-outline';

                if (route.name === 'TutorHome') {
                    iconName = focused ? 'home' : 'home-outline';
                    
                } else if (route.name === 'Community') {
                    iconName = focused ? 'paw' : 'paw-outline';

                } else if (route.name === 'Journey') {
                    iconName = focused ? 'book' : 'book-outline';

                } else {
                    iconName = focused ? 'person' : 'person-outline';
                }

                return (
                    <Ionicons name={iconName} size={size} color={color}/>
                );
            },
        })}>

            <Tab.Screen name="TutorHome" component={TutorHomeScreen} options={{title: 'Home'}}/>

            <Tab.Screen name="Journey" component={JourneyScreen} options={{title: 'Jornada'}}/>

            <Tab.Screen name="Community" component={CommunityScreen} options={{title: 'Comunidade'}}/>

            <Tab.Screen name="TutorProfile" component={TutorProfileScreen} options={{title: 'Perfil'}}/>

        </Tab.Navigator>
    );
}

export function TutorNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="TutorTabs" component={TutorTabs}/>

            <Stack.Screen name="PetsTutor" component={PetsScreen}/>

            <Stack.Screen name="DailyPetLogCreate" component={DailyPetLogCreateScreen}/>

            <Stack.Screen name="CommunityPostCreate" component={CommunityPostCreateScreen}/>

            <Stack.Screen name="PetMonitoringCreate" component={PetMonitoringCreateScreen}/>

            <Stack.Screen name="Achievements" component={AchievementsScreen}/>
            
            <Stack.Screen name="CareEventCreate" component={CareEventCreateScreen}/>

            <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen} options={{ title: 'Notificações', headerBackTitle: 'Voltar' }}/>
        </Stack.Navigator>
    );
}