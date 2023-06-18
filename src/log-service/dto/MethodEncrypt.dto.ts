import { ApiProperty } from "@nestjs/swagger";

export class MethodRequest {
    @ApiProperty()
    typeEncrypt: string;

    @ApiProperty()
    typeLog: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}