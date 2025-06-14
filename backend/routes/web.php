<?php

use Illuminate\Support\Facades\Route;

Route::get('/api/mensagens', function () {
    return response()->jason(
        [
            ['texto' => 'Hello World'],
            ['texto' => 'Mensagem enviada pelo Backend Angular']
        ]);
});
