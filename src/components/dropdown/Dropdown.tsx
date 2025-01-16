import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useImperativeHandle,
} from 'react';
import {
  View,
  Modal,
  FlatList,
  Keyboard,
  ViewStyle,
  StatusBar,
  Pressable,
  StyleSheet,
  I18nManager,
  KeyboardEvent,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import _ from 'lodash';
import Svg from '../../assets/svg';
import AppText from '../text/AppText';
import CInput from './components/TextInput';
import { useDropdownStyle } from './DropdownStyle';
import { useDetectDevice } from './hooks/useDetectDevice';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../styles';
import { useDeviceOrientation } from './hooks/useOrientation';
import { DropdownProps } from './interface/DropdownInterface';

const DropdownComponent: <T>(props: DropdownProps<T>) => ReactNode | null =
  React.forwardRef((props, currentRef) => {
    const orientation = useDeviceOrientation();
    const {
      value,
      label,
      onBlur,
      testID,
      onFocus,
      onChange,
      iconStyle,
      data = [],
      renderItem,
      style = {},
      labelField,
      valueField,
      fontFamily,
      searchQuery,
      searchField,
      onChangeText,
      itemTextStyle,
      flatListProps,
      minHeight = 0,
      containerStyle,
      search = false,
      renderLeftIcon,
      itemTestIDField,
      maxHeight = 340,
      inverted = true,
      renderRightIcon,
      disable = false,
      backgroundColor,
      placeholderStyle,
      inputSearchStyle,
      mode = 'default',
      searchPlaceholder,
      autoScroll = true,
      selectedTextStyle,
      renderInputSearch,
      confirmSelectItem,
      iconColor = 'gray',
      accessibilityLabel,
      itemContainerStyle,
      onConfirmSelectItem,
      labelContainer = {},
      labelTextStyle = {},
      selectedTextProps = {},
      activeColor = '#F6F7F8',
      keyboardAvoiding = true,
      dropdownPosition = 'auto',
      placeholder = 'Select item',
      itemAccessibilityLabelField,
      showsVerticalScrollIndicator = true,
    } = props;

    const ref = useRef<View>(null);
    const { isTablet } = useDetectDevice;
    const statusBarHeight: number = StatusBar.currentHeight || 0;
    const refList = useRef<FlatList>(null);
    const [visible, setVisible] = useState<boolean>(false);
    const [currentValue, setCurrentValue] = useState<any>(null);
    const [listData, setListData] = useState<any[]>(data);
    const [position, setPosition] = useState<any>();
    const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
    const [searchText, setSearchText] = useState('');

    const { styles, colors } = useDropdownStyle({});

    const SvgIcon = visible ? Svg.arrowUpIcon : Svg.arrowDownIcon;
    const styleContainerVertical: ViewStyle = useMemo(() => {
      return {
        backgroundColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
      };
    }, []);
    const styleHorizontal: ViewStyle = useMemo(() => {
      return {
        width: orientation === 'LANDSCAPE' ? SCREEN_WIDTH / 2 : '100%',
        alignSelf: 'center',
      };
    }, [orientation]);

    useImperativeHandle(currentRef, () => {
      return { open: eventOpen, close: eventClose };
    });

    useEffect(() => {
      return eventClose;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      setListData([...data]);
      if (searchText) {
        onSearch(searchText);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, searchText]);

    const eventOpen = () => {
      if (!disable) {
        setVisible(true);
        if (onFocus) {
          onFocus();
        }

        if (searchText.length > 0) {
          onSearch(searchText);
        }
        scrollIndex();
      }
    };

    const eventClose = useCallback(() => {
      if (!disable) {
        setVisible(false);
        if (onBlur) {
          onBlur();
        }
      }
    }, [disable, onBlur]);

    const font = useCallback(() => {
      if (fontFamily) {
        return {
          fontFamily: fontFamily,
        };
      } else {
        return {};
      }
    }, [fontFamily]);

    const _measure = useCallback(() => {
      if (ref && ref?.current) {
        ref.current.measureInWindow((pageX, pageY, width, height) => {
          let isFull = isTablet
            ? false
            : mode === 'modal' || orientation === 'LANDSCAPE';

          if (mode === 'auto') {
            isFull = false;
          }

          const top = isFull ? 20 : height + pageY + 2;
          const bottom = SCREEN_HEIGHT - top + height;
          const left = I18nManager.isRTL ? SCREEN_WIDTH - width - pageX : pageX;

          setPosition({
            isFull,
            width: Math.floor(width),
            top: Math.floor(top + statusBarHeight),
            bottom: Math.floor(bottom - statusBarHeight),
            left: Math.floor(left),
            height: Math.floor(height),
          });
        });
      }
    }, [isTablet, mode, orientation, statusBarHeight]);

    const onKeyboardDidShow = useCallback(
      (e: KeyboardEvent) => {
        _measure();
        setKeyboardHeight(e.endCoordinates.height);
      },
      [_measure],
    );

    const onKeyboardDidHide = useCallback(() => {
      setKeyboardHeight(0);
      _measure();
    }, [_measure]);

    useEffect(() => {
      const susbcriptionKeyboardDidShow = Keyboard.addListener(
        'keyboardDidShow',
        onKeyboardDidShow,
      );
      const susbcriptionKeyboardDidHide = Keyboard.addListener(
        'keyboardDidHide',
        onKeyboardDidHide,
      );

      return () => {
        if (typeof susbcriptionKeyboardDidShow?.remove === 'function') {
          susbcriptionKeyboardDidShow.remove();
        }

        if (typeof susbcriptionKeyboardDidHide?.remove === 'function') {
          susbcriptionKeyboardDidHide.remove();
        }
      };
    }, [onKeyboardDidHide, onKeyboardDidShow]);

    const getValue = useCallback(() => {
      const defaultValue =
        typeof value === 'object' ? _.get(value, valueField) : value;

      const getItem = data.filter(e =>
        _.isEqual(defaultValue, _.get(e, valueField)),
      );

      if (getItem.length > 0) {
        setCurrentValue(getItem[0]);
      } else {
        setCurrentValue(null);
      }
    }, [data, value, valueField]);

    useEffect(() => {
      getValue();
    }, [value, data, getValue]);

    const scrollIndex = useCallback(() => {
      if (autoScroll && data.length > 0 && listData.length === data.length) {
        setTimeout(() => {
          if (refList && refList?.current) {
            const defaultValue =
              typeof value === 'object' ? _.get(value, valueField) : value;

            const index = _.findIndex(listData, (e: any) =>
              _.isEqual(defaultValue, _.get(e, valueField)),
            );
            if (index > -1 && index <= listData.length - 1) {
              refList?.current?.scrollToIndex({
                index: index,
                animated: false,
              });
            }
          }
        }, 200);
      }
    }, [autoScroll, data.length, listData, value, valueField]);

    const showOrClose = useCallback(() => {
      if (!disable) {
        if (keyboardHeight > 0 && visible) {
          return Keyboard.dismiss();
        }

        _measure();
        setVisible(!visible);
        setListData(data);

        if (!visible) {
          if (onFocus) {
            onFocus();
          }
        } else {
          if (onBlur) {
            onBlur();
          }
        }
        if (searchText.length > 0) {
          onSearch(searchText);
        }
        scrollIndex();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      disable,
      keyboardHeight,
      visible,
      _measure,
      data,
      searchText,
      scrollIndex,
      onFocus,
      onBlur,
    ]);

    const onSearch = useCallback(
      (text: string) => {
        if (text.length > 0) {
          const defaultFilterFunction = (e: any) => {
            const item = _.get(e, searchField || labelField)
              ?.toLowerCase()
              .replace(' ', '')
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '');
            const key = text
              .toLowerCase()
              .replace(' ', '')
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '');

            return item.indexOf(key) >= 0;
          };

          const propSearchFunction = (e: any) => {
            const labelText = _.get(e, searchField || labelField);

            return searchQuery?.(text, labelText);
          };

          const dataSearch = data.filter(
            searchQuery ? propSearchFunction : defaultFilterFunction,
          );
          setListData(dataSearch);
        } else {
          setListData(data);
        }
      },
      [data, searchField, labelField, searchQuery],
    );

    const onSelect = useCallback(
      (item: any) => {
        if (confirmSelectItem && onConfirmSelectItem) {
          return onConfirmSelectItem(item);
        }

        if (onChangeText) {
          setSearchText('');
          onChangeText('');
        }
        onSearch('');
        setCurrentValue(item);
        onChange?.(item);
        eventClose();
      },
      [
        confirmSelectItem,
        eventClose,
        onChange,
        onChangeText,
        onConfirmSelectItem,
        onSearch,
      ],
    );

    const _renderDropdown = () => {
      const isSelected = currentValue && _.get(currentValue, valueField);
      return (
        <TouchableWithoutFeedback
          testID={testID}
          accessible={!!accessibilityLabel}
          accessibilityLabel={accessibilityLabel}
          onPress={showOrClose}>
          <View style={styles.dropdown}>
            {renderLeftIcon?.(visible)}
            <AppText
              style={[
                styles.textItem,
                isSelected !== null ? selectedTextStyle : placeholderStyle,
                font(),
              ]}
              {...selectedTextProps}>
              {isSelected !== null
                ? _.get(currentValue, labelField)
                : placeholder}
            </AppText>
            {renderRightIcon ? (
              renderRightIcon(visible)
            ) : (
              <Pressable
                style={StyleSheet.flatten([
                  styles.icon,
                  { tintColor: iconColor },
                  iconStyle,
                ])}
                onPress={showOrClose}>
                <SvgIcon fill={colors.lightGray} width={15} height={15} />
              </Pressable>
            )}
          </View>
        </TouchableWithoutFeedback>
      );
    };

    const _renderItem = useCallback(
      ({ item, index }: { item: any; index: number }) => {
        const isSelected = currentValue && _.get(currentValue, valueField);
        const selected = _.isEqual(_.get(item, valueField), isSelected);
        _.assign(item, { _index: index });
        return (
          <TouchableHighlight
            key={index.toString()}
            testID={_.get(item, itemTestIDField || labelField)}
            accessible={!!accessibilityLabel}
            accessibilityLabel={_.get(
              item,
              itemAccessibilityLabelField || labelField,
            )}
            underlayColor={activeColor}
            onPress={() => onSelect(item)}>
            <View
              style={StyleSheet.flatten([
                itemContainerStyle,
                selected && {
                  backgroundColor: activeColor,
                },
              ])}>
              {renderItem ? (
                renderItem(item, selected)
              ) : (
                <View style={styles.item}>
                  <AppText
                    style={StyleSheet.flatten([
                      styles.textItem,
                      itemTextStyle,
                      font(),
                    ])}>
                    {_.get(item, labelField)}
                  </AppText>
                </View>
              )}
            </View>
          </TouchableHighlight>
        );
      },
      [
        accessibilityLabel,
        activeColor,
        currentValue,
        font,
        itemAccessibilityLabelField,
        itemContainerStyle,
        itemTestIDField,
        itemTextStyle,
        labelField,
        onSelect,
        renderItem,
        styles,
        valueField,
      ],
    );

    const renderSearch = useCallback(() => {
      if (search) {
        if (renderInputSearch) {
          return renderInputSearch(text => {
            if (onChangeText) {
              setSearchText(text);
              onChangeText(text);
            }
            onSearch(text);
          });
        } else {
          return (
            <CInput
              testID={testID + ' input'}
              accessibilityLabel={accessibilityLabel + ' input'}
              style={[styles.input, inputSearchStyle]}
              inputStyle={[inputSearchStyle, font()]}
              value={searchText}
              autoCorrect={false}
              placeholder={searchPlaceholder}
              onChangeText={e => {
                if (onChangeText) {
                  setSearchText(e);
                  onChangeText(e);
                }
                onSearch(e);
              }}
              placeholderTextColor="gray"
              iconStyle={[{ tintColor: iconColor }, iconStyle]}
            />
          );
        }
      }
      return null;
    }, [
      font,
      styles,
      search,
      testID,
      onSearch,
      iconColor,
      iconStyle,
      searchText,
      onChangeText,
      inputSearchStyle,
      renderInputSearch,
      searchPlaceholder,
      accessibilityLabel,
    ]);

    const _renderList = useCallback(
      (isTopPosition: boolean) => {
        const isInverted = !inverted ? false : isTopPosition;

        const _renderListHelper = () => {
          return (
            <FlatList
              testID={testID + ' flatlist'}
              accessibilityLabel={accessibilityLabel + ' flatlist'}
              {...flatListProps}
              keyboardShouldPersistTaps="handled"
              ref={refList}
              onScrollToIndexFailed={scrollIndex}
              data={listData}
              inverted={isTopPosition ? inverted : false}
              renderItem={_renderItem}
              keyExtractor={(_item, index) => index.toString()}
              showsVerticalScrollIndicator={showsVerticalScrollIndicator}
            />
          );
        };

        return (
          <TouchableWithoutFeedback>
            <View style={styles.flexShrink}>
              {isInverted && _renderListHelper()}
              {renderSearch()}
              {!isInverted && _renderListHelper()}
            </View>
          </TouchableWithoutFeedback>
        );
      },
      [
        inverted,
        styles,
        renderSearch,
        testID,
        accessibilityLabel,
        flatListProps,
        scrollIndex,
        listData,
        _renderItem,
        showsVerticalScrollIndicator,
      ],
    );

    const _renderModal = useCallback(() => {
      if (visible && position) {
        const { isFull, width, height, top, bottom, left } = position;

        const onAutoPosition = () => {
          if (keyboardHeight > 0) {
            return bottom < keyboardHeight + height;
          }

          return bottom < (search ? 150 : 100);
        };

        if (width && top && bottom) {
          const styleVertical: ViewStyle = {
            left: left,
            maxHeight: maxHeight,
            minHeight: minHeight,
          };
          const isTopPosition =
            dropdownPosition === 'auto'
              ? onAutoPosition()
              : dropdownPosition === 'top';

          let keyboardStyle: ViewStyle = {};

          let extendHeight = !isTopPosition ? top : bottom;
          if (
            keyboardAvoiding &&
            keyboardHeight > 0 &&
            isTopPosition &&
            dropdownPosition === 'auto'
          ) {
            extendHeight = keyboardHeight;
          }

          return (
            <Modal
              transparent
              statusBarTranslucent
              visible={visible}
              supportedOrientations={['landscape', 'portrait']}
              onRequestClose={showOrClose}>
              <TouchableWithoutFeedback onPress={showOrClose}>
                <View
                  style={StyleSheet.flatten([
                    styles.flex1,
                    isFull && styleContainerVertical,
                    backgroundColor && { backgroundColor: backgroundColor },
                    keyboardStyle,
                  ])}>
                  <View
                    style={StyleSheet.flatten([
                      styles.flex1,
                      !isTopPosition
                        ? { paddingTop: extendHeight }
                        : {
                            justifyContent: 'flex-end',
                            paddingBottom: extendHeight,
                          },
                      isFull && styles.fullScreen,
                    ])}>
                    <View
                      style={StyleSheet.flatten([
                        styles.container,
                        isFull ? styleHorizontal : styleVertical,
                        {
                          width,
                        },
                        containerStyle,
                      ])}>
                      {_renderList(isTopPosition)}
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          );
        }
        return null;
      }
      return null;
    }, [
      search,
      styles,
      visible,
      position,
      maxHeight,
      minHeight,
      showOrClose,
      _renderList,
      keyboardHeight,
      containerStyle,
      backgroundColor,
      styleHorizontal,
      dropdownPosition,
      keyboardAvoiding,
      styleContainerVertical,
    ]);

    const _renderLabel = useCallback(() => {
      return label ? (
        <View style={[styles.labelContainer, labelContainer]}>
          <AppText style={[styles.labelTextStyle, labelTextStyle]}>
            {label}
          </AppText>
        </View>
      ) : (
        <></>
      );
    }, [label, labelContainer, labelTextStyle, styles]);

    return (
      <View>
        {_renderLabel()}
        <View
          style={StyleSheet.flatten([styles.mainWrap, style])}
          ref={ref}
          onLayout={_measure}>
          {_renderDropdown()}
          {_renderModal()}
        </View>
      </View>
    );
  });

export default DropdownComponent;
