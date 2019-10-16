-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 16, 2019 lúc 04:01 PM
-- Phiên bản máy phục vụ: 10.4.6-MariaDB
-- Phiên bản PHP: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `app`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phim`
--

CREATE TABLE `phim` (
  `id` int(11) NOT NULL,
  `ten_phim` varchar(255) NOT NULL,
  `noi_dung` text NOT NULL,
  `the_loai` varchar(255) NOT NULL,
  `dang` varchar(255) NOT NULL,
  `thoi_gian` varchar(255) NOT NULL,
  `gia_ve` varchar(255) NOT NULL,
  `anh` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `phim`
--

INSERT INTO `phim` (`id`, `ten_phim`, `noi_dung`, `the_loai`, `dang`, `thoi_gian`, `gia_ve`, `anh`) VALUES
(1, 'KONG: ĐẢO ĐẦU LÂU', 'Phim \"Kong: Skull Island\" (\"Kong: Đảo Đầu Lâu\") tái hiện lại hình tượng King Kong (Chúa tể loài khỉ) trong một hành trình phiêu lưu, hấp dẫn dưới bàn tay đạo diễn tài ba Jordan Vogt-Robert. \"Kong: Skull Islands\" được quay ngoại cảnh ở Tràng An, Vân Long, Tam Cốc, Vịnh Hạ Long và Động Phong Nha-Kẻ Bàng cùng các địa danh quốc tế như Hawaii, Úc...\r\nTrong phim, một nhóm các nhà thám hiểm liều lĩnh khám phá Đảo Đầu Lâu, nơi chưa có dấu chân người tại Thái Bình Dương. Hoang sơ, tuyệt đẹp nhưng nơi đây lại ẩn chứa rất nhiều cạm bẫy nguy hiểm. Và điều đáng sợ hơn là họ không hề hay biết rằng mình đang dấn thân vào lãnh địa của Kong huyền thoại.', 'Phim hành động, Phim viễn tưởng', '2D', '118 phút', '', 'https://m.media-amazon.com/images/M/MV5BMTUwMzI5ODEwNF5BMl5BanBnXkFtZTgwNjAzNjI2MDI@._V1_.jpg'),
(2, 'Liên Minh Công Lý', 'Justice League hay còn được biết đến với cái tên Liên Minh Công Lý, là tập hợp những siêu anh hùng mang trong mình sức mạnh phi thường để giải cứu thế giới khỏi những thế lực đen tối trong vũ trụ DC. Lần này, nhân loại phải đối mặt với tên ác quỷ vô cùng tàn độc – Steppenwolf. Hắn là một trong những tay sai đắc lực của Darksied – một ác nhân và cũng chính là kẻ thù lớn nhất của Liên Minh Công Lý.\r\nSteppenwolf đã phô trương năng lực siêu phàm của mình, gieo rắc nỗi sợ hãi và bóng tối tới xứ Themyscira – quê hương của Wonder Woman và loài người', 'Viễn tưởng', '2D, 3D', '120 phút', '', 'https://photo-3-baomoi.zadn.vn/w1000_r1/2017_11_17_276_25083740/c5fae1a8e6e90fb756f8.jpg'),
(3, 'ĐỊA ĐẠO CÁ SẤU TỬ THẦN', 'Bộ phim xoay quanh chuyến thăm nhà kinh hoàng của Haley, khi cô cùng người cha Dave phải tìm cách thoát khỏi căn nhà đang bị phá hủy bởi cơn bão cấp 5. Mọi cố gắng giải cứu đều trở nên khó khăn hơn bao giờ hết khi cô phát hiện ra một bầy cá sấu háu đói đã vào được nhà, và chực chờ săn đuổi hai cha con họ để “làm mồi”.', 'Phim hành động, Phim kinh dị', '2D, 3D', '120 phút', '', 'http://image.phimmoi.net/film/8646/preview.medium.jpg?_v=1570125280'),
(4, 'QUÁ NHANH QUÁ NGUY HIỂM 9', 'Câu chuyện giữa hai người tưởng như không đội trời chung là Đặc vụ An ninh Ngoại giao Mỹ Luke Hobbs và tên tội phạm đánh thuê khét tiếng Deckard Shaw khi họ bất đắc dĩ phải bắt tay hợp tác nhằm ngăn chặn âm mưu của trùm phản diện cực nguy hiểm trong diện bí ẩn Brixton.', 'Phim hành động, Phim phiêu lưu', '2D', '130 phút', '', 'https://cdn3.yeuphimmoi.com/wp-content/uploads/2019/08/poster.medium-2.jpg'),
(5, 'AVENGERS:END GAME', 'Biệt Đội Siêu Anh Hùng 4: Tàn Cuộc (Avengers 4: Endgame) ra mắt vào tháng 4/2019 sẽ giải quyết triệt để những khúc mắc đã vạch ra suốt 22 bộ phim trước đó của Vụ trụ điện ảnh Marvel (MCU). Hai tháng sau đó, Người Nhện 2 là khởi đầu hoàn toàn mới dành cho MCU.\r\nSau sự kiện Thanos làm cho một nửa vũ trụ tan biến và khiến cho biệt đội Avengers thảm bại, những siêu anh hùng sống sót phải tham gia trận chiến cuối cùng trong Avengers: Endgame.', 'Phim viễn tưởng, Phim hành động', '2D, 3D', '190 phút', '', 'https://images-na.ssl-images-amazon.com/images/I/81%2BNup8-8NL._SL1500_.jpg'),
(6, 'KUNG FU PANDA', 'xyzzzz', 'Hoạt hinh', '3D', '117 phút', '', 'sấ'),
(29, 'f', 'f', 'f', 'f', 'f', '', 'f');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `user` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `user`, `pass`) VALUES
(1, 'admin', '123'),
(2, 'chien', '123');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `phim`
--
ALTER TABLE `phim`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `phim`
--
ALTER TABLE `phim`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
