import { ApiProperty } from "@nestjs/swagger";

export class RegisterRequest {
    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    gender: string;
    
    @ApiProperty()
    age: string;
}