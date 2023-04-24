import { Module } from "@nestjs/common";
import { SystemService } from "./system.service";

@Module({
    exports:[SystemService],
    imports:[SystemService]
})

export class sharModule{}