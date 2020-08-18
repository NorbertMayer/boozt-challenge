<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../config/database.php';
    include_once '../models/product.php';

    // instantiate db & connect;
    $database = new Database();
    $db = $database->connect();

    // Instantiate product object
    $product = new Product($db);

    // instantiate product
    $result = $product->readProducts();
    // get row count
    $num = $result->rowCount();
    // check if any products
    if($num > 0) {
        $products_arr = array();
        $products_arr['data'] = array();
        while($row = $result -> fetch()) {
            extract($row);
            $product_item = array(
                'id' => $id,
                'brand_name' => $brand_name,
                'product_name' => $product_name,
                'image' => $filename,
                'actual_price' => number_format(floatval($actual_price), 2),
            );
        // push to data
        array_push($products_arr['data'], $product_item);
        }
        // turn to json
        echo json_encode($products_arr);
    } else {
        // no products
        echo 'No products found';
    }
?>