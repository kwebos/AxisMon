
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('process').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('process').insert([{
    tenant              : 1,
    asset               : 1,
    resource_id         : 1,
    resource_type       : 'structure',
    file_name           : 'temp.ard',
    s3_name             : 'temp.ard',
    produce_asset       : 'ARD',
    status              : 'success',
    error_type          : null,
    error_message       : null,
    overrides           : null,
    expected_responses  : 3,
    actual_responses    : 2,
    display_name        : null
  },
  {
    tenant              : 1,
    asset               : 1,
    resource_id         : 1,
    resource_type       : 'structure',
    file_name           : 'temp.ard',
    s3_name             : 'temp.ard',
    produce_asset       : 'ARD',
    status              : 'success',
    error_type          : null,
    error_message       : null,
    overrides           : null,
    expected_responses  : 3,
    actual_responses    : 2,
    display_name        : null
  },
  {
    tenant              : 1,
    asset               : 1,
    resource_id         : 1,
    resource_type       : 'structure',
    file_name           : 'temp.ard',
    s3_name             : 'temp.ard',
    produce_asset       : 'ARD',
    status              : 'success',
    error_type          : null,
    error_message       : null,
    overrides           : null,
    expected_responses  : 3,
    actual_responses    : 2,
    display_name        : null
  },
  {
    tenant              : 1,
    asset               : 1,
    resource_id         : 1,
    resource_type       : 'structure',
    file_name           : 'temp.ard',
    s3_name             : 'temp.ard',
    produce_asset       : 'ARD',
    status              : 'success',
    error_type          : null,
    error_message       : null,
    overrides           : null,
    expected_responses  : 3,
    actual_responses    : 2,
    display_name        : null
  },
  {
    tenant              : 1,
    asset               : 1,
    resource_id         : 1,
    resource_type       : 'structure',
    file_name           : 'temp.ard',
    s3_name             : 'temp.ard',
    produce_asset       : 'ARD',
    status              : 'success',
    error_type          : null,
    error_message       : null,
    overrides           : null,
    expected_responses  : 3,
    actual_responses    : 2,
    display_name        : null
  },
  {
    tenant              : 1,
    asset               : 1,
    resource_id         : 1,
    resource_type       : 'structure',
    file_name           : 'temp.ard',
    s3_name             : 'temp.ard',
    produce_asset       : 'ARD',
    status              : 'success',
    error_type          : null,
    error_message       : null,
    overrides           : null,
    expected_responses  : 3,
    actual_responses    : 2,
    display_name        : null
  },
  {
    tenant              : 1,
    asset               : 1,
    resource_id         : 1,
    resource_type       : 'structure',
    file_name           : 'temp.ard',
    s3_name             : 'temp.ard',
    produce_asset       : 'ARD',
    status              : 'success',
    error_type          : null,
    error_message       : null,
    overrides           : null,
    expected_responses  : 3,
    actual_responses    : 2,
    display_name        : null
  }]),
        
      ]);
    });
};
