# Quan hệ:

--Một topic có nhiều post(1-n)
--Một post thuộc về một topic(1-1)
--Một post có nhiều comment(1-n)
--Một comment thuộc về 1 post(1-1)

# Khởi tạo dự án

- npm init -y

## Cài đặt Sequelize + CLI + mysql2

- npm i express mysql2 sequelize sequelize-cli

# Cấu hình database (trong config)

# Tạo migration + model

- VD: npx sequelize-cli model:generate --name Topic --attributes name:string

# Khởi chạy db:migrate

# Cài đặt thư viện faker-js

- npm install @faker-js/faker

# Viêt RESTful API
