import { ActivityIndicator, Alert, StyleSheet, Switch, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNotificationPreferences } from './../hooks/useNotificationPreferences';

interface Props {
    userId: number;
}

export function NotificationPreferencesCard({ userId }: Props) {
    const { preferences, isLoading, isSaving, updatePreference } = useNotificationPreferences(userId);

    async function handleChange(type: 'dailyReminder' | 'agendaReminder', enabled: boolean) {
        const success = await updatePreference(type, enabled);
        if (!success) Alert.alert('Não foi possível ativar', 'Verifique as permissões de notificação do dispositivo e tente novamente.');
    }

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Ionicons name="notifications-outline" size={23} color="#2877E6" />
                <Text style={styles.titulo}>Notificações</Text>
            </View>

            {isLoading ? <ActivityIndicator color="#2877E6" /> : (
                <>
                    <View style={styles.opcao}>
                        <View style={styles.conteudo}>
                            <Text style={styles.opcaoTitulo}>Lembrete diário 🐾</Text>
                            <Text style={styles.descricao}>Todos os dias, às 19h, para registrar como seu pet está.</Text>
                        </View>
                        <Switch
                            value={preferences.dailyReminder}
                            onValueChange={value => handleChange('dailyReminder', value)}
                            disabled={isSaving}
                            trackColor={{ false: '#DCE7F0', true: '#A9D0FF' }}
                            thumbColor={preferences.dailyReminder ? '#2877E6' : '#FFFFFF'}
                        />
                    </View>

                    <View style={styles.divisor} />

                    <View style={styles.opcao}>
                        <View style={styles.conteudo}>
                            <Text style={styles.opcaoTitulo}>Lembrete da agenda 📅</Text>
                            <Text style={styles.descricao}>Todos os dias, às 9h, para conferir os próximos cuidados.</Text>
                        </View>
                        <Switch
                            value={preferences.agendaReminder}
                            onValueChange={value => handleChange('agendaReminder', value)}
                            disabled={isSaving}
                            trackColor={{ false: '#DCE7F0', true: '#A9D0FF' }}
                            thumbColor={preferences.agendaReminder ? '#2877E6' : '#FFFFFF'}
                        />
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    card: { 
        backgroundColor: '#FFFFFF', 
        borderRadius: 24, padding: 20, 
        borderWidth: 1, 
        borderColor: '#E4EFF7', 
        marginTop: 18 
    },

    header: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 10, 
        marginBottom: 14 
    },

    titulo: { 
        color: '#174F79', 
        fontSize: 18, 
        fontWeight: '700' 
    },

    opcao: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingVertical: 12 
    },

    conteudo: { 
        flex: 1, 
        paddingRight: 12 
    },

    opcaoTitulo: { 
        color: '#174F79', 
        fontSize: 14, 
        fontWeight: '700' 
    },

    descricao: { 
        color: '#7B91A4', 
        fontSize: 12, 
        lineHeight: 18, 
        marginTop: 4 
    },

    divisor: { 
        height: 1, 
        backgroundColor: '#EDF2F7' 
    },
});