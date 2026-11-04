import React from 'react';
import {Alert, SafeAreaView,ScrollView,StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TutorStackParamList } from '../../navigation/navigationTypes';
import { useNavigation } from '@react-navigation/native';
import { usePets } from '../../hooks/usePets';
import { useMemo } from 'react';
import { useCareEvents } from '../../hooks/useCareEvents';
import { NextCareEventCard } from '../../components/NextCareEventCard';
import { useDailyPetLogs } from '../../hooks/useDailyPetLog';
import { calculateCareStreak } from '../../utils/calc/calcCareStreak';
import { CareStreakCard } from '../../components/CareStreakCard';
import { notificationService } from '../../service/notificationService';

export function TutorHomeScreen() {
    const navigation =useNavigation<NativeStackNavigationProp<TutorStackParamList>>();
    const { user } = useAuth();
    const {data: pets,isLoading: isLoadingPets,isError: isPetsError,} = usePets();
    const firstPet = pets?.[0];
    const { data: dailyLogs = [], isLoading: isLoadingLogs } = useDailyPetLogs(firstPet?.petId);
    const careStreak = calculateCareStreak(dailyLogs);
    const { data: careEvents = [], isLoading: isLoadingCareEvents } = useCareEvents(firstPet?.petId);
    const nextCareEvent = useMemo(() => {
        return [...careEvents].filter(event => event.status === 0).sort((a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime())[0];
    }, [careEvents]);

    function getFirstName() {
        if (!user?.fullName) {
            return '';
        }
        return user.fullName.split(' ')[0];
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                <View style={styles.header}>
                    <View style={styles.headerText}>
                        <Text style={styles.cumprimento}>Olá, {getFirstName()}! </Text>
                        <Text style={styles.welcomeText}> Que bom ter você por aqui!</Text>
                        
                    </View>

                    <TouchableOpacity style={styles.headerButton} activeOpacity={0.8} onPress={() => navigation.navigate('NotificationSettings')}>
                        <Ionicons name="notifications-outline" size={23} color="#2877E6" />
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.cardPrincipal}>
                    
                    <View style={styles.circuloMaior} />
                    <View style={styles.circuloMenor} />

                    <View style={styles.cardPrincipalConteudo}>
                        <View style={styles.cardPrincipalTextContainer}>
                            <Text style={styles.cardPrincipalTitulo}>Como foi o dia do seu pet?</Text>
                            <Text style={styles.cardPrincipalDescricao}>Pequenos registros ajudam a construir uma grande jornada.</Text>
                        </View>

                        <View style={styles.cardPrincipalPetIcon}>
                            <Ionicons name="paw" size={55} color="#2877E6"/>
                        </View>
                    </View>

                </View>


                <TouchableOpacity style={styles.petsCard} activeOpacity={0.5} onPress={() => navigation.navigate('PetsTutor')}>
                    
                    <View style={styles.petsIconContainer}>
                        <Ionicons name="paw" size={30} color="#2877E6"/>
                    </View>

                    <View style={styles.petsConteudo}>
                        <Text style={styles.petsTitulo}>Seus pets</Text>
                        <Text style={styles.petsDescricao}>Acesse os pets vinculados à sua conta.</Text>
                    </View>

                    <Ionicons name="chevron-forward" size={23} color="#2877E6"/>
                    
                </TouchableOpacity>

                <CareStreakCard streak={careStreak} isLoading={isLoadingLogs}/>

                <Text style={styles.sectionTitulo}>O que vamos registrar hoje?</Text>

                <View style={styles.acoesRapidas}>

                    <TouchableOpacity style={styles.acaoCard} activeOpacity={0.5} disabled={!firstPet} onPress={() => {
                        if (!firstPet) {
                            return;
                        } 
                        navigation.navigate('DailyPetLogCreate',{petId: firstPet.petId,});
                    }} >

                        <View style={[styles.acaoIcon,styles.acaoIconAzul]}>
                            <Ionicons name="book-outline" size={28} color="#2877E6"/>
                        </View>

                        <Text style={styles.acaoTitulo}>Registro diário</Text>

                        <Text style={styles.acaoDescricao}>Conte como foi o dia</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.acaoCard} activeOpacity={0.5} onPress={() => {
                        if (!firstPet) {
                            Alert.alert('Nenhum pet cadastrado','Cadastre um pet antes de fazer um monitoramento.');
                            return;
                        }
                        navigation.navigate('PetMonitoringCreate',{petId: firstPet.petId},);
                    }}>

                        <View style={[styles.acaoIcon,styles.acaoIconVerde]}>
                            <Ionicons name="pulse-outline" size={28} color="#3DA6A0"/>
                        </View>

                        <Text style={styles.acaoTitulo}>CheckUp</Text>
                        <Text style={styles.acaoDescricao}>Humor, apetite e mais</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.acoesRapidasRow2}>
                    <TouchableOpacity style={styles.acaoCard} activeOpacity={0.5} onPress={() => navigation.navigate('CommunityPostCreate')}>
                        <View style={[styles.acaoIcon,styles.acaoIconRoxo]}>
                            <Ionicons name="people-outline" size={28} color="#6558D9"/>
                        </View>
                        

                        <Text style={styles.acaoTitulo}>Publicação</Text>
                        <Text style={styles.acaoDescricao}>Compartilhe no feed</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.acaoCard} activeOpacity={0.5} onPress={() => {
                        if (!firstPet) {
                            Alert.alert('Nenhum pet cadastrado','Cadastre um pet antes de registrar um cuidado.',);
                            return;
                        }
                        navigation.navigate('CareEventCreate',{petId: firstPet.petId,});
                    }}>
                        <View style={[styles.acaoIcon,styles.acaoIconLaranja]}>
                            <Ionicons name="medical-outline" size={28} color="#D57B45"/>
                        </View>

                        <Text style={styles.acaoTitulo}>Evento de cuidado</Text>
                        <Text style={styles.acaoDescricao}>Consultas e vacinas</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitulo}>Próximos cuidados</Text>
                </View>

                <NextCareEventCard event={nextCareEvent} isLoading={isLoadingCareEvents} />

                
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F5FAFF',
    },

    scrollContent: {
        paddingHorizontal: 22,
        paddingTop: 20,
        paddingBottom: 35,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },

    headerText: {
        flex: 1,
        paddingRight: 15,
    },

    cumprimento: {
        color: '#174F79',
        fontSize: 30,
        fontWeight: '700',
    },

    welcomeText: {
        marginTop: 5,
        color: '#5795D4',
        fontSize: 15,
        lineHeight: 21,
        fontWeight: '500',
    },

    headerButton: {
        width: 54,
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        shadowColor: '#6C9BC4',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 2,
        marginRight: 5,
    },

    cardPrincipal: {
        minHeight: 200,
        marginTop: 25,
        borderRadius: 30,
        backgroundColor: '#DDEFFF',
        overflow: 'hidden',
    },

    cardPrincipalConteudo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 28,
    },

    cardPrincipalTextContainer: {
        flex: 1,
        zIndex: 2,
    },

    cardPrincipalTitulo: {
        maxWidth: 220,
        color: '#174F79',
        fontSize: 24,
        lineHeight: 30,
        fontWeight: '700',
    },

    cardPrincipalDescricao: {
        maxWidth: 225,
        marginTop: 10,
        color: '#547B9A',
        fontSize: 14,
        lineHeight: 21,
    },

    cardPrincipalPetIcon: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: 'rgba(255,255,255,0.72)',
        zIndex: 2,
    },

    circuloMaior: {
        position: 'absolute',
        width: 180,
        height: 180,
        right: -40,
        bottom: -50,
        borderRadius: 90,
        backgroundColor: '#C8E5FF',
    },

    circuloMenor: {
        position: 'absolute',
        width: 90,
        height: 90,
        left: -20,
        top: -20,
        borderRadius: 45,
        backgroundColor: '#EAF6FF',
    },

    petsCard: {
        minHeight: 98,
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 15,
        borderRadius: 24,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E4EFF7',
    },

    petsIconContainer: {
        width: 58,
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#EAF4FF',
    },

    petsConteudo: {
        flex: 1,
        marginLeft: 15,
    },

    petsTitulo: {
        color: '#174F79',
        fontSize: 18,
        fontWeight: '700',
    },

    petsDescricao: {
        marginTop: 4,
        color: '#6C879C',
        fontSize: 13,
        lineHeight: 19,
    },

    sequenciaCard: {
        minHeight: 105,
        marginTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 16,
        borderRadius: 24,
        backgroundColor: '#FFFDF9',
        borderWidth: 1,
        borderColor: '#F7EBDD',
    },

    sequenciaIcon: {
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 19,
        backgroundColor: '#FFF0E5',
    },

    sequenciaConteudo: {
        flex: 1,
        marginHorizontal: 15,
    },

    sequenciaTitulo: {
        color: '#174F79',
        fontSize: 17,
        fontWeight: '700',
    },

    sequenciaDescricao: {
        marginTop: 4,
        color: '#6C879C',
        fontSize: 13,
        lineHeight: 18,
    },

    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },

    
    sectionTitulo: {
        marginTop: 28,
        color: '#174F79',
        fontSize: 21,
        fontWeight: '700',
    },

    acoesRapidas: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 14,
    },

    acoesRapidasRow2: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 12,
        marginBottom: -25
    },

    acaoCard: {
        flex: 1,
        minHeight: 130,
        maxWidth: 170,
        justifyContent: 'center',
        padding: 16,
        borderRadius: 22,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E8F0F6',
    },

    acaoIcon: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
    },

    acaoIconAzul: {
        backgroundColor: '#E7F2FF',
    },

    acaoIconVerde: {
        backgroundColor: '#E7F8F5',
    },

    acaoIconRoxo: {
        backgroundColor: '#F0EEFF',
    },

    acaoIconLaranja: {
        backgroundColor: '#FFF0E6',
    },

    acaoTitulo: {
        marginTop: 11,
        color: '#174F79',
        fontSize: 15,
        fontWeight: '700',
    },

    acaoDescricao: {
        marginTop: 4,
        color: '#7B91A4',
        fontSize: 11,
        lineHeight: 16,
    },

});