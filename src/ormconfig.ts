import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config: MysqlConnectionOptions  = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'anjay',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true, //set true for development, use migration for production
    migrations: [
        'dist/db/migrations/*.js'
    ],
    cli: {
        migrationsDir: 'src/db/migrations'
    }
}

export default config;