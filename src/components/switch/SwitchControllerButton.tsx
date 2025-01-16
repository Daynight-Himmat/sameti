import React from 'react';
import SwitchButton from './Switch';
import AppText from '../text/AppText';
import { useSwitchStyle } from './SwitchStyle';
import { Controller, Control, FieldValues } from 'react-hook-form';

interface Props {
  leftText?: string;
  rightText?: string;
  controllerName: string;
  control: Control<FieldValues> | undefined;
}

const SwitchController = React.memo(
  ({ control, leftText, rightText, controllerName }: Props) => {
    const { styles } = useSwitchStyle();
    return (
      <Controller
        control={control}
        name={controllerName}
        render={({ fieldState: { error }, field: { onChange, value } }) => (
          <>
            <SwitchButton
              isSelect={value}
              leftText={leftText}
              rightText={rightText}
              setSwitchValue={onChange}
            />
            {error && (
              <AppText style={styles.errorText}>{error?.message}</AppText>
            )}
          </>
        )}
      />
    );
  },
);

export default SwitchController;
