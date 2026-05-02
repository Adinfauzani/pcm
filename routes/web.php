<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\Admin\AdminController;

Route::get('/', [PublicController::class, 'home'])->name('home');

Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('dashboard');
    Route::resource('posts', AdminController::class)->except(['show']);
    Route::resource('events', AdminController::class)->except(['show']);
    Route::resource('categories', AdminController::class)->except(['show']);
    Route::resource('galleries', AdminController::class)->except(['show']);
    Route::resource('members', AdminController::class)->except(['show']);
    Route::resource('donations', AdminController::class)->except(['show']);
    Route::resource('users', AdminController::class)->except(['show']);
});

Route::get('/profil', [PublicController::class, 'profil'])->name('profil');
Route::get('/struktur', [PublicController::class, 'struktur'])->name('struktur');
Route::get('/donasi', [PublicController::class, 'donasi'])->name('donasi');
Route::get('/berita', [PublicController::class, 'berita'])->name('berita');
Route::get('/berita/{post:slug}', [PublicController::class, 'beritaDetail'])->name('berita.detail');
Route::get('/kegiatans', [PublicController::class, 'kegiatans'])->name('kegiatans');
Route::get('/kegiatans/{event:slug}', [PublicController::class, 'kegiatansDetail'])->name('kegiatans.detail');
Route::get('/galeri', [PublicController::class, 'galeri'])->name('galeri');
Route::get('/kontak', [PublicController::class, 'kontak'])->name('kontak');