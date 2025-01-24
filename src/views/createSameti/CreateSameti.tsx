import React, { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import useCreateSameti from './hooks/useCreateSameti';
import { useCreateSametiStyle } from './CreateSametiStyle';
import { PLACEHOLDER } from '../../constants/stringConstants';
import KeyboardScrollView from '../../components/keyboardScrollView/KeyboardScrollView';
import AppTextControlInput from '../../controller/TextInputController/TextInputController';
import CheckBoxController from '../../controller/CheckBoxController/CheckBoxController';
import CheckBox from '../../components/checkBox/CheckBox';

const CreateSameti = () => {
  const { control } = useCreateSameti();
    const { styles } = useCreateSametiStyle();

    const renderInput = useCallback(
      (controllerName: string, placeholder: string, label: string) => {
        return (
          <AppTextControlInput
            label={label}
            control={control}
            placeholder={placeholder}
            controllerName={controllerName}
          />
        );
      },
      [control],
    );


    return (
        <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <KeyboardScrollView containerStyle={styles.subContainer}>
          {renderInput('name',PLACEHOLDER.name, 'Enter sameti name')}
          <CheckBoxController controllerName={'chekc'} control={control} label={''} />
        </KeyboardScrollView>
      </View>
    </SafeAreaView>
    );
};

export default CreateSameti;
