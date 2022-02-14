import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from "typeorm";
import { CreateUserDto, UpdateUserDto } from './users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}

      findAll(): Promise<User[]> {
        return this.usersRepository.find({
          relations: ["pets"]
        });
      }
    
      async findOne(id: number): Promise<User> {
        try {
          return await this.usersRepository.findOneOrFail(id,{
            relations: ["pets"]
          });
        } catch (error) {
          throw error;
        }
      }

      createUser(body: CreateUserDto): Promise<User> {
        const newUser = this.usersRepository.create(body);

        return this.usersRepository.save(newUser);
      }

      async updateUser(id: number,body: UpdateUserDto): Promise<User> {
        let updatedUser = await this.findOne(id);
        updatedUser.firstName = body.firstName;
        updatedUser.lastName = body.lastName;
        updatedUser.isActive = body.isActive;

        return this.usersRepository.save(updatedUser);
      }
    
      async remove(id: number): Promise<User> {
        const user = await this.findOne(id);
        
        return this.usersRepository.remove(user);
        //delete need parameter id, remove need an user entity
      }

      customQueryExample(): any {
        return this.usersRepository.createQueryBuilder("user").select("firstName").orderBy("id");
      }
}
