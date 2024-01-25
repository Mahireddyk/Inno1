import { Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ImageScreen = () => {
  const route = useRoute();
  const { uri } = route.params;

  return <Image source={{ uri }} style={{ width: '100%', height: '100%' }} />;
};

export default ImageScreen;