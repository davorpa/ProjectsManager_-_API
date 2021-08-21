import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import UserEntity from './entities/user.entity';
import UserHistoryEntity from './entities/user-history.entity';

import { CompaniesModule } from 'src/companies/companies.module';

import { UsersController } from './users.controller';

import { UsersService } from './services/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, UserHistoryEntity]),
    CompaniesModule
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
