import {MigrationInterface, QueryRunner} from "typeorm";

export class ListingTable1585695467358 implements MigrationInterface {
    name = 'ListingTable1585695467358'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "listings" ADD "userId" uuid`, undefined);
        await queryRunner.query(`ALTER TABLE "listings" ADD CONSTRAINT "FK_45d5c4642c4cad0229da0ec22e7" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "listings" DROP CONSTRAINT "FK_45d5c4642c4cad0229da0ec22e7"`, undefined);
        await queryRunner.query(`ALTER TABLE "listings" DROP COLUMN "userId"`, undefined);
    }

}
