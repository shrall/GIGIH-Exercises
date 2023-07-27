# Tokopedia Play API - README

This README provides an overview of the Tokopedia Play API, including the database structure, API structure, API request and response examples, and instructions on how to run the API locally.

## Database Structure

The API uses MongoDB as the database to store information about videos, products, and comments related to the smart home device. The database consists of three collections:

1. `videos` Collection:
   - `youtube_url`: String (URL of the video)
   - `thumbnail_url`: String (URL of the video thumbnail)
   - `createdAt`: Date (automatically generated timestamp)

2. `products` Collection:
   - `url`: String (URL of the product)
   - `image_url`: String (URL of the product image)
   - `title`: String (title of the product)
   - `price`: Number (price of the product)
   - `video_id`: String (reference to the video this product belongs to)
   - `createdAt`: Date (automatically generated timestamp)

3. `comments` Collection:
   - `username`: String (name of the user who posted the comment)
   - `comment`: String (content of the comment)
   - `video_id`: String (reference to the video this comment belongs to)
   - `createdAt`: Date (automatically generated timestamp)

## API Structure

The API is structured with the following endpoints:

1. `GET /video/`: Get all videos available.
2. `GET /video/:id`: Get a specific video by its ID.
3. `POST /video/`: Create a new video.
4. `GET /video/:id/comment`: Get all comments for a specific video.
5. `GET /video/:id/product`: Get all products for a specific video.
6. `POST /comment/`: Create a new comment.
7. `POST /product/`: Create a new product.

## API Request and Response Examples

1. GET /video/

   - Request:
     ```http
     GET /video/
     ```

   - Response:
     ```json
     [
       {
         "id": "video_id_1",
         "youtube_url": "https://www.youtube.com/watch?v=abc123",
         "thumbnail_url": "https://example.com/thumbnails/video1.jpg"
       },
       {
         "id": "video_id_2",
         "youtube_url": "https://www.youtube.com/watch?v=def456",
         "thumbnail_url": "https://example.com/thumbnails/video2.jpg"
       }
       // More videos...
     ]
     ```

2. GET /video/:id

   - Request:
     ```http
     GET /video/video_id_1
     ```

   - Response:
     ```json
     {
       "id": "video_id_1",
       "youtube_url": "https://www.youtube.com/watch?v=abc123",
       "thumbnail_url": "https://example.com/thumbnails/video1.jpg",
       "comments": [...],
       "products": [...]
     }
     ```

3. POST /video/

   - Request:
     ```http
     POST /video/
     Content-Type: application/json

     {
       "youtube_url": "https://www.youtube.com/watch?v=xyz789",
       "thumbnail_url": "https://example.com/thumbnails/video3.jpg"
     }
     ```

   - Response:
     ```json
     {
       "id": "video_id_3",
       "youtube_url": "https://www.youtube.com/watch?v=xyz789",
       "thumbnail_url": "https://example.com/thumbnails/video3.jpg"
     }
     ```

4. GET /video/:id/comment

   - Request:
     ```http
     GET /video/video_id_1/comment
     ```

   - Response:
     ```json
     [
       {
         "id": "comment_id_1",
         "username": "user1",
         "comment": "Great video!",
         "video_id": "video_id_1"
       },
       {
         "id": "comment_id_2",
         "username": "user2",
         "comment": "Nice content!",
         "video_id": "video_id_1"
       }
       // More comments...
     ]
     ```

5. POST /comment/

   - Request:
     ```http
     POST /comment/
     Content-Type: application/json

     {
       "username": "user3",
       "comment": "Well explained!",
       "video_id": "video_id_1"
     }
     ```

   - Response:
     ```json
     {
       "id": "comment_id_3",
       "username": "user3",
       "comment": "Well explained!",
       "video_id": "video_id_1"
     }
     ```

6. GET /video/:id/product

   - Request:
     ```http
     GET /video/video_id_1/product
     ```

   - Response:
     ```json
     [
       {
         "id": "product_id_1",
         "url": "https://www.tokopedia.com/p/makanan-minuman/bahan-kue/baking-powder",
         "image_url": "https://images.tokopedia.net/img/attachment/2019/3/6/2772/2772_405292ea-95f4-4d3a-b3f5-2e79cb1a86f2.png",
         "title": "Baking Powder",
         "price": 19.99,
         "video_id": "video_id_1"
       },
       {
         "id": "product_id_2",
         "url": "https://www.tokopedia.com/p/makanan-minuman/bahan-kue/coklat-bubuk",
         "image_url": "https://images.tokopedia.net/img/attachment/2019/3/6/2774/2774_ab0d1b35-e949-4997-a266-44c6592d4b08.png",
         "title": "Coklat Bubuk",
         "price": 99.99,
         "video_id": "video_id_1"
       }
       // More products...
     ]
     ```

7. POST /product/

   - Request:
     ```http
     POST /product/
     Content-Type: application/json

     {
       "url": "https://www.tokopedia.com/p/rumah-tangga",
       "image_url": "https://images.tokopedia.net/img/WgKiGm/2021/6/23/d649437b-eb2a-4f9b-899a-9190af0729cb.png",
       "title": "Rumah Tangga",
       "price": 129.99,
       "video_id": "video_id_1"
     }
     ```

   - Response:
     ```json
     {
       "id": "product_id_3",
       "url": "https://www.tokopedia.com/p/rumah-tangga",
       "image_url": "https://images.tokopedia.net/img/WgKiGm/2021/6/23/d649437b-eb2a-4f9b-899a-9190af0729cb.png",
       "title": "Rumah Tangga",
       "price": 129.99,
       "video_id": "video_id_1"
     }
     ```

## How to Run Locally

To run the Tokopedia Play API on your local machine, follow these steps:

1. Ensure you have Node.js and npm installed on your computer.
2. Clone the repository: `git clone https://github.com/shrall/GIGIH-Midterm.git`
3. Navigate to the project directory: `cd GIGIH-Midterm`
4. Run: `npm run setup`
5. Set up your MongoDB connection by adding the MongoDB URI in the appropriate configuration `.env` file that is generated after running `npm run setup`.
6. Run the API server: `npm start` or `npm run dev`.
7. The API should now be running locally on `http://localhost:3000`.

Make sure you provide the appropriate MongoDB connection URI and port for the database to work correctly.

**Note to Grader:** If you encounter any issues or have questions, feel free to reach out to me at marshallovierdo@gmail.com. Enjoy exploring the Tokopedia Play API!