import React, { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import useCreateSameti from './hooks/useCreateSameti';
import { useCreateSametiStyle } from './CreateSametiStyle';
import RenderAppButton from '../../components/button/RenderButton';
import { CommonInterface } from '../../interfaces/commonInterface';
import { INTEREST_TYPE, PENALTY_TYPE } from '../../constants/constants';
import { CREATE_SAMETI, PLACEHOLDER } from '../../constants/stringConstants';
import AppDropdownController from '../../components/dropdown/DropdownController';
import KeyboardScrollView from '../../components/keyboardScrollView/KeyboardScrollView';
import CheckBoxController from '../../controller/CheckBoxController/CheckBoxController';
import AppTextControlInput from '../../controller/TextInputController/TextInputController';

const CreateSameti = () => {
  const { watch, getValues, control, label, handleSubmit } = useCreateSameti();
    const { styles } = useCreateSametiStyle();

    const renderInput = useCallback(
      (controllerName: string, placeholder: string, label: string) => {
        return (
          <AppTextControlInput
            label={label}
            type={controllerName === 'sametiName' ? 'text' : 'number' }
            control={control}
            placeholder={placeholder}
            controllerName={controllerName}
          />
        );
      },
      [control],
    );

    const renderDropdownInput = useCallback(
      (controllerName: string, placeholder: string, label: string, data: CommonInterface[]) => {
        return (
          <AppDropdownController
            data={data}
            label={label}
            valueField={'id'}
            control={control}
            labelField={'title'} 
            placeholder={placeholder}
            controllerName={controllerName} 
          />
        );
      },
      [control],
    );

    const renderCheckBox = useCallback(
      (controllerName: string, label: string) => {
        return (
          <CheckBoxController controllerName={controllerName} control={control} label={label} />
        );
      },
      [control],
    );

    

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <KeyboardScrollView containerStyle={styles.subContainer}>
          {renderInput('sametiName',PLACEHOLDER.sametiName, 'Sameti Name')}
          {renderCheckBox('isFixDuration', CREATE_SAMETI.duration )}
          {watch?.('isFixDuration') && renderInput('fixedDuration',PLACEHOLDER.duration, 'Duration (Year)')}
          {renderCheckBox('isFixDate', CREATE_SAMETI.sametiDate )}
          {watch?.('isFixDate') && renderInput('fixedDate',PLACEHOLDER.sametiDate, 'Date')}
          {renderDropdownInput('interestType',PLACEHOLDER.interestType, 'Interest Type', INTEREST_TYPE)}
          {renderInput('interestRate',PLACEHOLDER.interestRate, 'Interest rate(%)')}
          {renderDropdownInput('shareType',PLACEHOLDER.shareType, 'Enter Share Type', INTEREST_TYPE)}
          {renderInput('shareAmount',PLACEHOLDER.shareAmount, 'Enter Share amount (\u20B9)')}
          {renderCheckBox('isSharePenalty', CREATE_SAMETI.sharePenaty )}
          {watch?.('isSharePenalty') && renderDropdownInput('sharePenaltyType',PLACEHOLDER.penaltyType, 'Share Panalty Type', PENALTY_TYPE)}
          {watch?.('isSharePenalty') && renderInput('sharePenalty',label('sharePenaltyType', 'share' ), label('sharePenaltyType', 'share' ))}
          {renderCheckBox('isInterestPenalty', CREATE_SAMETI.interestPenaty )}
          {watch?.('isInterestPenalty') && renderDropdownInput('interestPenaltyType',PLACEHOLDER.penaltyType, 'Interest Panalty Type', PENALTY_TYPE)}
          {watch?.('isInterestPenalty') && renderInput('interestPenalty',label('interestPenaltyType', 'interest' ), label('interestPenaltyType', 'interest' ))}
          {renderCheckBox('isLoanPenalty', CREATE_SAMETI.interestPenaty )}
          {watch?.('isLoanPenalty') && renderDropdownInput('loanPenaltyType',PLACEHOLDER.penaltyType, 'Loan Panalty Type', PENALTY_TYPE)}
          {watch?.('isLoanPenalty') && renderInput('loanPenalty',label('loanPenaltyType', 'loan' ), label('loanPenaltyType', 'loan' ))}
          {renderCheckBox('isOnlinePayment', CREATE_SAMETI.onlinePayment )}
          {renderCheckBox('isCaseStructure', CREATE_SAMETI.caseStructure )}
          <RenderAppButton 
            title='Create Sameti'
            onPress={handleSubmit(()=> {
              console.log('check data', JSON.stringify(getValues(), null, 4));
            })}
          />
        </KeyboardScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CreateSameti;
