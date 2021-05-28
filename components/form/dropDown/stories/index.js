/**
 * External dependencies
 */
import { __ } from '@web-stories-wp/i18n';

/**
 * Internal dependencies
 */
import { useState } from 'react';
import DropDown from '../';

export default {
  title: 'Stories Editor/Components/DropDown',
  component: DropDown,
};

export const _default = () => {
  const [fontStyle, setFontStyle] = useState('normal');
  const fontStyles = [
    { name: __('Normal', 'web-stories'), value: 'normal' },
    { name: __('Italic', 'web-stories'), value: 'italic' },
    { name: __('Underline', 'web-stories'), value: 'underline' },
  ];

  return (
    <DropDown
      aria-label={__('Font style', 'web-stories')}
      options={fontStyles}
      value={fontStyle}
      onChange={(value) => setFontStyle(value)}
    />
  );
};
