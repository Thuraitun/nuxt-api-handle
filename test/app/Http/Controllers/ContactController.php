<?php

namespace App\Http\Controllers;
use App\Models\Contact;
use App\Http\Resources\ContactResource;
use App\Http\Requests\StoreContactRequest;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::all();

        return new ContactResource($contacts);
    }

    public function store(StoreContactRequest $request)
    {
        $validated = $request->validated();
        $contact = Contact::create($validated);

        return new ContactResource($contact);
    }
}
