import { useCallback, useState } from 'react';

const useDropdown = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const onDropOpen = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  return {
    isOpen,
    setOpen,
    onDropOpen,
  };
};

export default useDropdown;
