import { Body, Controller, Delete, Get, Module, Param, Post } from '@nestjs/common';
import { AdsService } from './ads.service';
import { CreateAdDto } from './create-ad.dto';

@Controller({})
export class AdsController {

    constructor(private adsService: AdsService){}

    @Post('/ads')
    create(@Body() ad: CreateAdDto) {
      return this.adsService.postAd(ad);
    }
    
    @Get('/ads')
    getAllUsers(){
        return this.adsService.getAds();
    }   
    
    @Delete('/ads/:id')
    remove(@Param('id') id: number){
        return this.adsService.deleteAd(id);
    }
}