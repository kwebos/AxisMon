
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('process', function (table) {
            table.increments('id').primary().unsigned();
            table.integer('tenant');
            table.integer('asset');
            table.integer('resource_id');
            table.text('resource_type');
            table.text('file_name');
            table.text('s3_name');
            table.text('produce_asset');
            table.text('status');
            table.text('error_type');
            table.text('error_message');
            table.json('overrides');
            table.timestamp('createdAt');
            table.timestamp('updatedAt');	
            table.text('expected_responses');		
            table.text('actual_responses');		
            table.text('display_name');	
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('process')
    ]);
};
