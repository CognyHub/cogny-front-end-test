import { CommonActions, useNavigation } from '@react-navigation/native';

export const useNavigate = (screenName) => {
  const navigation = useNavigation();

  const navigateToScreen = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: screenName,
        params: { screen: screenName },
      })
    );
  };

  return navigateToScreen;
};
