<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
|    sqlite> .schema pets
|    CREATE TABLE `pets` (
|            `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
|            `name` varchar(255) NOT NULL,
|            `breed` varchar(255) NOT NULL,
|            `age` integer NOT NULL,
|            `personality` varchar(255) NOT NULL,
|            `shelter_id` integer NOT NULL,
|            `created_at` integer,
|            `updated_at` integer
|    );
|    sqlite> .schema locations
|    CREATE TABLE `locations` (
|            `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
|            `name` varchar(255) NOT NULL,
|            `address` varchar(255) NOT NULL,
|            `city` varchar(255) NOT NULL,
|            `state` varchar(255) NOT NULL,
|            `zip` varchar(255) NOT NULL,
|            `phone` varchar(255) NOT NULL,
|            `county` varchar(255) NOT NULL,
|            `latitude` varchar(255),
|            `longitude` varchar(255),
|            `created_at` integer,
|            `updated_at` integer
|    );
*/

Route::get("/pets", function() {
    $pets = DB::table('pets')->paginate(32);

    return response()->json($pets);
});

Route::get('/{a?}/{b?}/{c?}/{d?}/{e?}/{f?}/{g?}/{h?}/{i?}/{j?}/{k?}/{l?}/{m?}/{n?}/{o?}/{p?}/{q?}/{r?}/{s?}', function () {
    return view('welcome');
});
