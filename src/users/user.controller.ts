import { Body, Delete, Get, Module, Param, Post } from '@nestjs/common';

export class UserController {
    @Post()
    create(@Body() createUser) {
      return 'This action adds a new user';
    }
    
    @Get('/users')
    getAllUsers(){
        return 'Todos los usuarios';
    }   
    
    @Delete('/user/:id')
    remove(@Param('id') id: number){
        return `Deleting user ${id}`;
    }
}