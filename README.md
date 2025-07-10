# 📘 Blog API Project

Dự án Node.js xây dựng RESTful API quản lý **Topics, Posts, Comments** sử dụng:

- **Express**
- **Sequelize (MySQL)**
- **dotenv**
- **faker.js**

---

## 🛠️ Khởi tạo Project

```bash
# Khởi tạo project Node.js
npm init -y

# Cài đặt thư viện chính
npm install express sequelize sequelize-cli mysql2 dotenv faker

 ✨ Tạo Migration & Model
bash
Sao chép
Chỉnh sửa
npx sequelize-cli model:generate --name Topic --attributes name:string,slug:string

npx sequelize-cli model:generate --name Post --attributes title:string,content:text,slug:string,topicId:integer

npx sequelize-cli model:generate --name Comment --attributes content:text,postId:integer
🚀 Chạy Migration
bash
Sao chép
Chỉnh sửa
npx sequelize-cli db:migrate
🌱 Seeder dữ liệu giả
Tạo Seeder:
bash
Sao chép
Chỉnh sửa
npx sequelize-cli seed:generate --name demo-topic
Trong file seeder, sử dụng faker.js để tạo:

✅ Ít nhất 5 topics
✅ Mỗi topic có 50 posts
✅ Mỗi post có 5 comments

Chạy seeders:
bash
Sao chép
Chỉnh sửa
npx sequelize-cli db:seed:all
🔗 Associations
Topic hasMany Posts

Post belongsTo Topic

Post hasMany Comments

Comment belongsTo Post

Cấu hình associations trong models/index.js hoặc từng model.

API Routes

CRUD Posts


✅ Pagination (express-paginate hoặc custom middleware)
✅ Slug tự động từ title (dùng thư viện slugify hoặc tự viết function)

🎯 Chạy dự án
Thêm script vào package.json:
npm run dev


```
