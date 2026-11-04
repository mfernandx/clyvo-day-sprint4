import { NavigationContainer } from '@react-navigation/native';
import {QueryClientProvider,} from '@tanstack/react-query';
import { PublicNavigator } from './src/navigation/PublicNavigator';
import { queryClient } from './src/service/queryClient';
import { RegisterUserProvider } from './src/context/CadastroContext';
import { AuthProvider } from './src/context/AuthContext';
import { RootNavigator } from './src/navigation/RootNavigator';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import { notificationService } from './src/service/notificationService';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowBanner: true,
        shouldShowList: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export default function App() {
    useEffect(() => {notificationService.initialize().catch(console.warn);}, []);

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <RegisterUserProvider>
                    <NavigationContainer>
                        <RootNavigator />
                    </NavigationContainer>
                </RegisterUserProvider> 
            </AuthProvider>
        </QueryClientProvider>
    );
}


