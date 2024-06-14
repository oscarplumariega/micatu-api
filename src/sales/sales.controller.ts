import { Controller, Get } from "@nestjs/common";

@Controller({})
export class SalesController {

    @Get('/sales')
    getAllSales(){
        return 'Todas las ventas';
    }
}