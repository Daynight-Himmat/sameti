import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../constants/routeConstant";

const useHome = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList, 'home'>>();

    return {
        navigation
    };
}

export default useHome;