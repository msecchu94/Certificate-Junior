import { UserModel } from "src/domain/models/user.model";

export interface AuthState {
  user: UserModel | null;
  error: string | null;
  isLoading: boolean;
}