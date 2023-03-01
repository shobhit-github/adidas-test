
import axios, {AxiosError} from 'axios';




describe("REST API: Adidas Assigment", () => {

    describe("UserController", () => {

        let server: string = 'http://localhost:3000';

        it("should return a user details when the given userID", async () => {
            const response = await axios.get(server + '/users/2');

            expect(response.status).toBe(200);
            const {data} = response.data;

            expect(data.id).toBe(2);
            expect(data.name).toBe("Ervin Howell");
            expect(data.email).toBe("Shanna@melissa.tv");
        });

        it("should return a 400 status code if the invalid id pass in the param", async () => {

            try {
                await axios.get(server + '/users/null');
            } catch (e) {
                const apiRes = (e as AxiosError);

                expect(apiRes.response.status).toBe(400);
                const {data: responseBody} = apiRes.response as any;

                expect(responseBody.data).toBeNull();
                expect(responseBody.message).toBe("Something went wrong!");
                expect(responseBody.status).toEqual("error");
            }
        });


        it("should return a album details when the given userID", async () => {
            const response = await axios.get(server + '/users/2/albums');
            const titleOfAlbum = 'quam nostrum impedit mollitia quod et dolor';

            expect(response.status).toBe(200);
            const {data} = response.data;

            expect(data[0].userId).toBe(2);
            expect(data[0].title).toBe(titleOfAlbum);
            expect(data[0].user.name).toBe("Ervin Howell");
            expect(data[0].user.email).toBe("Shanna@melissa.tv");
        });

        it("should return a 400 status code if the invalid id pass in the album param", async () => {

            try {
                await axios.get(server + '/users/null/albums');
            } catch (e) {
                const apiRes = (e as AxiosError);

                expect(apiRes.response.status).toBe(400);
                const {data: responseBody} = apiRes.response as any;

                expect(responseBody.data).toBeNull();
                expect(responseBody.message).toBe("Something went wrong!");
                expect(responseBody.status).toEqual("error");
            }

        });


        it("should return a image details when the given userID", async () => {
            const response = await axios.get(server + '/users/2/images');
            const titleOfImage = 'asperiores exercitationem voluptates qui amet quae necessitatibus facere';
            const titleOfAlbum = 'quam nostrum impedit mollitia quod et dolor';

            expect(response.status).toBe(200);
            const {data} = response.data;

            expect(data[0].album.userId).toBe(2);
            expect(data[0].title).toBe(titleOfImage);
            expect(data[0].album.title).toBe(titleOfAlbum);
        });

        it("should return a 400 status code if the invalid id pass in the images param", async () => {

            try {
                await axios.get(server + '/users/null/images');
            } catch (e) {
                const apiRes = (e as AxiosError);

                expect(apiRes.response.status).toBe(400);
                const {data: responseBody} = apiRes.response as any;

                expect(responseBody.data).toBeNull();
                expect(responseBody.message).toBe("Something went wrong!");
                expect(responseBody.status).toEqual("error");
            }
        });

    });


})
