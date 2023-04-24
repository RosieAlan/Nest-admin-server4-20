import { Injectable } from "@nestjs/common";

@Injectable()
export class SystemService{
    getEnv(){
        return {
            env:1
        }
    }
}