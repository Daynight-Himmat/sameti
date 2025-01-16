import { View } from 'react-native';
import AppText from '../text/AppText';
import React, { ReactNode } from 'react';
import DropdownComponent from './Dropdown';
import { Controller } from 'react-hook-form';
import { useDropdownStyle } from './DropdownStyle';
import { DropdownProps } from './interface/DropdownInterface';

const AppDropdownController: <T>(props: DropdownProps<T>) => ReactNode | null =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  React.forwardRef((props, currentRef) => {
    const {
      data,
      label,
      control,
      labelField,
      valueField,
      placeholder,
      controllerName,
      containerStyle,
      ...rest
    } = props;

    const { styles, colors } = useDropdownStyle({});

    return (
      <Controller
        control={control}
        name={controllerName || 'text'}
        render={({
          fieldState: { error },
          field: { onChange, value, onBlur },
        }) => (
          <View style={styles.mainContainer}>
            <DropdownComponent
              data={data}
              label={label}
              value={value}
              onBlur={onBlur}
              labelField={labelField}
              valueField={valueField}
              placeholder={placeholder}
              containerStyle={containerStyle}
              activeColor={colors.grayishBlue}
              labelTextStyle={styles.labelText}
              itemTextStyle={styles.dropdownText}
              onChange={e => onChange(e[valueField])}
              placeholderStyle={styles.itemContainer}
              selectedTextStyle={styles.selectionText}
              style={[styles.dropdownContainer, error && styles.errorWrapper]}
              {...rest}
            />
            {error && <AppText style={styles.error}>{error?.message}</AppText>}
          </View>
        )}
      />
    );
  });

export default AppDropdownController;
