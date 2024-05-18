import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('users') //http://localhost:3000/auth 
export class AuthController{
    constructor(private authService: AuthService) {}
    /*
        GET /users
        GET /users/:id
        POST /users
        PATCH /users/:id
        DELETE /users/:id
    */

    @Get() // /users
    //There is also be a Query Parameter like /users?role=Intern, so handle these we use @Query for this 
    findAll(@Query('role') role?: 'Intern' | 'Engineer' | 'Admin') {
        return []
    }

    @Get('interns') //If there is another param rather then ID than it should be come before /users/:id function,
    // or it will run :id function Everytime we enter any params.
    findAllInterns() {
        return { msg: 'All Interns' }
    }

    @Get(':id') // users/:id
    findOne(@Param('id') id: string) {
        return { id }
    }


    @Post()
    createUser(@Body() user: {}) {
        return user
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() updatedUser: {}) {
        return { id, ...updatedUser }
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return { id }
    }
}