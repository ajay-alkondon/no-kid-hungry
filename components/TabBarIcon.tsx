import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';
import { type ComponentProps } from 'react';

// This function now correctly refers to MaterialCommunityIcons in its type definition.
export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof MaterialCommunityIcons>['name']>) {
  return <MaterialCommunityIcons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
