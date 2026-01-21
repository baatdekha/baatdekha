import { type IconType } from 'react-icons';

export interface MenuItemType {
  id: string;
  label: string;
  icon: IconType;
  path: string;
  exact?: boolean; // Determines if strict path matching is used
}

export interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItemType[]; // Pass items dynamically
  className?: string;
}
