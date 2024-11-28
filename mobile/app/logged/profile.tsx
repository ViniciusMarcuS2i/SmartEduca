import { useContext } from "react";
import { Image, Text, View } from "react-native";
import { AuthContext } from "../_contexts/authContext";
import ProfileOption from "../_components/profileOption";
import { LinearGradient } from "expo-linear-gradient";
import { logo } from "../_assets/images";

function Profile() {
  const { currentUser } = useContext(AuthContext);

  return (
    <LinearGradient
      colors={["#1fcdff", "#b2e3f7", "#d4f7ff"]}
      className="flex-1 bg-[#f2f2f2] pt-16"
    >
      <View className="flex-row items-center gap-4 px-6">
        <Image
          source={logo}
          className="h-20 w-20 rounded-full border-2 border-white"
          resizeMode="contain"
        />
        <View>
          <Text className="font-poppinsBold text-[20px] text-white">
            Oi, {currentUser.name}!
          </Text>
          <Text className="w-96 font-sans text-white">
            Bem vindo ao seu perfil.
          </Text>
        </View>
      </View>
      <View className="mt-8 flex-1 rounded-s-[50px] bg-white px-8 pt-12">
        <Text className="mb-10 font-poppinsMedium text-xl">Dodos da conta</Text>
        <View className="gap-10">
          <ProfileOption icon="person-outline" title="Dados do perfil" />
          <ProfileOption icon="notifications-outline" title="Notificações" />
          <ProfileOption icon="archive-outline" title="Aulas arquivadas" />
          <ProfileOption icon="shield-outline" title="Segurança" />
          <ProfileOption icon="information-circle-outline" title="Sobre nós" />
          <ProfileOption icon="help-outline" title="Ajuda" />
        </View>
      </View>
    </LinearGradient>
  );
}

export default Profile;
