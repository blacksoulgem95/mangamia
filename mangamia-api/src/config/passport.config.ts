import {PassportStrategy} from "@nestjs/passport";
import {Injectable, UnauthorizedException} from "@nestjs/common";
import {CurrentUserService} from "../services/current-user/current-user.service";
import {Strategy} from "passport-local"

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthenticationService,
                private currUserSvc: CurrentUserService) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const valid = await this.authService.authenticateUser(username, password)
        if (!valid)
            return null
        const user = await this.authService.validateUser(username, password);
        if (!user)
            throw new UnauthorizedException();
        this.currUserSvc.setUsername(user.credential.username)
        return new UserDto(user);
    }
}