export type PublicStackParamList = {
    Inicio: undefined;
    Login: undefined;
    CadastroUser: undefined;
    CadastroPet: undefined;
    CadastroVeterinarian: undefined;
};

export type TutorTabParamList = {
    TutorHome: undefined;
    Journey: undefined;
    Community: undefined;
    TutorProfile: undefined;
};

export type TutorStackParamList = {
    TutorTabs: undefined;
    PetsTutor: undefined;
    DailyPetLogCreate: {petId: number;};
    CommunityPostCreate: undefined;
    PetMonitoringCreate: {petId: number;};
    Achievements: undefined;
    CareEventCreate: {petId: number;};
    NotificationSettings: undefined;
};

export type VeterinarianTabParamList = {
    VeterinarianHome: undefined;
    Patients: undefined;
    Community: undefined;
    VeterinarianProfile: undefined;
};

export type VeterinarianStackParamList = {
    VeterinarianTabs: undefined;
    Community: undefined;
    CommunityPostCreate: undefined;
    Patients: undefined;
    Insights: undefined;
};

export type CommunityStackParamList = {
    Community: undefined;
    CommunityPostCreate: undefined;
};