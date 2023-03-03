import { View } from 'react-native';
import InfoScreen from '../../../molecules/global/InfoScreen';

export default function CartInfoScreen({ text }) {
  return (
    <View>
      <InfoScreen title={text} />
    </View>
  );
};
