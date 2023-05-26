export interface ICustomInputProps {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  type: 'text' | 'number' | 'select' | 'email';
}
