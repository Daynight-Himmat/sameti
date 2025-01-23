import React from 'react';
import AppText from '../text/AppText';
import { useErrorMessageStyle } from './ErrorMessageStyle';

interface Props {
    error?: string;
 }

const ErrorMessage = React.memo(({error}:Props) => {
    const { styles } = useErrorMessageStyle();
    return (!!error && <AppText style={styles.error}>{error}</AppText>);
});

export default ErrorMessage;
