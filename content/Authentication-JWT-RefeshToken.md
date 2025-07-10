# Authentication (xác thực người dùng)

- Nhận thông tin xác thực (Credentials): email & password
- Kiểm tra tính hợp lệ Credentials và tạo phiên đăng nhập hoặc tạo token (JWT)

# Authorization (Ủy quyền)

- Kiểm tra xem user có quyền truy cập một tài nguyên cụ thể hay không
- Kể cả check token/session trước khi truy cập vào một tài nguyên cũng là Authorization
  VD:
- Kiểm tra xem user có vai trò là admin hay không
- Kiểm tra người dùng có quyền đọc ghi thêm sửa xóa hay không
- Kiểm tra người dùng có vai trò phù hợp để được truy cập hay không
