import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";

@Controller({})
export class SalesController {
    
    @Post()
    create(@Body() createSale) {
      return 'This action adds a new sale';
    }

    @Get('/sales')
    getAllSales(){
        return 'Todas las ventas';
    }

    @Delete('/sales/:id')
    remove(@Param('id') id: number){
        return `Deleting sale ${id}`;
    }
}