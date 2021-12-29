import * as ImagePicker from "expo-image-picker";
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';

export async function CompressImage(uri: string) {
    const manipResult = await manipulateAsync(
        uri,
        [
            {
                resize: {
                    height: 420,
                    width: 480,
                }
            }
        ],
        { compress: 0.2, format: SaveFormat.PNG,base64:true }
    );
    return manipResult.base64;
}

export async function pickImage() {
  let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [8, 8],
      quality: 0.2,
  });

  if (!result.cancelled) {
      var compressedImg = await CompressImage(result.uri);
      var image = `data:image/png;base64,${compressedImg}`;
      return image;
  }
  return null;
}
