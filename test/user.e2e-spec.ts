import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { UsersModule } from '../src/users/users.module';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [
            ConfigModule.forRoot({ isGlobal: true}),
            MongooseModule.forRootAsync({
                imports: [ConfigModule],
                useFactory: async (configService: ConfigService) => ({
                    uri: configService.get<string>('MONGODB_TEST_URI')
                }),
                inject: [ConfigService]
            }),
            UsersModule,
        ],
    })
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

    it('/users (GET)', () => {
        return request(app.getHttpServer())
            .get('/users')
            .expect(404)
    });

    it('/users (POST)', () => {
        return request(app.getHttpServer())
            .post('/users')
            .send({
                email: 'test6@test.pt',
                password: '123',
                username: 'John Mock'
            })
            .expect('Content-Type', /json/)
            .expect(201)
            .then(response => {
                expect(response.body).toEqual({
                    _id: expect.any(String),
                    username: expect.any(String),
                    email: expect.any(String),
                })
            })
    });
});
