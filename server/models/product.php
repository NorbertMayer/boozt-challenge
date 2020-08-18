<?php 
    class Product {
        private $conn;
        private $table = 'products_list';

        public $id;
        public $brand_name;
        public $product_name;
        public $filename;
        public $actual_price;

        public function __construct($db) {
            $this->conn = $db;
        }

        // Get products
        public function readProducts() {
            // create query
            $sql = 'SELECT id, filename, product_name, brand_name, actual_price from products_list';
            return $this->conn->query($sql);
        }
    }
?>