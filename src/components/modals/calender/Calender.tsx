import moment from 'moment';
import { View } from 'react-native';
import { useCalenderStyle } from './CalenderStyle';
import { Calendar } from 'react-native-calendars';
import React, { useEffect, useState } from 'react';
import { closeModal } from '../../../helpers/utils';
import { dateSeqFormat } from '../../../helpers/helper';
import { MODALS } from '../../../constants/routeConstant';
import FooterButton from '../../footerButton/FooterButton';
import { UsableModalComponentProp, ModalfyParams } from 'react-native-modalfy';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const Calender: React.FC<Props> = ({ modal }) => {
  const selectedDate = modal.getParam(
    'date',
    dateSeqFormat(new Date().toString()),
  );
  const { styles, colors } = useCalenderStyle();
  const disableDate = modal.getParam('disableDate');
  const deliveryDate = modal.getParam('deliveryDate');
  const [date, setDate] = useState<string>(selectedDate);
  const onConfirm = modal.getParam('onConfirm', () => {});
  const [markedDates, setMarkedDates] = useState<object>({});

  const updateWeekends = (d: any) => {
    const year = new Date(d).getFullYear();
    const month = new Date(d).getMonth() + 1;
    const disableDateArray = disableDate
      ? disableDate.split(',').map(Number)
      : [];
    const weekends: any = {};
    const daysInMonth = moment(`${year}-${month}`, 'YYYY-MM').daysInMonth();

    const disabledDates = new Set();
    const today = new Date();
    if (deliveryDate) {
      for (let i = 0; i < deliveryDate; i++) {
        const dateToDisable = new Date(today);
        dateToDisable.setDate(today.getDate() + i);
        disabledDates.add(dateToDisable.toISOString().split('T')[0]);
      }
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
      if (deliveryDate) {
        if (disabledDates.has(currentDate.toISOString().split('T')[0])) {
          weekends[currentDate.toISOString().split('T')[0]] = {
            disabled: true,
            disableTouchEvent: true,
          };
        }
      }

      if (disableDateArray.includes(currentDate.weekday())) {
        weekends[currentDate.format('YYYY-MM-DD')] = {
          disableTouchEvent: true,
          disabled: true,
        };
      }
    }
    setMarkedDates(weekends);
  };

  useEffect(() => {
    updateWeekends(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onConfirmPress = () => {
    onConfirm(date);
    closeModal(MODALS.calender);
  };

  return (
    <View style={styles.container}>
      <Calendar
        date={date}
        current={date}
        hideExtraDays
        minDate={new Date().toString()}
        onDayPress={(day: { dateString: React.SetStateAction<string> }) =>
          setDate(day.dateString)
        }
        onMonthChange={(day: { dateString: any }) =>
          updateWeekends(day.dateString)
        }
        markedDates={{
          [date]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: colors.primary,
          },
          ...markedDates,
        }}
      />
      <FooterButton
        borderRadius={26}
        cancelLabel="Cancel"
        confirmLabel="Confirm"
        onPressConfirm={onConfirmPress}
        onPressCancel={() => closeModal(MODALS.calender)}
      />
    </View>
  );
};

export default Calender;
