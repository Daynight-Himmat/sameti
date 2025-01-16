import React, { useCallback, useState } from 'react';
import {
  View,
  Image,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import NoImage from '../noImage/NoImage';
import SvgButton from '../svgButton/SvgButton';
import { useImageContainerStyle } from './ImageContainerStyle';

interface Props {
  source?: string;
  clintUrl?: string;
  type?: 'store' | 'product';
  style?: StyleProp<ViewStyle>;
  onInstallerPress?: () => void;
}

const CustomImage = ({
  source,
  style,
  clintUrl,
  onInstallerPress,
  type = 'product',
}: Props) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { styles, colors } = useImageContainerStyle();

  const handleImageError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const imageSource = hasError || !source ? null : { uri: source };

  const renderLoader = useCallback(() => {
    return (
      isLoading && (
        <ActivityIndicator
          size="small"
          style={styles.loader}
          color={colors?.darkGray}
        />
      )
    );
  }, [colors, isLoading, styles]);

  const renderNoImage = useCallback(
    () => <NoImage height={100} width={100} />,
    [],
  );

  return type === 'product' ? (
    <View style={[styles.container, style]}>
      {renderLoader()}
      {imageSource ? (
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode={'contain'}
          resizeMethod={'scale'}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      ) : (
        renderNoImage()
      )}
      {clintUrl && (
        <SvgButton
          size={30}
          icon={'installerIcon'}
          style={styles.installer}
          onPress={onInstallerPress}
        />
      )}
    </View>
  ) : (
    <View style={[styles.container, imageSource && style]}>
      {renderLoader()}
      {imageSource && (
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode={'contain'}
          resizeMethod={'scale'}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
    </View>
  );
};

export default CustomImage;
