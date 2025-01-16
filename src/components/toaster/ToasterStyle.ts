import { SPACING } from '../../styles';
import { StyleSheet } from 'react-native';

export const createStyles = (colors: any) =>
  StyleSheet.create({
    toast: {
      right: 0,
      bottom: 0,
      width: '80%',
      position: 'absolute',
    },
    content: {
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      padding: SPACING.s16,
      backgroundColor: colors.primary,
    },
    toastMessageContainer: {
      flex: 1,
      paddingLeft: SPACING.s18,
      justifyContent: 'flex-start',
    },
    titleText: {
      fontSize: 18,
      color: 'white',
    },
    messageText: {
      flex: 1,
      fontSize: 16,
      color: 'white',
    },
  });
