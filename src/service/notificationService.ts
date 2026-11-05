import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export const notificationService = {
    async initialize() {
        if (Platform.OS === 'android') {
            await Notifications.setNotificationChannelAsync('care-reminders', {
                name: 'Lembretes de cuidado',
                description: 'Avisos sobre consultas, vacinas e cuidados dos pets.',
                importance: Notifications.AndroidImportance.HIGH,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#2877E6',
            });
        }
    },

    async requestPermission(): Promise<boolean> {
        const current = await Notifications.getPermissionsAsync();
        if (current.granted) return true;

        const requested = await Notifications.requestPermissionsAsync();
        return requested.granted;
    },

    async sendTestNotification() {
        const permitted = await this.requestPermission();
        if (!permitted) return false;

        await Notifications.scheduleNotificationAsync({
            content: {
                title: '🐾 CLYVO DAY',
                body: 'As notificações estão funcionando! 💙',
                sound: 'default',
            },
            trigger: {
                type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
                seconds: 5,
                channelId: 'care-reminders',
            },
        });

        return true;
    },

    async scheduleDailyReminder() {
    return Notifications.scheduleNotificationAsync({
        identifier: 'clyvo-daily-reminder',
        content: {
            title: '🐾 Como seu pet está hoje?',
            body: 'Reserve um minutinho para registrar como foi o dia dele no CLYVO DAY! 💙',
            sound: 'default',
            data: { type: 'daily-reminder' },
        },
        trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DAILY,
            hour: 22,
            minute: 36,
            channelId: 'care-reminders',
        },
    });
},

async scheduleAgendaReminder() {
    return Notifications.scheduleNotificationAsync({
        identifier: 'clyvo-agenda-reminder',
        content: {
            title: '📅 Já conferiu sua agenda?',
            body: 'Dê uma olhadinha nos próximos cuidados do seu pet para não esquecer nenhum compromisso!',
            sound: 'default',
            data: { type: 'agenda-reminder' },
        },
        trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DAILY,
            hour: 22,
            minute: 38,
            channelId: 'care-reminders',
        },
    });
},

async cancelDailyReminder() {
    await Notifications.cancelScheduledNotificationAsync('clyvo-daily-reminder');
},

async cancelAgendaReminder() {
    await Notifications.cancelScheduledNotificationAsync('clyvo-agenda-reminder');
},
};