import {Test, TestingModule} from '@nestjs/testing';
import {HttpException, HttpStatus, INestApplication} from '@nestjs/common';
import * as request from 'supertest';
import {AppModule} from './../src/app.module';
import {CreateReviewDto} from "../src/review/dto/create-review.dto";
import {Types, disconnect} from "mongoose"
import {NOT_FOUND_ID} from "../src/review/rewiew.constant";

const productId = new Types.ObjectId().toHexString()

const testDto: CreateReviewDto = {
    name: "Razmik",
    title: "React developer",
    description: "Опыт 2 года",
    rating: 45,
    productId
}
describe('AppController (e2e)', () => {
    let app: INestApplication;
    let createId: string;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/review/create (POST) - success', async () => {
        return request(app.getHttpServer())
            .post('/review/create')
            .send(testDto)
            .expect(201)
            .then(({body}: request.Response) => {
                try {
                    createId = body._id;
                    expect(createId).toBeDefined();
                } catch (err) {
                    throw new HttpException(NOT_FOUND_ID, HttpStatus.BAD_REQUEST)
                }

            });
    });
    it('/review/byProduct/:productId (get) - success', async () => {
        return request(app.getHttpServer())
            .get('/review/byProduct/' + createId)
            .expect(200)
            .then(({body}: request.Response) => {
                console.log(createId)
                try {
                    expect(body.length).toBe(1);
                } catch (err) {

                }

            });
    });

    it('/review/:id (DELETE) - success',  () => {
        return request(app.getHttpServer())
            .delete('/review/' + createId)
            .expect(200)
    });
    afterAll(() => {
        disconnect()
    });
});
