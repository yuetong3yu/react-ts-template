import { useEffect, useRef } from 'react';

export const VirtualKeyboard = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const focusTextarea = () => {
    textareaRef.current?.focus();
  };

  useEffect(() => {
    focusTextarea();
  }, []);

  return (
    <textarea
      ref={textareaRef}
      onBlur={focusTextarea}
      onKeyDown={(e) => {
        console.log(e.code);
      }}
    />
  );
};
