import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1657203564198 } from 'src/migrations/1657203564198-CoffeeRefactor';
import { SchemaSync1657204092079 } from 'src/migrations/1657204092079-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'iluvcoffee',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1657203564198, SchemaSync1657204092079],
});
