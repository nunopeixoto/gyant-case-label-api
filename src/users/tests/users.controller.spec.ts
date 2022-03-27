import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';

describe('UsersController', () => {
  let controller: UsersController;

  const mockUsersService = {
    createUser: jest.fn(dto => {
      return {
        id: 'sampleId',
        ...dto
      }
    })
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService]
    })
      .overrideProvider(UsersService)
      .useValue(mockUsersService)
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', () => {
    let dto = {
      email: 'test@test.pt',
      password: 'test',
      username: 'John Test'
    };
    
    expect(controller.createUser(dto)).resolves.toEqual({
      id: expect.any(String),
      email: expect.any(String),
      password: expect.any(String),
      username: expect.any(String)
    })

    expect(mockUsersService.createUser).toHaveBeenCalledWith(dto);
  })
});
