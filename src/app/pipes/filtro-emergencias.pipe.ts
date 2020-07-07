import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroEmergencias'
})
export class FiltroEmergenciasPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(!value)return null;
        if(!arg)return value;

        arg = arg.toLowerCase();

        return value.filter(function(item){
            return JSON.stringify(item).toLowerCase().includes(arg);
        });
  }

}
