import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { notificationService } from '../service/notificationService';

interface NotificationPreferences {
    dailyReminder: boolean;
    agendaReminder: boolean;
}

const defaultPreferences: NotificationPreferences = {
    dailyReminder: false,
    agendaReminder: false,
};

export function useNotificationPreferences(userId?: number) {
    const [preferences, setPreferences] = useState(defaultPreferences);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    const storageKey = `@clyvo:notifications:${userId}`;

    useEffect(() => {
        let active = true;

        async function loadPreferences() {
            setIsLoading(true);
            setPreferences(defaultPreferences);

            if (!userId) {
                setIsLoading(false);
                return;
            }

            try {
                const saved = await AsyncStorage.getItem(storageKey);
                if (active && saved) setPreferences({ ...defaultPreferences, ...JSON.parse(saved) });
            } catch (error) {
                console.warn('Erro ao carregar preferências:', error);
            } finally {
                if (active) setIsLoading(false);
            }
        }

        loadPreferences();
        return () => { active = false; };
    }, [userId]);

    async function updatePreference(key: keyof NotificationPreferences, enabled: boolean) {
        if (!userId || isSaving || isLoading) return false;

        setIsSaving(true);

        try {
            if (enabled) {
                const permitted = await notificationService.requestPermission();
                if (!permitted) return false;
            }

            if (key === 'dailyReminder') {
                await notificationService.cancelDailyReminder();
                if (enabled) await notificationService.scheduleDailyReminder();
            } else {
                await notificationService.cancelAgendaReminder();
                if (enabled) await notificationService.scheduleAgendaReminder();
            }

            const updated = { ...preferences, [key]: enabled };
            await AsyncStorage.setItem(storageKey, JSON.stringify(updated));
            setPreferences(updated);
            return true;
        } catch (error) {
            console.warn('Erro ao atualizar notificações:', error);
            return false;
        } finally {
            setIsSaving(false);
        }
    }

    return { preferences, isLoading, isSaving, updatePreference };
}