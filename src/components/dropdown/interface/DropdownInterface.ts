import type {
  StyleProp,
  TextStyle,
  ViewStyle,
  TextProps,
  ImageStyle,
  FlatListProps,
} from 'react-native';

export type IDropdownRef = {
  open: () => void;
  close: () => void;
};

export interface DropdownProps<T> {
  ref?:
    | React.RefObject<IDropdownRef>
    | React.MutableRefObject<IDropdownRef>
    | null
    | undefined;
  data: T[];
  control?: any;
  testID?: string;
  search?: boolean;
  disable?: boolean;
  maxHeight?: number;
  iconColor?: string;
  minHeight?: number;
  inverted?: boolean;
  fontFamily?: string;
  labelField: keyof T;
  valueField: keyof T;
  onBlur?: () => void;
  activeColor?: string;
  placeholder?: string;
  onFocus?: () => void;
  autoScroll?: boolean;
  searchField?: keyof T;
  controllerName?: string;
  itemTestIDField?: string;
  backgroundColor?: string;
  keyboardAvoiding?: boolean;
  searchPlaceholder?: string;
  confirmSelectItem?: boolean;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
  onChange?: (item: T) => void;
  selectedTextProps?: TextProps;
  label?: string | undefined;
  renderInputSearch?: (
    onSearch: (text: string) => void,
  ) => JSX.Element | null | undefined;
  iconStyle?: StyleProp<ImageStyle>;
  mode?: 'default' | 'modal' | 'auto';
  itemTextStyle?: StyleProp<TextStyle>;
  itemAccessibilityLabelField?: string;
  value?: T | string | null | undefined;
  labelContainer?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  labelTextStyle?: StyleProp<TextStyle>;
  showsVerticalScrollIndicator?: boolean;
  placeholderStyle?: StyleProp<TextStyle>;
  inputSearchStyle?: StyleProp<TextStyle>;
  onChangeText?: (search: string) => void;
  onConfirmSelectItem?: (item: T) => void;
  selectedTextStyle?: StyleProp<TextStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  dropdownPosition?: 'auto' | 'top' | 'bottom';
  searchQuery?: (keyword: string, labelValue: string) => boolean;
  flatListProps?: Omit<FlatListProps<any>, 'renderItem' | 'data'>;
  renderItem?: (item: T, selected?: boolean) => JSX.Element | null | undefined;
  renderRightIcon?: (visible?: boolean) => JSX.Element | null | undefined;
  renderLeftIcon?: (visible?: boolean) => JSX.Element | null | undefined;
}

export interface IUseDetectDevice {
  isAndroid: boolean;
  isIOS: boolean;
  isTablet: boolean;
}
