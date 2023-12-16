import { Module, DynamicModule } from "@nestjs/common";


@Module({
    providers: []
})
export class DatabaseModule {
    static forRoot(entities = [], option?): DynamicModule {
        const providers = entities
        return {
            global: true, // Set the global scope. As this mentioned, making everything global is not a good design decision
            module: DatabaseModule,
            providers: providers,
            exports: providers,
        }
    }
}
// How we can use Global Module => 
/**
 * import { DatabaseModule } from './database/database.module';
 * 
 * @Module({
        imports: [DatabaseModule.forRoot([User])],
    })
    export class AppModule {}
 */