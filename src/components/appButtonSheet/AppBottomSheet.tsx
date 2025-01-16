import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Pressable,
  StyleProp,
  TextStyle,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import AppText from '../text/AppText';
import SvgIcon from '../../assets/svg';
import { clone, remove } from 'lodash';
import EmptyView from '../empty/EmptyView';
import SvgButton from '../svgButton/SvgButton';
import { openModal } from '../../helpers/utils';
import { MODALS } from '../../constants/routeConstant';
import { TEXTINPUT_ICON_SIZE } from '../../constants/constants';
import { SearchData } from '../../interfaces/searchAddressData';
import { ListTypes } from '../../interfaces/listTypes/listType';
import { useAppTextInputStyle } from '../textInput/AppTextInputStyle';

interface props {
  value?: any;
  control?: any;
  inputRef?: any;
  label?: string;
  prefix?: string;
  type?: ListTypes;
  address?: boolean;
  required?: boolean;
  labelField?: string;
  placeholder?: string;
  isShowButton?: boolean;
  floatingLabel?: boolean;
  controllerName?: string;
  error?: string | undefined;
  item?: object[] | undefined;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onSubmitPress?: (item: any) => void;
  onIconPress?: () => void | undefined;
  leftIconStyle?: StyleProp<ViewStyle>;
  rightIconStyle?: StyleProp<ViewStyle>;
  leftIcon?: keyof typeof SvgIcon | null;
  floatingLabelStyle?: StyleProp<TextStyle>;
  icon: keyof typeof SvgIcon | React.JSX.Element;
  rightIcon?: keyof typeof SvgIcon | React.JSX.Element;
  onChange?:
    | ((...event: any[]) => void)
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void);
}

const AppBottomSheetContainer = ({
  icon,
  type,
  item,
  error,
  style,
  label,
  value,
  prefix,
  address,
  onChange,
  leftIcon,
  required,
  rightIcon,
  textStyle,
  labelField,
  titleStyle,
  labelStyle,
  onIconPress,
  placeholder,
  isShowButton,
  floatingLabel,
  leftIconStyle,
  onSubmitPress,
  rightIconStyle,
  floatingLabelStyle,
}: props) => {
  const [isFocused] = useState(false);
  const { styles, colors } = useAppTextInputStyle({});

  const SvgLeft = leftIcon && SvgIcon[leftIcon];
  const [data, setData] = useState<any>(value);

  const handleCheck = useCallback(
    (items: any) => {
      const cloneData = clone(value);
      const removeData: any = remove(cloneData, (i: any) => items?.id !== i);
      onChange?.(removeData);
    },
    [onChange, value],
  );

  const renderChipTiles = useCallback(
    (renderItem: any) => (
      <Pressable
        onPress={() => {
          handleCheck(renderItem);
        }}
        style={styles.item}>
        <View style={styles.titleContainer}>
          <AppText numberOfLines={1} style={[styles.title, titleStyle]}>
            {renderItem?.[`${labelField}`]}
          </AppText>
        </View>
        <SvgButton
          size={5}
          icon={'clearIcon'}
          iconColor={colors.white}
          style={styles.cancelIconContainer}
          onPress={() => handleCheck(renderItem)}
        />
      </Pressable>
    ),
    [colors, handleCheck, labelField, styles, titleStyle],
  );

  const renderRadio = useCallback(
    (renderItem: any) => (
      <View style={styles.labelContainer}>
        <AppText numberOfLines={1} style={[styles.valueText, titleStyle]}>
          {renderItem?.[`${labelField}`]}
        </AppText>
      </View>
    ),
    [labelField, styles, titleStyle],
  );

  const renderAddress = useCallback(
    (renderItem: any) => (
      <View style={styles.labelContainer}>
        <AppText
          numberOfLines={1}
          fontFamily={'medium'}
          style={[styles.valueText, titleStyle]}>
          {renderItem?.[`${labelField}`]}
        </AppText>
      </View>
    ),
    [labelField, styles, titleStyle],
  );

  const renderItems = ({ item: renderItem }: { item?: SearchData | any }) => {
    return type === 'check'
      ? renderChipTiles(renderItem)
      : type === 'address'
      ? renderAddress(renderItem)
      : renderRadio(renderItem);
  };

  useEffect(() => {
    if (typeof value === 'number') {
      const cloneData = item && item?.filter((i: any) => i?.id === value);
      setData(cloneData);
    }
    if (Array.isArray(value)) {
      const arrayData =
        item &&
        item?.filter((i: any) => value.length !== 0 && value?.includes(i?.id));
      setData(arrayData);
    } else if (typeof value === 'string') {
      const stringData: object = [
        {
          [`${labelField}`]: value,
        },
      ];
      setData(stringData);
    }
  }, [item, labelField, value]);

  const onPress = () => {
    openModal(MODALS.bottomSheet, {
      type: type,
      item: item,
      value: value,
      address: address,
      onChange: onChange,
      nameKey: labelField,
      rightIcon: rightIcon,
      isShowButton: isShowButton,
      onSubmitPress: onSubmitPress,
    });
  };

  const renderEmpty = useCallback(
    () => (
      <EmptyView
        emptyText={placeholder}
        textStyle={styles.noDataText}
        containerStyle={styles.noDataContainer}
      />
    ),
    [styles, placeholder],
  );

  return (
    <>
      {label && !floatingLabel ? (
        <AppText style={[styles.label, labelStyle]}>
          {label}
          {required ? (
            <AppText style={[styles.label, styles.required]}>*</AppText>
          ) : null}
        </AppText>
      ) : null}
      <View style={styles.margin}>
        <View
          style={[
            styles.container,
            style,
            error ? styles.errorWrapper : {},
            prefix ? styles.prefixContainer : {},
          ]}>
          {(label && floatingLabel && value) || isFocused ? (
            <AppText style={[styles.floatingLabel, floatingLabelStyle]}>
              {label}
            </AppText>
          ) : null}
          {leftIcon ? (
            <View style={[styles.leftIcon, leftIconStyle]}>
              {SvgLeft && (
                <SvgLeft fill={colors.grayishBlue} width={18} height={18} />
              )}
            </View>
          ) : null}
          {prefix ? (
            <AppText style={[styles.prefixTextStyles, textStyle]}>
              {prefix}
            </AppText>
          ) : null}
          <View style={styles.inputStyle}>
            <Pressable style={styles.valueContainer} onPress={onPress}>
              <FlatList
                data={data}
                numColumns={1}
                horizontal={true}
                renderItem={renderItems}
                ListEmptyComponent={renderEmpty}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContainer}
              />
            </Pressable>
          </View>
          {icon && (
            <SvgButton
              icon={icon}
              size={TEXTINPUT_ICON_SIZE}
              style={[styles.rightIcon, rightIconStyle]}
              onPress={onIconPress ? onIconPress : onPress}
              iconColor={isFocused ? colors.primary : colors.gray}
            />
          )}
        </View>
        {error && <AppText style={styles.error}>{error}</AppText>}
      </View>
    </>
  );
};

export default AppBottomSheetContainer;
