import HTML, {
  IMGElementProps,
  RenderHTMLProps,
  HTMLContentModel,
  HTMLElementModel,
  defaultSystemFonts,
  useIMGElementProps,
  HTMLElementModelRecord,
  defaultHTMLElementModels,
} from 'react-native-render-html';
import React from 'react';
import { FONTS, SCREEN_WIDTH } from '../../styles';
import { useResponsiveScreen } from '../../hooks';
import useRenderHTMLStyle from './RenderHTMLStyle';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

interface Props {
  height?: any;
  htmlContent: string;
  customerStyle?: string;
  baseStyleColor?: string;
  htmlModelRecord?: HTMLElementModelRecord;
}

const windowWidth = Dimensions.get('window').width;

const RenderHTML = React.memo(
  ({ htmlContent, height, baseStyleColor, ...rest }: Props) => {
    const { hp, wp } = useResponsiveScreen();
    const { styles, colors } = useRenderHTMLStyle();
    const baseStyle = StyleSheet.create({
      base: {
        height: height,
        overflow: 'hidden',
        flexWrap: 'nowrap',
        textAlign: 'justify',
        fontFamily: FONTS.regular,
        color: baseStyleColor ? baseStyleColor : colors?.green,
      },
    }).base;
    const systemFonts = [...defaultSystemFonts, FONTS.regular];

    const customImageRenderer = (props: any) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const imgElementProps: IMGElementProps = useIMGElementProps(props);
      return (
        <View style={styles.imageView}>
          <Image
            source={{ uri: imgElementProps?.source?.uri }}
            resizeMode="contain"
            resizeMethod="resize"
            style={styles.image}
          />
        </View>
      );
    };

    const customHTMLElementModels = {
      label: HTMLElementModel.fromCustomModel({
        tagName: 'label',
        mixedUAStyles: {
          width: '100%',
          alignSelf: 'center',
          fontWeight: 'bold',
          fontFamily: FONTS.bold,
          paddingVertical: hp(10),
        },
        contentModel: HTMLContentModel.block,
      }),
      h4: HTMLElementModel.fromCustomModel({
        tagName: 'h4',
        mixedUAStyles: {
          width: '100%',
          paddingVertical: hp(10),
        },
        contentModel: HTMLContentModel.block,
      }),
      p: HTMLElementModel.fromCustomModel({
        tagName: 'p',
        mixedUAStyles: {
          fontSize: 14,
          width: '100%',
          fontWeight: '500',
          color: baseStyle?.color,
          fontFamily: FONTS?.regular,
        },
        contentModel: HTMLContentModel.block,
      }),
      img: defaultHTMLElementModels.img.extend({
        contentModel: HTMLContentModel.mixed,
        mixedUAStyles: {
          borderRadius: 5,
        },
      }),
      table: HTMLElementModel.fromCustomModel({
        tagName: 'table',
        mixedUAStyles: {
          borderWidth: 1,
          borderColor: '#ccc',
          marginTop: 10,
          alignSelf: 'center',
          justifyContent: 'center',
          width: SCREEN_WIDTH * 0.75,
          overflow: 'hidden',
        },
        contentModel: HTMLContentModel.block,
      }),
      br: HTMLElementModel.fromCustomModel({
        tagName: 'br',
        mixedUAStyles: {
          width: '100%',
          paddingTop: hp(6),
        },
        contentModel: HTMLContentModel.block,
      }),
      li: HTMLElementModel.fromCustomModel({
        tagName: 'li',
        mixedUAStyles: {
          color: colors?.gray,
          paddingLeft: wp(10),
          fontFamily: FONTS?.regular,
          paddingHorizontal: wp(10),
          fontWeight: '400',
          fontSize: 14,
        },
        contentModel: HTMLContentModel.block,
      }),
      span: HTMLElementModel.fromCustomModel({
        tagName: 'span',
        mixedUAStyles: {
          fontSize: 14,
          color: colors?.white,
          fontFamily: FONTS?.regular,
        },
        contentModel: HTMLContentModel.block,
      }),
    };

    // const htmlContainer =

    const renderHTMLProps: RenderHTMLProps = {
      baseStyle,
      renderers: {
        img: customImageRenderer,
      },
      ignoredDomTags: ['o:p'],
      systemFonts: systemFonts,
      contentWidth: windowWidth,
      source: { html: htmlContent },
      customHTMLElementModels: customHTMLElementModels,
    };

    const renderersProps = {
      img: {
        enableExperimentalPercentWidth: true,
      },
    };

    return (
      <View style={styles.container}>
        <HTML
          tagsStyles={styles}
          {...renderHTMLProps}
          renderersProps={renderersProps}
          {...rest}
        />
      </View>
    );
  },
);

export default RenderHTML;
