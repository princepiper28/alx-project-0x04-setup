export interface PageRouteProps {
  pageRoute: string;
}

export interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: string;
  action?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}