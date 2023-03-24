import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const getJwtConfig = async (
	configService: ConfigService,
): Promise<JwtModuleOptions> => {
	return {
		secret: 'au9fih78314g87hh14ng923bgn2983nfd919d1',
	};
};
