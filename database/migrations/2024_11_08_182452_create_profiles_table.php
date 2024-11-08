<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id'); // Foreign key to users table
            $table->string('first_name', 50);
            $table->string('last_name', 50);
            $table->string('contact_number', 20);
            $table->text('address')->nullable();
            $table->string('city', 50)->nullable();
            $table->string('state', 50)->nullable();
            $table->string('country', 50)->nullable();
            $table->string('profile_picture', 255)->nullable();
            $table->text('bio');
            $table->text('skills');
            // $table->timestamps();

            // Foreign key constraint
            $table->foreign('user_id')
                ->references('id') // Assuming `id` is the primary key in `users`
                ->on('users')
                ->onDelete('cascade'); // Optional: cascade deletes if user is deleted

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
