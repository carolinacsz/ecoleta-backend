import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        {title: 'Lamps', image: 'lamps.svg'},
        {title: 'Batteries', image: 'batteries.svg'},
        {title: 'Papers', image: 'papers.svg'},
        {title: 'Electronic waste', image: 'electronics.svg'},
        {title: 'Organic waste', image: 'organics.svg'},
        {title: 'Cooking oil', image: 'oil.svg'},
    ]);
}