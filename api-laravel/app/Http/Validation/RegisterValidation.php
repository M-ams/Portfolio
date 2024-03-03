<?php

namespace App\Http\Validation;

class RegisterValidation
{
    public function rules(): array
    {
        return [
            'name' => 'required|string|min:3|max:20',
            'email' => 'required|string|email|unique:users|min:3|max:150',
            'password' => 'required|string|min:3|max:150',
        ];
    }
}