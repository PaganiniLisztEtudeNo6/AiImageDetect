interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
}

interface RequiredFieldError {
  message: string;
}

declare interface RequiredFieldError {
  message: string;
}

declare interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

declare interface RegisterResponse {
  success: boolean;
  message: string;
  userId?: string;
}
