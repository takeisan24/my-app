# 📸 Hướng dẫn thêm ảnh cho Portfolio

## 🖼️ Ảnh cần thiết:

### 1. Avatar Image (`avatar.jpg`)
- **Vị trí**: `public/images/avatar.jpg`
- **Kích thước khuyến nghị**: 400x400px hoặc lớn hơn (tỷ lệ 1:1)
- **Định dạng**: JPG, PNG, WebP
- **Mô tả**: Ảnh chân dung của bạn, nên là ảnh rõ nét, ánh sáng tốt

### 2. Hero Background (`hero-bg.jpg`)
- **Vị trí**: `public/images/hero-bg.jpg`
- **Kích thước khuyến nghị**: 1920x1080px hoặc lớn hơn
- **Định dạng**: JPG, PNG, WebP
- **Mô tả**: Ảnh nền cho hero section (có thể là workspace, coding setup, hoặc abstract background)

## 🚀 Cách thêm ảnh:

### Bước 1: Chuẩn bị ảnh
1. Chọn ảnh avatar (selfie hoặc ảnh chân dung chuyên nghiệp)
2. Chọn ảnh background (workspace, setup, hoặc pattern đẹp)
3. Tối ưu kích thước ảnh nếu cần (không quá 2MB)

### Bước 2: Đặt ảnh vào thư mục
1. Copy ảnh avatar và đổi tên thành `avatar.jpg`
2. Copy ảnh background và đổi tên thành `hero-bg.jpg`
3. Paste vào thư mục `public/images/`

### Bước 3: Kiểm tra
- Refresh trang web để xem ảnh
- Nếu ảnh không hiển thị, kiểm tra:
  - Tên file có đúng không
  - Đường dẫn có chính xác không
  - File có tồn tại trong thư mục không

## 🎨 Gợi ý ảnh:

### Avatar:
- Ảnh chân dung tự nhiên, mỉm cười
- Nền đơn giản hoặc blur
- Ánh sáng tốt, rõ nét
- Phong cách chuyên nghiệp nhưng thân thiện

### Background:
- Setup coding workspace
- Abstract geometric patterns
- Cityscape/skyline
- Technology themed images
- Gradient backgrounds

## 🔧 Tùy chỉnh thêm:

### Thay đổi tên file:
Nếu muốn dùng tên file khác, sửa trong `app/page.tsx`:
```tsx
src="/images/your-avatar-name.jpg"  // Thay avatar.jpg
src="/images/your-bg-name.jpg"      // Thay hero-bg.jpg
```

### Thêm nhiều ảnh:
Có thể thêm thêm ảnh trong thư mục `public/images/` và sử dụng trong các phần khác của portfolio.

## 📱 Responsive:
Ảnh đã được tối ưu để hiển thị tốt trên mọi thiết bị (desktop, tablet, mobile).

---
*Sau khi thêm ảnh xong, portfolio sẽ trở nên cá nhân và chuyên nghiệp hơn rất nhiều!* 🌟
