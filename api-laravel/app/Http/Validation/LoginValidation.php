<?php

namespace App\Http\Validation;

class LoginValidation
{
    public function rules(): array
    {
        return [
            'email' => 'required',
            'password' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'email.required' => 'L\'adresse email est requise',
            'password.required' => 'Le mot de passe est requis',
        ];
    }
}