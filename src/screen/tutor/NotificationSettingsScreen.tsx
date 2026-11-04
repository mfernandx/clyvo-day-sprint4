import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';
import { NotificationPreferencesCard } from '../../components/NotificationPreferencesCard';

export function NotificationSettingsScreen() {
    const { user } = useAuth();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.conteudo}>
                <View style={styles.header}>
                    <Ionicons name="notifications-outline" size={30} color="#2877E6" />
                    <Text style={styles.titulo}>Suas notificações</Text>
                    <Text style={styles.descricao}>Escolha quais lembretes você deseja receber para acompanhar os cuidados do seu pet.</Text>
                </View>

                {user && <NotificationPreferencesCard userId={user.userId} />}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: { 
        flex: 1, 
        backgroundColor: '#F5FAFF' },

    conteudo: { 
        padding: 22, 
        paddingBottom: 40 
    },

    header: { 
        alignItems: 'center', 
        marginTop: 15, 
        marginBottom: 12 
    },

    titulo: { 
        fontSize: 24, 
        fontWeight: '700', 
        color: '#174F79', 
        marginTop: 12 
    },

    descricao: { 
        fontSize: 14, 
        lineHeight: 21, 
        color: '#6C879C', 
        textAlign: 'center', 
        marginTop: 8 },
});