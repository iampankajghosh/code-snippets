export interface ISidebarItem {
  id: string;
  title: string;
  href: string;
  icon?: React.ReactNode;
}

export interface IStateCardProps {
  title: string;
  value: number | string;
  change?: string;
  changeColor?: string;
  subText?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}
