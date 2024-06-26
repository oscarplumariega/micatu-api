import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ad } from './ads.entity';

@Injectable()
export class AdsService {
  constructor(
    @InjectRepository(Ad)
    private adsRepository: Repository<Ad>,
  ) {}

  getAds(){
    return this.adsRepository.find();
  }
  deleteAd(id:number){
    return this.adsRepository.delete(id);
  }
  postAd(ad){
    return this.adsRepository.insert(ad);
  }
}