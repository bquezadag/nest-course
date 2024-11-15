import {
IsString,
    Min,
MinLength
} from 'class-validator'

export class CreateTaskDto {

    @IsString()
    @MinLength(1)
    title: string

    @IsString()
    @MinLength(1)
    description: string     // esto valida si es un string, nada mas
}