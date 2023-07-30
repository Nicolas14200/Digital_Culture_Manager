import { IsString } from "class-validator";
export class CreateEventCultureCommand {
    @IsString()
    note: string

    @IsString()
    plotId: string
}