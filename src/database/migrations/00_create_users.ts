import { Knex } from "knex"

export async function up(knex: Knex){
    return knex.schema.createTable("users", table=>{
        table.uuid("id").primary().defaultTo(knex.raw(`(lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6))))`));
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.string("password").unique().notNullable();
        table.timestamp("created_at").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
        table.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    });
}
export async function down(knex: Knex){
    return knex.schema.dropTable("users");
}   