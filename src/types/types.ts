export interface NavItem {
    name: string;
    icon: React.ReactNode;
    page: string;
  }
  
  export interface FormSubmission {
    websiteLink: string;
    id: number;
    website: string;
    entries: number;
    lastSubmission: string;
    template: string;
  }
  
  export interface NavigationProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  }

  export interface FormEntry {
    id: number;
    email: string;
    password: string;
  }