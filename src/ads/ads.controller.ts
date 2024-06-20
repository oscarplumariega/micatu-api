import { Body, Controller, Delete, Get, Module, Param, Post } from '@nestjs/common';
import { AdsService } from './ads.service';

@Controller({})
export class AdsController {

    constructor(private adsService: AdsService){}

    @Post()
    create(@Body() createUser) {
      return 'This action adds a new user';
    }
    
    @Get('/ads')
    getAllUsers(){
        return this.adsService.getAds();
    }   
    
    @Delete('/ads/:id')
    remove(@Param('id') id: number){
        return `Deleting user ${id}`;
    }
}