import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';
import { UseCase } from 'src/base/use-case';

export class GetUserProfileUseCase implements UseCase<void, UserModel> {

    constructor(private userRepository: UserRepository) { }

    execute(): Observable<UserModel> {
        return this.userRepository.getUserProfile();
    }

}