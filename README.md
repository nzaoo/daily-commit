# Daily Commit - GitHub Contribution Automation

Dự án tự động hóa commit hàng ngày để maintain streak trên GitHub contribution graph. Được thiết kế để tạo các commit có ý nghĩa theo một pattern có sẵn.

## 📋 Tính năng

- ✅ Tự động commit hàng ngày thông qua GitHub Actions
- ✅ Pattern tùy chỉnh để tạo hình vẽ trên contribution graph
- ✅ Commit messages tự động và đa dạng
- ✅ Chạy theo lịch (mặc định 2:00 AM hàng ngày)
- ✅ Hỗ trợ trigger thủ công qua workflow_dispatch

## 🚀 Cách sử dụng

### Yêu cầu

- GitHub repository (public hoặc private)
- GitHub Actions enabled
- Token với quyền `contents: write`

### Cấu hình

Workflow được cấu hình trong `.github/workflows/main.yml`:

```yaml
schedule:
  - cron: "0 2 * * *" # Chạy lúc 2:00 AM mỗi ngày
```

Bạn có thể thay đổi giờ chạy bằng cách sửa giá trị cron.

### Trigger thủ công

Vào tab **Actions** > **Daily Activity** > **Run workflow** để trigger ngay lập tức.

## 📊 Pattern

Dự án hiện tại sử dụng pattern để vẽ chữ **"NZAOO"** trên contribution graph:

- `1` = commit nhiều (6 commits) - tạo màu sẫm
- `0` = commit ít (1 commit) - tạo màu nhạt
- Kéo dài 52 tuần (1 năm)

## 🔧 Cách chỉnh sửa Pattern

Mở file `.github/workflows/main.yml` và tìm mục `BASE_PATTERN`, sau đó sửa mảng pattern theo ý bạn.

Ví dụ để vẽ những ô khác nhau, hãy thay đổi giá trị `0` và `1`.

## 📝 Commit Messages

Mỗi commit sẽ có một message ngẫu nhiên từ danh sách:

- Update dependencies
- Fix minor issue
- Refactor code
- Update docs
- Clean up files
- ...và nhiều tin nhắn khác

## 🤝 Đóng góp

Nếu bạn có ý tưởng cải thiện, vui lòng tạo issue hoặc pull request.

## 📄 License

MIT License - xem file [LICENSE](LICENSE) để chi tiết.

---

**Lưu ý:** Dự án này là công cụ tự động hóa. Hãy sử dụng một cách có trách nhiệm và đảm bảo tuân thủ các quy tắc của GitHub.
