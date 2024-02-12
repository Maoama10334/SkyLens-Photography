<?php
$directory = "C:/Users/LukasPC/Documents/GitHub/SkyLens-Photography/SkyLens/assets";
$images = glob($directory . "*.jpg", "*.png");

$gridCount = 3; // Number of grids you want
$grids = array_chunk($images, ceil(count($images) / $gridCount));

foreach ($grids as $gridImages) {
    echo '<div class="grid">';
    foreach ($gridImages as $image) {
        echo '<img src="' . $image . '" alt="">';
    }
    echo '</div>';
}
?>
