import { useContext } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../_contexts/authContext";
import { SafeAreaView } from "react-native-safe-area-context";

import ProfileOption from "../_components/profileOption";

function Profile() {
  const { currentUser } = useContext(AuthContext);

  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <View className="px-6">
        <Text className="font-poppinsSemi text-2xl">
          Olá, {currentUser.name}
        </Text>
        <Text className="w-96 font-sans text-[#636d77]">
          Aqui você pode gerenciar seu perifl e configurações da sua conta!
        </Text>
      </View>
      <View className="mt-14 gap-10 px-6">
        <ProfileOption icon="person-outline" title="Perfil" />
        <ProfileOption icon="notifications-outline" title="Notificações" />
        <ProfileOption icon="archive-outline" title="Aulas arquivadas" />
        <ProfileOption icon="shield-outline" title="Segurança" />
        <ProfileOption icon="information-circle-outline" title="Sobre nós" />
        <ProfileOption icon="help-outline" title="Ajuda" />
      </View>
    </SafeAreaView>
  );
}

export default Profile;
