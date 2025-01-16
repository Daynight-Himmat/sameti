import React from 'react';
import AppText from './AppText';
import { useAppTextStyle } from './AppTextStyle';

interface Props {
  label: string;
  isRequired?: boolean;
}
export const Label = React.memo(({ label }: Props) => {
  const styles = useAppTextStyle({});
  return (
    <AppText style={styles.label} fontFamily="regular">
      {label}
    </AppText>
  );
});

export const SubLabel = React.memo(({ label }: Props) => {
  const styles = useAppTextStyle({});
  return <AppText style={[styles.label, styles.subLabel]}>{label}</AppText>;
});

export const Error = React.memo(({ error }: { error: string }) => {
  const styles = useAppTextStyle({});
  return <AppText style={styles.error}>{error}</AppText>;
});
