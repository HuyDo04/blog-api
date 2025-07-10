CREATE TABLE `users` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255) UNIQUE,
  `password` varchar(255),
  `username` varchar(255),
  `full_name` varchar(255),
  `phone` varchar(255),
  `gender` varchar(255),
  `birth_date` date,
  `role` varchar(255),
  `is_active` boolean,
  `last_login` datetime,
  `email_verified_at` datetime
);

CREATE TABLE `user_profiles` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `user_id` integer,
  `avatar` varchar(255),
  `bio` text,
  `address` text,
  `website` varchar(255),
  `facebook` varchar(255),
  `twitter` varchar(255),
  `instagram` varchar(255),
  `country` varchar(255)
);

CREATE TABLE `categories` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `parent_id` integer,
  `name` varchar(255),
  `slug` varchar(255),
  `description` text,
  `image` varchar(255),
  `is_active` boolean,
  `seo_title` varchar(255),
  `seo_description` varchar(255),
  `seo_keywords` varchar(255)
);

CREATE TABLE `brands` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `slug` varchar(255),
  `description` text,
  `logo` varchar(255),
  `website` varchar(255),
  `email` varchar(255),
  `phone` varchar(255),
  `address` varchar(255),
  `country` varchar(255),
  `is_active` boolean
);

CREATE TABLE `products` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `slug` varchar(255),
  `short_description` text,
  `description` text,
  `sku` varchar(255),
  `price` decimal,
  `cost_price` decimal,
  `stock_quantity` integer,
  `weight` decimal,
  `dimensions` varchar(255),
  `is_active` boolean,
  `brand_id` integer
);

CREATE TABLE `product_images` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `product_id` integer,
  `image_url` varchar(255)
);

CREATE TABLE `category_product` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `category_id` integer,
  `product_id` integer
);

CREATE TABLE `orders` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `order_code` varchar(255),
  `user_id` integer,
  `status` varchar(255),
  `total` decimal,
  `tax` decimal,
  `shipping_fee` decimal,
  `discount` decimal,
  `grand_total` decimal,
  `currency` varchar(255),
  `payment_status` varchar(255),
  `payment_method` varchar(255),
  `shipping_address` text,
  `note` text,
  `ordered_at` datetime,
  `shipped_at` datetime,
  `delivered_at` datetime
);

CREATE TABLE `order_items` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `order_id` integer,
  `product_id` integer,
  `quantity` integer,
  `price` decimal
);

CREATE TABLE `reviews` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `user_id` integer,
  `product_id` integer,
  `brand_id` integer,
  `rating` integer,
  `title` varchar(255),
  `content` text
);

CREATE TABLE `review_images` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `review_id` integer,
  `image_url` varchar(255)
);

ALTER TABLE `user_profiles` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `categories` ADD FOREIGN KEY (`parent_id`) REFERENCES `categories` (`id`);

ALTER TABLE `products` ADD FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);

ALTER TABLE `product_images` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `category_product` ADD FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

ALTER TABLE `category_product` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `order_items` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `order_items` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `reviews` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `reviews` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `reviews` ADD FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);

ALTER TABLE `review_images` ADD FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`);
