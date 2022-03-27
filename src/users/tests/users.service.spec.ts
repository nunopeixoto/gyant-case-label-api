import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepository } from '../users.repository';
import { UsersService } from '../users.service';

describe('UsersService', () => {
  let service: UsersService;

  const mockUsersRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, UsersRepository],
    })
      .overrideProvider(UsersRepository)
      .useValue(mockUsersRepository)
      .compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
