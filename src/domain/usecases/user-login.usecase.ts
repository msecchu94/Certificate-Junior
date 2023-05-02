import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UseCase } from 'src/base/use-case';
import { UserRepository } from '../repositories/user.repository';

export class UserLoginUseCase implements UseCase<{ username: string; password: string }, UserModel> {
    
    constructor(private userRepository: UserRepository) { }
    
    execute(
       params: { username: string, password: string },
    ): Observable<UserModel> {
        return this.userRepository.login(params);
    }

}